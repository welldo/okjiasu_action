/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2022-11-08 19:27:08
 * @lastModified  2022-11-11 08:13:17
 * Copyright © www.h7ml.cn All rights reserved
 */

const puppeteer = require("puppeteer");
const dayjs = require("dayjs");
const config = require("../../config/index");
const path = require("path");
const fs = require("fs");
const open_url_by_browser = require("open-url-by-browser");
const { sendEmail } = require(`../../utils/email`);
const { getHitokotoWords } = require("../../utils/hitokoto");
const { getElementAttribute } = require("../../utils/puppeteer");
/**
 * 截屏pdf所存目录
 */
const okjiasuPdf = path.join(__dirname, "./screenshot");

/**
 * 判断是否存在 okjiasuPdf 目录
 */
if (!fs.existsSync(okjiasuPdf)) {
  console.log(`不存在目录 ${okjiasuPdf}, 创建目录`);
  fs.mkdirSync(okjiasuPdf);
}

/**
 * 输出当前时间
 * @returns {string} 当前时间
 */
const nowTime = (format = "YYYY-MM-DD-HH-mm-ss") => {
  return dayjs().format(format);
};

/**
 * 截屏 生成png
 * @param {*} page
 * @param {*} selector
 * @param {*} path
 * @param {*} padding
 */
const screenshotDOMElement = async (page, selector, path, padding = 0) => {
  await page
    .waitForXPath(selector)
    .then(async (res) => {
      const rect = await res.boundingBox();
      await res.screenshot({
        path: path.replaceAll("pdf", "png"),
        clip: {
          x: rect.x - padding,
          y: rect.y - padding,
          width: rect.width + padding * 2,
          height: rect.height + padding * 2,
        },
      });
      const words = await getHitokotoWords();
      console.log(`${nowTime()} : 一言: ${words}`);
      console.log(`${nowTime()} : 开始发送邮件`);
      let tableTemplate = '';
      await fs.readFile(path.replaceAll("pdf", "json"), "utf-8", async (err, data) => {
        if (err) {
          throw err;
        }
        data = JSON.parse(data);
        tableTemplate = `<table style="width: 90%;background: #ccc;margin: 10px auto;border-collapse: collapse;" border="1" summary="Monthly savings for the Flintstones family">` +
          `<tbody>` +
          `<tr style="background: #fff;text-align: center;">` +
          `<th style="height: 25px;	line-height: 25px;	text-align: center;	border: 1px solid #ccc;background: #eee;	font-weight: normal;">订阅名称</th><th style="height: 25px;	line-height: 25px;	text-align: center;	border: 1px solid #ccc;background: #eee;	font-weight: normal;">订阅地址</th>` +
          `</tr>` +
          `${data.map(item => {
            const [text, url] = [item.text.replaceAll('复制', ''), item.url];
            return `<tr style="background: #fff;text-align: center;"> <td style="height: 25px;  line-height: 25px;  text-align: center; border: 1px solid #ccc;">${text} </td><td style="height: 25px;  line-height: 25px;  text-align: center; border: 1px solid #ccc;"><a href="${url}" target="_blank">${url}</a></td></tr>`
          }).join('')}` +
          `</tbody>` +
          `</table>`
        if (config.user.email)
          await sendEmail({
            to: config.user.email,
            text: words,
            subject: `【okjiasu_action check】${nowTime(
              "YYYY-MM-DD HH:mm:ss"
            )
              } 签到结果`,
            html:
              `<p style="text-align: center;"> 今日一言：${words}</p> <h2 style="text-align: center;">签到结果：</h2>` +
              `<div style="background: #fff;text-align: center;"><img src="cid:okjiasu_png" /></div> ` + ` ${tableTemplate}}`,
            attachments: [
              {
                filename: words,
                path: path.replaceAll("pdf", "png"),
                cid: "okjiasu_png",
              },
              {
                filename: "okjiasu.pdf",
                path: path,
                contentType: "application/pdf",
                cid: "okjiasu_pdf",
              },
              {
                filename: "okjiasu.json",
                path: path.replaceAll("pdf", "json"),
                contentType: "application/json",
                cid: "okjiasu_json",
              },
            ],
          });
        console.log(`${nowTime()} : 邮件发送成功`);
      });
    })
    .catch(async (err) => {
      console.log(`${nowTime()} : 截图失败`);
      console.log(err, "err");
    });
};

/**
 * @description: puppeteer浏览器的配置项
 */
const browserOptions = {
  headless: true,
  ignoreDefaultArgs: ["--disable-extensions"],
  defaultViewport: {
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
    isMobile: false,
    hasTouch: false,
    isLandscape: false,
  },
  args: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--use-gl=egl",
    "--disable-web-security",
    "--disable-features=IsolateOrigins,site-per-process",
  ],
};

/**
 * @description: 截屏 生成pdf
 */
