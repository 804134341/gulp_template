var gulp = require('gulp'),
    connect = require('gulp-connect');
gulp.task('webserver',function(){
    connect.server({root:'./www',port:8000,livereload:true});
});
gulp.task('css',function(){
    connect.reload();
    console.log('123');
});
gulp.task('html',function(){
    gulp.src('./*.html')
        .pipe(connect.reload());
});
/*自动创建项目文件*/
gulp.task('init',function () {

});
/*实时监听*/
gulp.task('watch',function () {
    gulp.watch('assert/*.css',['css']);
    gulp.watch('./*.html',['html']);
});

gulp.task('default', ['webserver']);