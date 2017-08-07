/**
 * Created by fjl on 2017/7/4.
 */

var gulp = require('gulp');//引包

var watch = require('gulp-watch');
var concat = require('gulp-concat');//文件合并
var rename = require('gulp-rename');//文件重命名
var del = require('del');

var gulp_less = require('gulp-less');//编译less
var gulp_ts = require('gulp-typescript');//编译ts

var minify_css =require('gulp-minify-css');//压缩css
var minify_js =require('gulp-uglify');//压缩js







//源文件所在路径
var SRCPATH = './src/';
//目标文件所在路径
var DISTPATH = './dist/';

//源文件的编译配置
var CONFIG = {
    less:{
        srcDir:'less/',
        distDir:'css/css/',
        srcType:'less',
        distType:'css',
        compile:gulp_less
    },
    ts:{
        srcDir:'ts/',
        distDir:'js/',
        srcType:'ts',
        distType:'js',
        compile:gulp_ts
    }
}

//default要执行的任务
var tasks = [];

for(var task in CONFIG){
    tasks.push(task);
    var obj = CONFIG[task];
    compile(task,obj.srcType, SRCPATH + obj.srcDir,
        DISTPATH + obj.distDir, obj.compile);
    listen(obj.srcType,obj.distType,SRCPATH + obj.srcDir,
        DISTPATH + obj.distDir, obj.compile);
}

//任务:观察css文件的修改
gulp.task('watchCSS',function () {
    minCSS();
    var path_css = DISTPATH + CONFIG.less.distDir;
    watch(path_css + '*.css', function () {
        minCSS();
    })
})

//任务:观察js文件的修改
gulp.task('watchJS',function () {
    minJS();
    var path_js = DISTPATH + CONFIG.ts.distDir;
    watch(path_js + '*.js', function (data) {
        minJS(data);
    })
})


//额外添加任务
tasks.push('watchCSS');
tasks.push('watchJS');
//默认gulp
gulp.task('default',tasks,function () {

});



//压缩css文件
 function minCSS() {

    var path_css = DISTPATH + CONFIG.less.distDir;
     var distPath = DISTPATH +'css';
     /*gulp.src指定任务操作的路径*/
     gulp.src(path_css + '*.css')
     /*concat为合并用的方法，参数为合并后的名称*/
         .pipe(concat('main.css'))
         /*gulp.dest为输出文件，参数为输出路径*/
         .pipe(gulp.dest(distPath))
         /*重命名加后缀*/
         .pipe(rename({suffix: '.min'}))
         /*压缩*/
         .pipe(minify_css())
         .pipe(gulp.dest(distPath))

 }

/**
 * 压缩js文件
 * @param stream 存在：压缩该文件流；不存在：压缩所有的js文件
 */
function minJS(stream) {
    var path_js = DISTPATH + CONFIG.ts.distDir;
    //编译除了以.min.js结尾的所有js文件
    var js = path_js + '*.js';
    var minjs = path_js +'*.min.js';

    if(!stream){
        /*gulp.src指定任务操作的路径*/
        gulp.src([js,  '!'+minjs])
            /*压缩*/
            .pipe(minify_js())
            /*重命名加后缀*/
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest(path_js))
     } else {
        var srcFilePath = stream.history[0];
        if (stream.event != 'unlink') {
            gulp.src([srcFilePath,'!' + minjs])
                /*压缩*/
                .pipe(minify_js())
                /*重命名加后缀*/
                .pipe(rename({suffix: '.min'}))
                .pipe(gulp.dest(path_js))
        } else {
            var name = srcFilePath.slice(stream.base.length+1);
            var distFilePath = path_js + name.split('.')[0] + '.min.js';
            del([distFilePath]);
        }
    }

}

/**
 * 编译源文件
 * @param task     任务名称
 * @param srcType  源文件类型
 * @param SRCPATH  源文件所在文件夹的相对路径
 * @param DISTPATH 编译后文件所在文件夹的相对路径
 * @param handle   编译源文件所用的方法
 */
function compile(task,srcType,SRCPATH,DISTPATH,handle) {

    gulp.task(task,function () {
        //编译全部文件
       var stream = gulp.src(SRCPATH  + '*.' + srcType)
        //处理文件
            .pipe(handle())
            //输出文件
            .pipe(gulp.dest(DISTPATH));
    })


}

/**
 * 监听文件改变
 * @param srcType  源文件类型
 * @param distType 目标文件类型
 * @param SRCPATH  源文件所在文件夹的相对路径
 * @param DISTPATH 编译后文件所在文件夹的相对路径
 * @param handle   编译源文件所用的方法
 */
function listen(srcType,distType,SRCPATH,DISTPATH,handle) {
    //监听文件改变
    watch(SRCPATH + '*.' + srcType,function (data) {
        /*  console.log(data.event);
         console.log(data.history[0]);
         console.log(data.cwd);
         console.log(data.base);*/
        //获取文件名（包括扩展名）
        var name = data.history[0].slice(data.base.length+1);
        var distFile = DISTPATH + name.split('.')[0] + '.' + distType;


        if (data.event != 'unlink') {
            gulp.src(SRCPATH + name)
                .pipe(handle())
                //输出文件
                .pipe(gulp.dest(DISTPATH))
        } else {
            del([distFile]);
        }

    });
}



