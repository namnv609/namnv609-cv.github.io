var gulp = require("gulp");
var config = require("../config").fonts;

gulp.task("fonts", function() {
  gulp.src(config.watch)
    .pipe(gulp.dest(config.dest));
});
