const gulp = require('gulp')
const connect = require('gulp-connect')
const fileinclude = require('gulp-file-include')

function defaultTask(cb) {
  cb()
}


gulp.task('build', () => {
  return gulp.src(['./src/index.html'])
    .pipe(fileinclude({

    }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('assets', () => {
  return gulp.src(['./src/assets/**/*'])
    .pipe(gulp.dest('./dist/assets'))
})

gulp.task('serve', () => {
  connect.server({
    host: '0.0.0.0',
    port: 5050,
    root: ['dist']
  })
})


exports.default = gulp.series('build', 'assets')
