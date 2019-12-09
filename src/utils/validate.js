/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 * 这里对用户名的验证,先不设置,多有都返回true
 *   // const valid_map = ['admin', 'editor']
 * // return valid_map.indexOf(str.trim()) >= 0
 */
export function validUsername(str) {
  return (str !== null || str !== '')
}
