// Объект настроек по умолчанию
const defaultOptions = {
  name: process.env.mode === 'development' ? './video/[name].[ext]' : './video/[name].[contenthash:8].[ext]'
};

module.exports = (options = defaultOptions) => {
  return {
    loader: 'file-loader',
    options
  }
} ;
