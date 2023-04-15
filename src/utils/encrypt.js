import JSEncrypt from 'jsencrypt'
import { getPublicKey } from '@/api/publicKey'

const privateKey =
  'MIICeQIBADANBgkqhkiG9w0BAQEFAASCAmMwggJfAgEAAoGBALhpYCABKmmKUYYY+/rB0KngCpNFtA8QzFTWY3AFeY/q/SGnZ4ejwsyGOMzgjDN3M6fDJNHq/liXOcFv3RxYqyv8M/Uh1Ij2jHszsUIcZ9RF8un+YZG80ucnl2ztgP7fms/TAsxmE1uRcezccxg5j3pedITtt9xaQuJGvCIKuot1AgMBAAECgYEAti7cWSHtrZCJk6oRHhzlsT12FSKSjSOyScn3OM8f1i933gyNOjJtmzKq4LShraKAtKcUNBItLoZP96s0zPFIQCGjON0d3XyRxoGK2h3nEZT8NTqEcQVI2sbOy5PvJHAKT/Vrcqdkt/U9YteLWAKGZ5A8Ie8NZEjh0botUwIrOIECQQDd+Qv8IYiDSugZcOPEz/ijCR4Jg011X9/bqXVIEiqkIZ+8QToKCBuGt0EejhAzs0acni1XLPwBeDmAsmg8MmpVAkEA1K5NL3ZwuLjz4vs8EfF3BfscPTQZ9PRBhzGC9iqP7TyzMRyZjGpWfycOjki8isRzR3iNoFPIyLZfe5Wf4vL8oQJBALHia6BanzPYS7hXp7CJmg/NtqyY9PIjKxq16q8fH9z4tTIAc6qmZKjJIv6Biqpj+Sp5+IvsGOh0mGBymOXk4SECQQDDxSYbeGTORMGKwERNJ/2trbYSyHDUQDpJXdP1ELynXeZ8YJ0e2YuBQ8xsQJv9CFQtB9UmLbl2uBkwQ0yHta/BAkEAoKN1vdqkDTwAkSRpvFUOHkc7E6nEYdXwM+hhKnmQLCQb2aP8zW9GI2Q7EWPDEwN92TK30k1VSzpquSU7SUA32g'

/**
 * @author https://vue-admin-beautiful.com （不想保留author可删除）
 * @description RSA加密
 * @param data
 * @returns {Promise<{param: PromiseLike<ArrayBuffer>}|*>}
 */
export async function encryptedData(data) {
  let publicKey = ''
  const res = await getPublicKey()
  publicKey = res.data.publicKey
  if (res.data.mockServer) {
    publicKey = ''
  }
  if (publicKey == '') {
    return data
  }
  let encrypt = new JSEncrypt()
  encrypt.setPublicKey(
    `-----BEGIN PUBLIC KEY-----${publicKey}-----END PUBLIC KEY-----`
  )

  data = encrypt.encrypt(JSON.stringify(data))
  return JSON.parse(decryptedData(data))
}

/**
 * @author https://vue-admin-beautiful.com （不想保留author可删除）
 * @description RSA解密
 * @param data
 * @returns {PromiseLike<ArrayBuffer>}
 */
export function decryptedData(data) {
  const decrypt = new JSEncrypt()
  decrypt.setPrivateKey(
    `-----BEGIN RSA PRIVATE KEY-----${privateKey}-----END RSA PRIVATE KEY-----`
  )
  data = decrypt.decrypt(data)
  return data
}
