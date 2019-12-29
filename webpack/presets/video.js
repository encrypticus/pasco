const videoLoader = require('../loaders/video-loader');
const defaultOptions = {
  videoLoader: {
    name: process.env.mode === 'development' ? './video/[name].[ext]' : './video/[name].[contenthash:8].[ext]',
  },
  regexp: /\.(avi|mkv|webm|3gp|mp4)$/
};

module.exports = (options = defaultOptions) => {
  return {
    module: {
      rules: [
        {
          test: options.regexp,
          use: videoLoader(options.videoLoader)
        }
      ]
    }
  }
};
