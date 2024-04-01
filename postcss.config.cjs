// postcss.config.js
module.exports = ({ env }) => ({
  plugins: {
    'postcss-mixins': {},
    'postcss-preset-env': {
      stage: 0,
    },
    cssnano:
        env === 'production'
          ? { preset: 'default' }
          : false
  }
})
