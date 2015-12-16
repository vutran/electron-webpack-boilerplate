// Load modules
const webpack = require('webpack')
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer')
const path = require('path')

// Load base config
const baseConfig = require('./webpack.config.base')

// Create the config
const config = Object.create(baseConfig)

// Set entry points
config.entry = [
    'webpack-hot-middleware/client?path=http://localhost:4000/__webpack_hmr&reload=true',
    path.join(__dirname, '/app/index.js')
]

// Set output
config.output.publicPath = 'http://localhost:4000/dist/'

// Enable source maps
config.devtool = 'source-map'

// ES lint
config.eslint = {
  parser: 'babel-eslint'
}

// Dev plugins
config.plugins.push(
   new webpack.optimize.OccurenceOrderPlugin(),
   new webpack.HotModuleReplacementPlugin(),
   new webpack.NoErrorsPlugin()
)

// Specify Electron renderer
config.target = webpackTargetElectronRenderer(config)

// Export module
module.exports = config
