/* 封装所有存储到storage中的操作 */
const TOKEN_KEY = 'wodetoken'
// 存、获取，删token
export function setTokenStorage (token) {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
}

export function getTokenStorage () {
  return JSON.parse(localStorage.getItem(TOKEN_KEY))
}

export function removeTokenStorage () {
  localStorage.removeItem()
}
