module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    App: true,
    Page: true,
    Component: true,
    getApp: true,
    getCurrentPages: true,
    requirePlugin: true,
    wx: true,
    my: true,
    swan: true,
    Megalo: true
  }
}
