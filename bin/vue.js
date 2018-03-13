#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk')

program
  .version(require('../package').version)
  .usage('<command> [options]')

program
  .command('create <app-name>')
  .description('create a new project powered by chf-vue-service') 
  .action((name, cmd) => {
    require('../lib/create')(name, process.cwd())
  })

program
  .arguments('<command>')
  .action((cmd) => {
    program.outputHelp()
    console.log(`  ` + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`))
    console.log()
  })

program.parse(process.argv);