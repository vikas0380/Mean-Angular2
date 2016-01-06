var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload');


gulp.task('develop', function () {
  livereload.listen();
  livereload({ start: true })
  nodemon({
	   execMap: {
      js: 'node --debug'
    },
    script: 'app.js',
    ext: 'html ts js coffee ejs',
    stdout: false,
	debug:true
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', [
  'develop'
]);
