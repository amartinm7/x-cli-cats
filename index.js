#! /usr/bin/env node
const console = require('console')
const mason = require('commander')

const chalk = require('chalk')
const { version } = require('./package.json')
// eslint-disable-next-line no-unused-vars
const error = chalk.bold.red
const warning = chalk.keyword('orange')
const info = chalk.keyword('cyan')

// commands, add as many as you wish
const GetCategoryPath = require('./src/commands/GetCategoryPath')

mason.version(version)

mason
  .command('getcategorypath <categoryId> <filePath>')
  .description('give me a categoryId <categoryId> and  filePath <filePath>')
  .action((categoryId, filePath) => {
    console.log(
      info('creating category path of categoryId "%s" and filePath "%s"'),
      categoryId,
      filePath
    )
    const jsonFile = require(filePath)
    new GetCategoryPath().getCategoryPath({ categoryId, jsonFile })
  })

mason
  .command(
    'getcategorypathbylevel <categoryId> <filePath> <numOfLevelsInCategoryPath> '
  )
  .description(
    'give me a categoryId <categoryId>, filePath <filePath> and numOfLevelsInCategoryPath <numOfLevelsInCategoryPath>'
  )
  .action((categoryId, filePath, numOfLevelsInCategoryPath) => {
    console.log(
      info(
        'creating category path of categoryId "%s", filePath "%s" and numOfLevelsInCategoryPath "%s"'
      ),
      categoryId,
      filePath,
      numOfLevelsInCategoryPath
    )
    const jsonFile = require(filePath)
    new GetCategoryPath().getCategoryPathWithParentAndDetails({
      categoryId,
      jsonFile,
      numOfLevelsInCategoryPath
    })
  })

mason.command('*').action(() => {
  mason.help()
})

mason.parse(process.argv)

if (!mason.args.length) {
  console.log(
    warning('Please, read the instruccions before keep on working...')
  )
  mason.help()
}
