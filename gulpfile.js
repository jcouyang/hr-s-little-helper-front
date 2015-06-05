var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require("babelify");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var del = require('del');
var connect = require('gulp-connect');
var port = process.env.PORT || 8080;
var reloadPort = process.env.RELOAD_PORT || 35729;

var paths = {
  source: './src/app.jsx',
  less: ['less/*.less'],
	javascripts: 'javascripts',
  stylesheets: 'stylesheets',
	tests: ['__tests__/**/*.jsx']
};

gulp.task('clean', function () {
  del(['javascripts']);
});

gulp.task('build', function() {
  return  browserify({
    entries: paths.source,
    debug: true,
    extensions: ['.jsx','.js']
  })
        .transform(babelify)
        .transform(['envify'])
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest(paths.javascripts));
});

gulp.task('serve', ['build'], function () {
  return connect.server({
    port: port,
    livereload: {
      port: reloadPort
    }
  });
});

gulp.task('reload-js', ['build'], function () {
  return gulp.src(paths.source)
    .pipe(connect.reload());
});

gulp.task('less', function() {
  return gulp.src(paths.less)
    .pipe(less())
    .pipe(gulp.dest(paths.stylesheets));
});

gulp.task('watch', function () {
  gulp.watch(['./src/**/*.jsx'], ['reload-js']);
  gulp.watch([paths.less], ['reload-js']);
});

gulp.task('default', ['serve', 'watch']);
