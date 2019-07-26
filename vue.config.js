const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => { // 别名
    config.resolve.alias
      .set('common', resolve('src/common'))
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'));
  },
  // 控制 source map
  productionSourceMap: false,
  devServer: {
    open: true, // 配置自动启动浏览器
  },
};
