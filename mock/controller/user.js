/* eslint-disable prettier/prettier */
// const accessTokens = {
//   hym: 'hym-accessToken',
//   admin: 'admin-accessToken',
//   editor: 'editor-accessToken',
//   test: 'test-accessToken',
// }
const data = [
  {
    username: 'hym',
    password: '11111111',
    avatar: 'https://i.gtimg.cn/club/item/face/img/2/15922_100.gif',
    permissions: ['admin'],
  },
  {
    username: '1111',
    password: '11111111',
    avatar: 'https://i.gtimg.cn/club/item/face/img/2/15922_100.gif',
    permissions: ['editor'],
  },
  {
    username: 'test',
    password: '222222',
    avatar: 'https://i.gtimg.cn/club/item/face/img/2/15922_100.gif',
    permissions: ['read'],
  },
]
module.exports = [
  {
    url: '/publicKey',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: 'success',
        data: {
          mockServer: false,
          publicKey:
            'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4aWAgASppilGGGPv6wdCp4AqTRbQPEMxU1mNwBXmP6v0hp2eHo8LMhjjM4IwzdzOnwyTR6v5YlznBb90cWKsr/DP1IdSI9ox7M7FCHGfURfLp/mGRvNLnJ5ds7YD+35rP0wLMZhNbkXHs3HMYOY96XnSE7bfcWkLiRrwiCrqLdQIDAQAB',
        },
      }
    },
  },
  {
    url: '/login',
    type: 'post',
    response(config) {
      const { username, password } = config.body
      const userinfo = data.find((item) => item.username == username) || {};
      const accessToken = true
      if (!userinfo.username) {
        return {
          code: 500,
          msg: '帐户不存在!',
        }
      } else {
        if (userinfo.password == password) {
          return {
            code: 200,
            msg: 'success',
            data: { accessToken },
          }
        }
        return {
          code: 500,
          msg: '密码错误!',
        }
      }
    },
  },
  {
    url: '/register',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: '模拟注册成功',
      }
    },
  },
  {
    url: '/userInfo',
    type: 'post',
    response(config) {
      let { accessToken, username } = config.body;

      let obj = data.find((item) => item.username == username);
      let permissions = obj.permissions
      let avatar = obj.avatar;
      // username = 'aaaa'
      // if ('admin-accessToken' === accessToken) {
      //   permissions = ['admin']
      //   username = 'hym'
      // }
      // if ('editor-accessToken' === accessToken) {
      //   permissions = ['editor']
      //   username = 'editor'
      // }
      // if ('test-accessToken' === accessToken) {
      //   permissions = ['admin', 'editor']
      //   username = 'test'
      // }
      return {
        code: 200,
        msg: 'success',
        data: {
          permissions,
          username,
          avatar,
          // ...accessToken
        },
      }
    },
  },
  {
    url: '/logout',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: 'success',
      }
    },
  },
]
