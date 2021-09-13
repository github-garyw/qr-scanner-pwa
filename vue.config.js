module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/qr-scanner-pwa/'
    : '/',
  outputDir: "./docs",
};
