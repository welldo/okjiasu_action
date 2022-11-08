/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2022-11-08 22:01:10
 * @lastModified  2022-11-08 22:03:08
 * Copyright © www.h7ml.cn All rights reserved
 */
// 对象深度合并
const deepMerge = (ops1, ops2) => {
  let ops = Object.assign({}, ops1, ops2)
  let keys = Object.keys(ops1)
  keys.forEach((item) => {
    if (typeof ops1[item] === 'object' && !Array.isArray(ops1[item])) {
      ops[item] = Object.assign({}, ops1[item], ops2[item] || {})
    }
  })
  return ops
}
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


module.exports = {
  deepMerge,
  getRandomInt
}