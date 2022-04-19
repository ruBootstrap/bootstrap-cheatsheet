var clean = require('gulp-clean');

module.exports = (gulp, callback) => {
  const cleanCssTask = function () {
    return gulp
      .src(config.destination.css, {
        read: false,
        allowEmpty: true
      })
      .pipe(clean());
  };

  const cleanJsTask = function () {
    return gulp
      .src(config.destination.js, {
        read: false,
        allowEmpty: true
      })
      .pipe(clean());
  };

  const cleanHtmlTask = function () {
    return gulp
      .src(config.destination.dist + '/*.html', {
        read: false,
        allowEmpty: true
      })
      .pipe(clean());
  };

  const cleanVendorsTask = function () {
    return gulp
      .src(config.destination.vendors, {
        read: false,
        allowEmpty: true
      })
      .pipe(clean());
  };

  const cleanImagesTask = function () {
    return gulp
      .src(config.destination.images, {
        read: false,
        allowEmpty: true
      })
      .pipe(clean());
  };

  const cleanDistTask = function () {
    return gulp
      .src(config.destination.dist, {
        read: false,
        allowEmpty: true
      })
      .pipe(clean());
  };

  // ---------------------------------------------------------------------------
  // Exports

  return {
    css: cleanCssTask,
    js: cleanJsTask,
    html: cleanHtmlTask,
    vendors: cleanVendorsTask,
    images: cleanImagesTask,
    dist: cleanDistTask
  };
}
