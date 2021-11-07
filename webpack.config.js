const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const appDirectory = path.resolve(__dirname, './')

// This is needed for webpack to compile JavaScript.
// Many OSS React Native packages are not compiled to ES5 before being
// published. If you depend on uncompiled packages they may cause webpack build
// errors. To fix this webpack can be configured to compile to the necessary
// `node_module`.
const babelLoaderConfiguration = {
  test: /\.js$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(appDirectory, 'App.js'),
    path.resolve(appDirectory, 'index.web.js'),
    path.resolve(appDirectory, 'src'),
    path.resolve(appDirectory, 'node_modules/react-native-uncompiled')
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      // The 'metro-react-native-babel-preset' preset is recommended to match React Native's packager
      presets: ['module:metro-react-native-babel-preset'],
      // Re-write paths to import only the modules needed by the app
      plugins: ['react-native-web']
    }
  }
};

// This is needed for webpack to import static images in JavaScript files.
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[hash:8].[ext]',
      esModule: false,
    }
  }
};

module.exports = {
  mode: 'development',

  // Path to the entry file, change it according to the path you have
  entry: path.join(appDirectory, 'index.web.js'),

  // Path for the output files
  output: {
    path: path.join(appDirectory, 'dist'),
    filename: '[name].[contenthash:8].js', // 打包后的文件名称
    publicPath: '/'
  },

  // Enable source map support
  devtool: 'source-map',

  // Loaders and resolver config
  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration,
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        include: path.resolve(appDirectory, 'src')
      },
    ]
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    // extensions: ['.web.js', '.js']
    extensions: ['.web.ts', '.web.tsx', '.web.js', '.ts', '.tsx', '.js']
  },

  // Development server config
  devServer: {
    static: {
      directory: path.join(appDirectory, 'public'),
    },
    historyApiFallback: true,
    compress: true,
    port: 9000
  },
  /* webpack 插件配置 html-webpack-plugin */
  plugins: [
    new HTMLWebpackPlugin(
      { template: path.join(appDirectory, 'public/index.html') }
    )
  ]
}