var replace = require('gulp-replace');

module.exports = (gulp, callback) => {
  const replaceCssTask = function () {
    return gulp
      .src(config.destination.dist + '/**/*.html')
      .pipe(replace(/(<link\b.+href=")(?!http)(.+\assets\b.+[^min])(\.css)(".*>)/g, '$1$2.min$3$4'))
      .pipe(gulp.dest(config.destination.dist + '/'));
  };

  const replaceJsTask = function () {
    return gulp
      .src(config.destination.dist + '/**/*.html')
      .pipe(replace(/(<script\b.+src=")(?!http)(.+\assets\b.+[^min])(\.js)(".*>)/g, '$1$2.min$3$4'))
      .pipe(gulp.dest(config.destination.dist));
  };

  // ---------------------------------------------------------------------------
  // Exports

  return {
    css: replaceCssTask,
    js: replaceJsTask
  };
};
