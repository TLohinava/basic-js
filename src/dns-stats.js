const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const statObj = {};
  const inner = domains.map(domain => domain.split('.').reverse().map(item => '.' + item));
  let key = '';
  for (let i = 0; i < inner.length; i++) {
    key = '';
    for (let j = 0; j < inner[i].length; j++) {
      key += inner[i][j];
      const filteredInner = inner.filter(item => item.join('').includes(key));
      statObj[key] = filteredInner.length;
    }
  }

  return statObj;
}

module.exports = {
  getDNSStats
};
