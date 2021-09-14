module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/qr-scanner-pwa/'
    : '/',
  outputDir: "./docs",
  devServer: {
    open: process.platform === 'win32',
    host: '0.0.0.0',
    port: 8085, // CHANGE YOUR PORT HERE!
    https: true,
    hotOnly: false,
  },
};
