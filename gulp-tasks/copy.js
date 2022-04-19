var gulpCopy = require('gulp-copy');

module.exports = (gulp, callback) => {
  const copyJsTask = function () {
    return gulp.src(config.source.js + '/**/*.js').pipe(gulp.dest(config.destination.js));
  };
  const copyVendorsTask = function () {
    return gulp.src(config.source.vendors + '/**/*.*').pipe(gulp.dest(config.destination.vendors));
  };
  const copyImagesTask = function () {
    return gulp.src(config.source.images + '/**/*.*').pipe(gulp.dest(config.destination.images));
  };


  // ---------------------------------------------------------------------------
  // Exports

  return {
    js: copyJsTask,
    vendors: copyVendorsTask,
    images: copyImagesTask
  };
};
