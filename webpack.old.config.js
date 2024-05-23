const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appDirectory = path.resolve(__dirname);
const {presets} = require(`${appDirectory}/babel.config.js`);
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const compileNodeModules = [
  // Add every react-native package that needs compiling
  'react-native-error-boundary',
  'react-native-zoomable-view',
  'react-native-screens',
  'react-native-linear-gradient',
  'react-native-shimmer-placeholder',
  'react-native-reanimated',
  'react-native-phone-number-input',
  'react-native-webview',
  'react-native-keyboard-aware-scroll-view',
  'react-native-encrypted-storage',
  '@react-native-async-storage/async-storage',
  'react-native-vector-icons',
  'react-native-keyboard-aware-scroll-view',
  'react-native-dashed-line',
  'react-native-fast-image',
  'rn-range-slider',
].map(moduleName => path.resolve(appDirectory, `node_modules/${moduleName}`));

const babelLoaderConfiguration = {
  test: /\.js$|jsx?$|tsx?$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(__dirname, 'index.web.js'), // Entry to your application
    path.resolve(__dirname, 'App.js'), // Change this to your main App file
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
    ...compileNodeModules,
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['react-native-web'],
    },
  },
};

const svgLoaderConfiguration = {
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
    },
  ],
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
      esModule: false,
    },
  },
};

const ttfLoaderConfiguration = {
  test: /\.ttf$/,
  loader: 'url-loader',
  include: [
    path.resolve(appDirectory, 'node_modules/react-native-vector-icons'),
  ],
};

const videoLoaderConfiguration = {
  test: /\.mp4$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        esModule: false,
      },
    },
  ],
};
const webViewLoaderConfiguration = {
  test: /postMock.html$/,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};

module.exports = {
  entry: {
    app: path.join(__dirname, 'index.web.js'),
  },
  output: {
    path: path.resolve(appDirectory, 'dist'),
    publicPath: '/',
    filename: 'xds_store_front.bundle.js',
  },
  resolve: {
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.tsx',
      '.ts',
      '.web.js',
      '.js',
      '.jsx',
    ],
    alias: {
      'react-native$': 'react-native-web',
    },
  },
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
  },
  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration,
      svgLoaderConfiguration,
      ttfLoaderConfiguration,
      webViewLoaderConfiguration,
      videoLoaderConfiguration,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      // See: https://github.com/necolas/react-native-web/issues/349
      __DEV__: JSON.stringify(true),
    }),
    // new FaviconsWebpackPlugin({
    //   logo: `${appDirectory}/src/assets/images/header@3x.png`,
    //   mode: 'webapp', // optional can be 'webapp', 'light' or 'auto' - 'auto' by default
    //   devMode: 'webapp', // optional can be 'webapp' or 'light' - 'light' by default
    //   cache: true,
    //   favicons: {
    //     appName: 'XDS Storefront',
    //     appDescription: 'XDS Storefront App',
    //     developerURL: null, // prevent retrieving from the nearest package.json
    //     background: '#ddd',
    //     theme_color: '#333',
    //     icons: {
    //       coast: false,
    //       yandex: false,
    //     },
    //   },
    // }),
  ],
};
