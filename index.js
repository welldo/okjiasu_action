/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2022-11-08 19:27:08
 * @lastModified  2022-11-08 23:16:17
 * Copyright © www.h7ml.cn All rights reserved
 */

const puppeteer = require('puppeteer');
const dayjs = require('dayjs')
const config = require('./config/index')
const path = require('path')
const fs = require('fs')
const open_url_by_browser = require("open-url-by-browser");
const { sendEmail } = require(`./utils/email`)
const { getHitokotoWords } = require('./utils/hitokoto')
/**
 * 截屏pdf所存目录
 */
const okjiasuPdf = path.join(__dirname, './okjiasu')

/**
 * 判断是否存在 okjiasuPdf 目录
 */
if (!fs.existsSync(okjiasuPdf)) {
  console.log(`不存在目录 ${okjiasuPdf}, 创建目录`)
  fs.mkdirSync(okjiasuPdf)
}

/**
 * 输出当前时间
 * @returns {string} 当前时间
 */
const nowTime = () => {
  return dayjs().format('YYYY-MM-DD-HH-mm-ss')
}

/**
 * @description: puppeteer浏览器的配置项
 */
const browserOptions = {
  headless: false,
  ignoreDefaultArgs: ['--disable-extensions'],
  defaultViewport: {
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
    isMobile: false,
    hasTouch: false,
    isLandscape: false
  },
  args: [
    '--no-sandbox', '--disable-setuid-sandbox',
    '--use-gl=egl',
    '--disable-web-security',
    '--disable-features=IsolateOrigins,site-per-process',
  ]
}

/**
 * @description: 截屏
 */
const screenshot = async (page) => {
  const pdfPath = path.join(okjiasuPdf, `${nowTime()}.pdf`)
  if (browserOptions.headless) {
    console.log(`开始截图: 生成pdf ${pdfPath}`)
    await page.pdf({
      displayHeaderFooter: true,
      path: pdfPath,
      format: 'A4',
      headerTemplate: '<b style="font-size: 30px;text-algin: center"> puppeteer  <b/>',
      footerTemplate: '<b style="font-size: 30px;text-algin: center">okjiasu_action by <a href="https://github.com/h7ml/">h7ml</a></b>',
      margin: {
        top: "100px",
        bottom: "200px",
        right: "30px",
        left: "30px",
      }
    });
    console.log(`截图生成成功`)
    // await open_url_by_browser(pdfPath);
  } else {
    console.log('请在headless模式下截图')
  }
}

/**
 * @description: 签到按钮xpath
 */
const checkBtnXpath = '//*[@id="dashboard-analytics"]/div[2]/div[2]/div[1]/div[1]/span/button'

/**
 * @description: 签到
 */
const checkIn = async (page) => {
  await page.waitForXPath(checkBtnXpath).then(async (res) => {
    const checkInfo = await res.executionContext().evaluate(res => res.textContent, res)
    if (checkInfo.includes('已签到')) {
      await screenshot(page)
      console.log(`${nowTime()} : 已签到, 退出程序`)
      await closeBrowser()
      process.exit(0)
    } else {
      console.log(`${nowTime()} : 未签到, 开始签到`)
      await page.click('#checkin')
      await page.waitForTimeout(5000)
      await screenshot(page)
      console.log(`${nowTime()} : 签到成功, 退出程序`)
      await closeBrowser()
      process.exit(0)
    }
  })
}

/**
 * 签到主方法
 * @param {*} options 
 * @returns 
 */
const getBrowser = async (options) => {
  if (!global._browser) { }
  try {
    puppeteer.launch(browserOptions).then(async browser => {
      const page = await browser.newPage();
      await page.goto(config.okjiasu.login);
      await page.waitForTimeout(2000)
      await page.type("#email", config.okjiasu.user, { delay: 500 });
      console.log(`${nowTime()} : 输入账号 ${config.okjiasu.user}`)
      await page.waitForTimeout(2000)
      console.log(`${nowTime()} : 输入密码 ******** `)
      await page.type("#password", config.okjiasu.password, { delay: 500 })
      // await page.waitForTimeout(2000)
      console.log(`${nowTime()} : 开始登陆`)
      await page.click("button[type=submit]");
      await page.waitForTimeout(8000)
      console.log(`${nowTime()} : 刷新页面`)
      await page.reload() // 刷新页面,解决新注册用户广告弹窗问题
      await page.waitForTimeout(2000)
      const words = await getHitokotoWords()
      await sendEmail({
        to: config.user.email,
        text: `今日一句诗词：${words}`,
        subject: '【okjiasu_action】邮件测试'
      })
      console.log(`${nowTime()} : 开始签到`)
      await checkIn(page)
    });
  }
  catch (error) {
    console.log(error.message || 'puppeteer启动失败')
  }
  return global._browser || null
}

const closeBrowser = async () => {
  if (global._browser) {
    await global._browser.close()
    global._browser = null
  }
}


getBrowser();

module.exports = {
  getBrowser,
  closeBrowser
}