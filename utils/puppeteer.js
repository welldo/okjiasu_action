/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2022-11-09 11:36:07
 * @lastModified  2022-11-09 11:49:42
 * Copyright © www.h7ml.cn All rights reserved
 */
const expect = require('expect-puppeteer');
const puppeteer = require('puppeteer');

/**
 * 上传文件
 * @param {*} page 
 * @param {*} elementSelector 
 * @param {*} filePath 
 */
async function uploadfile(page, elementSelector, filePath) {
  const inputUploadHandle = await page.$(elementSelector);
  await inputUploadHandle.uploadFile(filePath);
}

/**
 * 校验元素中包含指定字符
 * @param {*} page 
 * @param {*} elementSelector 
 * @param {*} assertText 
 */
async function assertElementHaveText(page, elementSelector, assertText) {
  await page.waitFor(elementSelector, { visible: true });
  const element = await expect(page).toMatchElement(elementSelector, { timeout: 15000 });
  await expect(element).toMatch(assertText);
}

/**
 * 通过字符找到元素并点击
 * @param {*} page 
 * @param {*} tag 
 * @param {*} text 
 */
async function clickElementByText(page, tag, text) {
  await page.waitFor(500);
  await expect(page).toMatch(text, { timeout: 5000 });
  await expect(page).toClick(tag, { text: text });
  await page.waitFor(500);
}

/**
 * 屏蔽指定的域名list
 * @param {*} page 
 * @param {*} blockList 
 */
async function blockDomainsList(page, blockList) {
  await page.setRequestInterception(true);

  page.on('request', interceptedRequest => {
    if (blockList.includes(new URL(interceptedRequest.url()).host)) {
      interceptedRequest.abort();
    } else {
      interceptedRequest.continue();
    }
  })
}

/**
 * 清除输入框中的内容，并输入
 * @param {*} page 
 * @param {*} elementSelector 
 * @param {*} text 
 */
async function clearAndType(page, elementSelector, text) {
  const ainput = await page.$(elementSelector);
  await ainput.click({ clickCount: 3 });
  await ainput.press('Backspace');
  await page.type(elementSelector, text);
}

// /**
//  *  等待某个url请求返回
//  */
// await page.waitForResponse(response => {
//   // return里书写类似以下语句
//   return response.request().url().includes('api/v1/my/url');
// });

/**
 * 校验当前页面url是否正确
 * @param {*} page 
 * @param {*} url 
 */
async function assertCurrentUrl(page, url) {
  const currentUrl = await page.evaluate(() => location.href);
  if (currentUrl.indexOf(url) < 0) {
    throw new Error('url not in current url')
  }
}

// /**
//  * 允许下载文件
//  */
// await page._client.send('Page.setDownloadBehavior', {
//   behavior: 'allow',
//   // This path must match the WORKSPACE_DIR in Step 1
//   downloadPath: path.join(process.cwd(), 'download')
// });

/**
 * 通过Xpath点击元素
 * @param {*} page 
 * @param {*} tag 
 * @param {*} text 
 */
async function clickByXpathText(page, tag, text) {
  const xpath = `//${tag}[text()='${text}']`;
  await page.waitForXPath(xpath, { visible: true });
  await page.waitForTimeout(500);
  const elements = await page.$x(xpath);
  await elements[0].click();
}

/**
 * 判断元素是否可见
 * @param {*} page 
 * @param {*} elementSelector 
 * @returns 
 */
async function elementIsHidden(page, elementSelector) {
  const isHidden = await page.$eval(elementSelector, (elem) => {
    return elem.style.display === 'none'
  });
  return isHidden;
}

/**
 * 依次点击匹配的元素
 * @param {*} page 
 * @param {*} selector 
 * @param {*} x_path 
 */
async function clickEveryone(page, selector = '', x_path = '') {
  let elHandleArray = '';
  if (selector) {
    await page.waitForSelector(selector);
    elHandleArray = await page.$$(selector);
  }
  if (x_path) {
    await page.waitForXPath(x_path);
    elHandleArray = await page.$x(x_path);
  }
  if (!elHandleArray) {
    throw new Error('没有找到要点击的元素');
  }
  elHandleArray.forEach(async el => {
    await el.click({ delay: 50 }).catch(() => {
      //console.log('try click every downside confirm')
    })
  });
}

/**
 * 发送请求并获取返回结果
 * @param {*} attr 
 * @returns 
 */
async function getToken(attr) {
  return new Promise(resolve => {
    let obj = '';
    const data = JSON.stringify({
      username: attr["username"],
      password: attr["password"]
    });
    const options = {
      hostname: attr["base_url"],
      port: 443,
      path: '/pa/api/auth/login',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };
    callback = function (response) {
      var str = '';
      response.on('data', function (chunk) {
        str += chunk;
      });
      response.on('end', function () {
        obj = JSON.parse(str);
        resolve(obj);
      });
    };

    let request = https.request(options, callback);
    request.write(data);
    request.end();
  });
}

// /**
//  * 滚动屏幕
//  */
// await page.evaluate(_ => {
//   window.scrollBy(0, 600);
// });

// /**
//  * 滚动元素至可见
//  */
// await page.evaluate((element_selector) => {
//   document.querySelector(element_selector).scrollIntoView();
// }, element_selector);

/**
 * 控制新页面
 */
// const newPagePromise = new Promise(res =>
//   browser.once('targetcreated',
//     target => res(target.page())
//   )
// );
// // 执行打开新页面操作
// const page2 = await newPagePromise;
// await page2.bringToFront();

/**
 * 获取元素属性值
 * @param {*} page 
 * @param {*} selector 
 * @param {*} attribute 
 * @returns 
 */
async function getElementAttribute(page, selector, attribute) {
  return await page.$eval(selector, (el, attribute) =>
    el.getAttribute(attribute), attribute)
}

module.exports = {
  // uploadfile,
  // assertElementHaveText,
  // clickElementByText,
  // blockDomainsList,
  // assertCurrentUrl,
  // clickByXpathText
  // clickEveryone,
  // clearAndType,
  // elementIsHidden,
  // getToken,
  getElementAttribute
}