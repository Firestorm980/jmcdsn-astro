// postcss.config.js
module.exports = ({ env }) => ({
  plugins: {
    stylelint: {},
    'postcss-reporter': {},
    autoprefixer: {},
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-nesting': {},
    'postcss-custom-media': {},
    cssnano:
        env === 'production'
          ? { preset: 'default' }
          : false
  }
})
