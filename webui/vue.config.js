const path = require('path');
const PORT = process.env.PORT || 5000;
const url = 'http://localhost:5000' + PORT;
module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '/': {
        target: url,
      },
    },
  },
};
