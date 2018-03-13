
const download = require('./download');
const ora = require('ora');
const address = require('../package').template;
const chalk = require('chalk');

const spinner = ora(`正在从${address}下载模板`);
const spinners = ora(`正在复制模板`);

let create = (name, cwd) => {
  spinner.start()
  download(address)
    .then(target => {
      spinner.succeed();
      console.log(chalk.blue(`下载成功`));
      spinners.start();
      require('./copy')(target, cwd)
        .then(() => {
          spinners.succeed();
          console.log(chalk.blue.bgRed.bold(`项目初始化成功`));
        })
        .catch(error => {
          spinners.fail();
         console.log(chalk.red(`复制模板失败:${error}`));
        });
    })
    .catch(error => {
      spinner.fail();
      console.log(chalk.red(`下载失败:${error}`));
    });
};

module.exports = create;