const screenshot = async (page, pdfPath) => {
  if (browserOptions.headless) {
    console.log(`开始截图: 生成pdf ${pdfPath} `);
    await page.pdf({
      displayHeaderFooter: true,
      path: pdfPath,
      format: "A4",
      headerTemplate:
        '<b style="font-size: 30px;text-algin: center"> puppeteer  <b/>',
      footerTemplate:
        '<b style="font-size: 30px;text-algin: center">okjiasu_action by <a href="https://github.com/h7ml/">h7ml</a></b>',
      margin: {
        top: "100px",
        bottom: "200px",
        right: "30px",
        left: "30px",
      },
    });
    console.log(`截图生成成功`);
    // await open_url_by_browser(pdfPath);
  } else {
    console.log("请在headless模式下截图");
  }
};

/**
 * @description: 签到按钮xpath
 */
const checkBtnXpath =
  '//*[@id="dashboard-analytics"]/div[2]/div[2]/div[1]/div[1]/span/button';

/**
 * @description: 截图区域
 */
const screenXpath = '//*[@id="dashboard-analytics"]/div[2]/div[2]/div[2]/div';

/**
 * @description: 签到
 */
const checkIn = async (page) => {
  await page.waitForXPath(checkBtnXpath).then(async (res) => {
    const checkInfo = await res
      .executionContext()
      .evaluate((res) => res.textContent, res);
    checkInfo.includes("已签到")
      ? console.log(`${nowTime()} : 已签到, 退出程序`)
      : console.log(`${nowTime()} : 未签到, 开始签到`);
    const pdfPath = path.join(okjiasuPdf, `${nowTime("YYYY-MM-DD")}.pdf`);
    await screenshot(page, pdfPath);
    await page.waitForTimeout(1000);
    if (!checkInfo.includes("已签到")) {
      await page.click("#checkin");
      console.log(`${nowTime()} : 签到成功, 退出程序`);
    }
  });
};

/**
 * @description: 获取订阅链接
 */
const getSubscribeUrl = async (page) => {
  let subscribeUrl = [];
  const n = await page.$$(".copy-text", (element) => element);
  await Promise.all(
    n.map(async (item) => {
      const [subText, subUrl] = [
        await item
          .executionContext()
          .evaluate((item) => item.textContent, item),
        await item.evaluate((element) =>
          element.getAttribute("data-clipboard-text")
        ),
      ];
      subscribeUrl.push({ text: subText, url: subUrl });
    })
  );
  return subscribeUrl;
};

/**
 * 签到主方法
 * @param {*} options
 * @returns
 */
const getBrowser = async (options) => {
  if (!global._browser) {
  }
  try {
    puppeteer.launch(browserOptions).then(async (browser) => {
      const page = await browser.newPage();
      await page.goto(config.okjiasu.login);
      await page.waitForTimeout(1000);
      await page.type("#email", config.okjiasu.user, { delay: 50 });
      console.log(`${nowTime()} : 输入账号 ${config.okjiasu.user} `);
      await page.waitForTimeout(1000);
      console.log(`${nowTime()} : 输入密码 ******** `);
      await page.type("#password", config.okjiasu.password, { delay: 50 });
      // await page.waitForTimeout(2000)
      console.log(`${nowTime()} : 开始登陆`);
      await page.click("button[type=submit]");
      await page.waitForTimeout(8000);
      console.log(`${nowTime()} : 刷新页面`);
      await page.reload(); // 刷新页面,解决新注册用户广告弹窗问题
      await page.waitForTimeout(2000);
      await checkIn(page);
      await page.waitForTimeout(2000);
      const pdfPath = path.join(okjiasuPdf, `${nowTime("YYYY-MM-DD")}.pdf`);
      console.log(`${nowTime()} : 获取订阅链接`);
      const subInfo = await getSubscribeUrl(page);
      fs.writeFileSync(
        pdfPath.replaceAll("pdf", "json"),
        JSON.stringify(subInfo, null, 4),
        { encoding: "utf8", flag: "w" },
        function (err) {
          if (err) {
            throw err;
          }
          fs.readFile(
            pdfPath.replaceAll("pdf", "json"),
            "utf-8",
            function (err, data) {
              if (err) {
                throw err;
              }
              console.log(data);
            }
          );
        }
      );
      console.log(`${nowTime()} : 开始截屏`);
      await screenshotDOMElement(page, screenXpath, pdfPath);
      await page.waitForTimeout(6000);
      await closeBrowser();
      process.exit(0);
    });
  } catch (error) {
    console.log(error.message || "puppeteer启动失败");
  }
  return global._browser || null;
};

const closeBrowser = async () => {
  if (global._browser) {
    await global._browser.close();
    global._browser = null;
  }
};

module.exports = {
  getBrowser,
  closeBrowser,
};
