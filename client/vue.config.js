module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:3000/api/v1/station'
      }
    }
  }
};
