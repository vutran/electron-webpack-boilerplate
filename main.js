'use strict'

// Import modules
const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

// Load environmental variables
require('dotenv').load()

if (process.env.NODE_ENV === "development") {
  let hotReloadServer = require('hot-reload-server')
  let webpackConfig = require('./webpack.config.dev')
  hotReloadServer(webpackConfig, {
    publicPath: '/dist'
  }).start()
}

// Create a variable to hold the window
let mainWindow = null

app.on('ready', function() {

  // creates a new browser window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })
  if (process.env.NODE_ENV === "development") {
    // open the devtools
    mainWindow.webContents.openDevTools()
  }
  // load the file
  mainWindow.loadURL('file://' + __dirname + '/index.html')
  // Register window events
  mainWindow.on('closed', function() {
    mainWindow = null
  })
})
