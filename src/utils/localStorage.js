import { storage } from '@/config'
/**
 * @description 获取本地存储数据
 */
export function getLocalStorage(name) {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.getItem(name)
    } else if ('sessionStorage' === storage) {
      return sessionStorage.getItem(name)
    } else {
      return localStorage.getItem(name)
    }
  } else {
    return localStorage.getItem(name)
  }
}

/**
 * @author https://vue-admin-beautiful.com （不想保留author可删除）
 * @description 存储本地存储数据
 * @param accessToken
 * @returns {void|*}
 */
export function setLocalStorage(name, data) {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.setItem(name, data)
    } else if ('sessionStorage' === storage) {
      return sessionStorage.setItem(name, data)
    } else {
      return localStorage.setItem(name, data)
    }
  } else {
    return localStorage.setItem(name, data)
  }
}

/**
 * @description 移除存储本地存储数据
 * @returns {void|Promise<void>}
 */
export function removeStoragename(name) {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.removeItem(name)
    } else if ('sessionStorage' === storage) {
      return sessionStorage.clear()
    } else {
      return localStorage.removeItem(name)
    }
  } else {
    return localStorage.removeItem(name)
  }
}
