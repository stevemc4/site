module.exports = {
  plugins: [
    // require('postcss-modules'),
    require('autoprefixer'),
    require('postcss-nested-ancestors'),
    require('postcss-nested'),
    require('postcss-current-selector')({
      symbol: '&'
    })
  ]
}