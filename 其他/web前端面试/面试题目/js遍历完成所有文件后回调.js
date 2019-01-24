/**
 * Created by fjl on 2019/1/21
 */
var fs = require('fs');
var path = require('path');//解析需要遍历的文件夹
var directoryPath = path.resolve('/Users/fjl/Projects/H5_Study/css');

/**
 * @description 遍历目录
 * @param directoryPath: 目录路径
 * @param onEnd: 遍历完成所有文件的回调
 */
function traversalDirectory(directoryPath, onEnd) {
  let count = 0;
  const fileDisplay = (filePath) => {
    //根据文件路径读取文件，返回文件列表
    count ++
    fs.readdir(filePath,function(err,files){
      count --
      if(err){
        console.warn(err)
      }else{
        if (files.length === 0 && count === 0 && typeof onEnd === 'function') {
          onEnd()
          return
        }
        count += files.length
        //遍历读取到的文件列表
        files.forEach(function(filename){
          //获取当前文件的绝对路径
          var filedir = path.join(filePath, filename);
          //根据文件路径获取文件信息，返回一个fs.Stats对象
          fs.stat(filedir,function(eror, stats){
            count --
            if(eror){
              console.warn('获取文件stats失败');
            }else{
              var isFile = stats.isFile();//是文件
              var isDir = stats.isDirectory();//是文件夹
              if(isFile){
                console.log(filedir);
                if (count === 0 && typeof onEnd === 'function') {
                  onEnd()
                }
                // // 读取文件内容
                // var content = fs.readFileSync(filedir, 'utf-8');
                // console.log(content);
              }
              if(isDir){
                fileDisplay(filedir); // 递归，如果是文件夹，就继续遍历该文件夹下面的文件
              }
            }
          })
        });
      }
    });
  }
  fileDisplay(directoryPath, onEnd)
}

//调用文件夹遍历方法
traversalDirectory(directoryPath, () => {
  console.log(
`end



--------------------------------------------------------------------------------------



end
`
  )
});

