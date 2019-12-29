const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge'); // объединяет массивы и объекты конфигураций из нескольких файлов-модулей
const setEntry = require('./webpack/options/entry'); // опция устанавливает точку входа для сборщика
const setOutput = require('./webpack/options/output'); // опция устанавливает путь, по которому будет лежать бандл
const htmlWebpackPlugin = require('./webpack/plugins/html-webpack-plugin'); // плагин генерирует html-файл в папке сборки
const processCss = require('./webpack/presets/css'); // пресет обрабатывает css-файлы
const processSassScss = require('./webpack/presets/sass-scss'); // пресет обрабатывает sass/scss-файлы
const processImages = require('./webpack/presets/img'); // пресет обрабатывает изображения
const processVideo = require('./webpack/presets/video'); // пресет обрабатывает видеофайлы
const processFonts = require('./webpack/presets/font'); // пресет обрабатывает шрифты
const processPug = require('./webpack/presets/pug'); // пресет обрабатывает pug-файлы
const miniCssExtractPlugin = require('./webpack/plugins/mini-css-extract-plugin'); // модуль обрабатывает css-файлы
const addOptimization = require('./webpack/options/optimization'); // опция добавляет оптимизацию для конечного кода
const generateMap = require('./webpack/options/source-map'); // опция включает генерацию карты js/css-кода (sourcemap)
const enableStylelint = require('./webpack/plugins/stylelint-webpack-plugin'); // плагин включает линтинг css/sass/scss
const processJs = require('./webpack/presets/js'); // пресет обрабатывает js-файлы
const browserSync = require('./webpack/plugins/browser-sync-webpack-plugin'); // плагин browser sync
const cleanWebpackPlugin = require('./webpack/plugins/clean-webpack-plugin'); // плагин очищает папку сборки перед каждой пересборкой
const copyPlugin = require('./webpack/plugins/copy-webpack-plugin');
const jquery = require('./webpack/plugins/jquery'); // плагин, добавляющий jquery в проект

module.exports = () => {
  const commonConfig = webpackMerge(
    setEntry({
      index: './src/pages/index/index.js',
      uikit: './src/pages/uikit/index.js'
    }),
    htmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/pages/index/index.pug',
      excludeChunks: ['uikit']
    }),
    htmlWebpackPlugin({
      filename: 'uikit.html',
      template: 'src/pages/uikit/index.pug',
      excludeChunks: ['index']
    }),
    setOutput(),
    miniCssExtractPlugin(),
    processCss(),
    processSassScss(),
    processImages(),
    processFonts(),
    processVideo(),
    processPug(),
    processJs(),
    cleanWebpackPlugin(),
    enableStylelint(),
    copyPlugin([
      { from: 'src/favicons', to: 'favicons/' }
    ]),
    jquery()
  );

  if (process.env.mode === 'development') {
    return webpackMerge(
      commonConfig,
      generateMap(),
      browserSync()
    );
  }

  if (process.env.mode === 'production') {
    return webpackMerge(
      commonConfig,
      addOptimization()
    );
  }
};
