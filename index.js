#!/usr/bin/env node

let shell = require('shelljs')
let colors = require('colors')
let fs = require('fs')

let appName = process.argv[2]
let appDirectory = `${process.cwd()}/${appName}`

const run = async () => {
  let sucess = await createReactApp()
  if (!success) {
    console.log(
      `There was an error while trying to create your new React app using create-react-app!`
        .red
    )
    return false
  }

  await cdIntoNewApp()
  await installPackages()
  await updateTemplates()
  console.log('Congratulations, you are all done!')
}

run()

const createReactApp = () => {
  return new Promise((resolve) => {
    if (appName) {
      shell.exec(`npx create-react-app ${appName}`, () => {
        console.log('You new Lambda React app has been created!')
        resolve(true)
      })
    } else {
      console.log('\nYou did not provide an app name!'.red)
      console.log('\nProvide an app name using the following format: ')
      console.log('\nlambda-react ', 'app-name\n'.cyan)
      resolve(false)
    }
  })
}

const cdIntoNewApp = () => {
  return new Promise((resolve) => {
    shell.exec(`cd ${appName}`, () => {
      resolve()
    })
  })
}

const installPackages = () => {
  return new Promise((resolve) => {
    console.log('\nInstalling colors --> make your console.log beautiful!'.cyan)
    shell.exec(`npm i --save color`, () => {
      console.log('\nAll your packages have been installed!'.green)
      resolve()
    })
  })
}
