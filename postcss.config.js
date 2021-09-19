// postcss.config.js
module.exports = {
  plugins: [
    require('stylelint'),
    require('postcss-reporter'),
    require('postcss-import'),
    require('autoprefixer'),
    require('postcss-mixins'),
    require('postcss-nested')
  ]
}
