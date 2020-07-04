const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#18c0f0',
              '@border-color-base': '#ff6562',
              '@success-color': '#18c0f0',
              '@text-color': '#323232',
              '@text-color-secondary': '#4a4a4a'
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};
