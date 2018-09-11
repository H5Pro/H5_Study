/**
 * Created by fjl on 2018/7/21
 * 阿里字体图标 iconfont.css文件的处理工具，建议使用node执行
 */
module.exports ={
  /**
   * 将iconfont.css中的 ".icon-guanyu:before { content: "\e65d"; } ..."
   * 转换为 glyphMap（即：react-naitive-vector-icons中createIconSet方法第一个对象参数)
   * @param css String：阿里字体图标下载文件中iconfont.css的有效部分，如：
   *  .icon-guanyu:before { content: "\e65d"; }

   *  .icon-shouru:before { content: "\e60d"; }
   *
   */
  toGlyphMap: (css) => {
    let map = {}
    let arr = css.split('\n').filter(item => {
      return item.length > 0
    }).map(item => {
      return item.replace(/\\|\.|{|}|;| |"|/g, '')
    })
    arr.forEach(item => {
      let arr = item.split(':beforecontent:')
      if (arr.length > 1) {
        map[arr[0]] = parseInt(arr[1], 16)
      }
    })
    return map
  }
}