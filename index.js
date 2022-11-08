/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2022-11-08 19:27:08
 * @lastModified  2022-11-08 19:46:19
 * Copyright © www.h7ml.cn All rights reserved
 */

const puppeteer = require('puppeteer');
const dayjs = require('dayjs')
const config = require('./config/index')

const nowTime = () => {
  return dayjs().format('YYYY-MM-DD-HH-mm-ss')
}
const getBrowser = async (options) => {
  if (!global._browser) { }
  try {
    puppeteer.launch({
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
    }).then(async browser => {
      const page = await browser.newPage();
      // 打开登录界面
      await page.goto(config.okjiasu.login);
      await page.waitForTimeout(1000)
      await page.type("#email", config.okjiasu.user, { delay: 50 });
      console.log(`${nowTime()} : 输入账号 ${config.okjiasu.user}`)
      await page.waitForTimeout(1000)
      console.log(`${nowTime()} : 输入密码 ********`)
      await page.type("#password", config.okjiasu.password, { delay: 50 })
      await page.waitForTimeout(1000)
      await page.click("button[type=submit]");
      await page.waitForTimeout(3000)
      // console.log(`开始截图: ...`)
      // await page.pdf({
      //   displayHeaderFooter: true,
      //   path: `./okjiasu/${dayjs().format('YYYY-MM-DD-HH-mm-ss')}.pdf`,
      //   format: 'A4',
      //   headerTemplate: '<b style="font-size: 30px">okjiasu<b/>',
      //   footerTemplate: '<b style="font-size: 30px">h7ml</b>',
      //   margin: {
      //     top: "100px",
      //     bottom: "200px",
      //     right: "30px",
      //     left: "30px",
      //   }
      // });
      console.log(`${nowTime()} : 开始签到`)
      //获取.fa-calendar-check元素文本
      await page.waitForXPath('//*[@id="dashboard-analytics"]/div[2]/div[2]/div[1]/div[1]/span/button').then(async (res) => {
        const checkInfo = await res.executionContext().evaluate(res => res.textContent, res)
        if (checkInfo === '已签到') {
          console.log(`${nowTime()} : 已签到, 退出程序`)
          await closeBrowser()
          process.exit(0)
        } else {
          console.log(`${nowTime()} : 未签到, 开始签到`)
          // 点击签到 checkin
          await page.click('#checkin')
          await closeBrowser()
          process.exit(0)
        }
      }).catch((err) => {
        console.log(`${nowTime()} : 签到失败 ${err}`)
      })

      // console.log(text)
      // 点击.fa-calendar-check
      // await page.click(".fa-calendar-check");
      // await browser.close();
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


getBrowser();  //启动浏览器
module.exports = {
  getBrowser,
  closeBrowser
}