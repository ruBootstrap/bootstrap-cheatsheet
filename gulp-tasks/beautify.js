var htmlbeautify = require('gulp-html-beautify');

module.exports = (gulp, callback) => {

  const beautifyHtmlTask = function () {
    return gulp
      .src(config.destination.dist + '/**/*.html')
      .pipe(htmlbeautify({ indentSize: 2 }))
      .pipe(gulp.dest(config.destination.dist + '/'));
  };

  // ---------------------------------------------------------------------------
  // Exports

  return {
    html: beautifyHtmlTask
  };
};
