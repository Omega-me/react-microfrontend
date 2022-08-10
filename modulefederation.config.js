const deps = require('./package.json').dependencies;

module.exports = {
  name: 'App',
  filename: 'remoteEntry.js',
  exposes: {
    // exposes the components we want to be used by other apps
    './store': './src/state',
  },
  remotes: {
    // get the components exposed from other apps
    RemoteApp: 'RemoteApp@http://localhost:8000/remoteEntry.js',
  },
  shared: {
    ...deps,
    react: { singleton: true, requiredVersion: deps.react },
    'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
    'react-redux': { singleton: true, requiredVersion: deps['react-redux'] },
  },
};
