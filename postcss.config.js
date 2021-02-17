module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 基准值 将来像素除以多少变成rem
      rootValue: 37.5,
      // 需要将哪些属性转成rem
      propList: ['*']
    }
  }
}
