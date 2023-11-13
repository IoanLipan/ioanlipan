const { defineConfig } = require('@vue/cli-service');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const { config: _config } = require('dotenv');

_config();

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path][base].gz',
          algorithm: 'gzip',
          test: /\.(js|css|json|txt|html|ico|svg|png|jpg|jpeg)(\?.*)?$/i,
          threshold: 10240,
          minRatio: 0.8,
          deleteOriginalAssets: false,
        }),
      );
    }
  },
});
