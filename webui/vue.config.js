const path = require('path');
const PORT = process.env.PORT || 5000;
const url = 'http://localhost:' + PORT;
module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  indexPath: path.resolve(__dirname, '../server/public/index.html'),
  devServer: {
    proxy: {
      '/': {
        target: url,
      },
    },
  },
};
