module.exports = {
  webpackBarName: 'hym111',
  webpackBanner:
    ' build: hym111 \n vue-admin-beautiful.com \n https://gitee.com/chu1204505056/hym111 \n time: ',
  donationConsole() {
    const chalk = require('chalk')
    console.log(
      chalk.green(
        `> 欢迎使用hym111，github开源地址：https://github.com/chuzhixin/hym111`
      )
    )
    console.log(
      chalk.green(
        `> 欢迎使用hym111，码云开源地址：https://gitee.com/chu1204505056/hym111`
      )
    )

    console.log(
      chalk.green(`> pro版演示地址：http://vue-admin-beautiful.com/admin-pro`)
    )

    console.log(
      chalk.green(`> plus版演示地址：http://vue-admin-beautiful.com/admin-plus`)
    )

    console.log(
      chalk.green(
        `> 使用中出现任何问题可加QQ群反馈，获取基础版、文档，请我们喝杯咖啡（如若情况不允许，请勿勉强）：https://gitee.com/chu1204505056/hym111#-%E5%89%8D%E7%AB%AF%E8%AE%A8%E8%AE%BA-qq-%E7%BE%A4`
      )
    )

    console.log(chalk.green(`> 如果您不希望显示以上信息，可在config中配置关闭`))
    console.log('\n')
  },
}
