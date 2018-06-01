var gulp = require("gulp");
var config = require("../config").images;
var reload = require("browser-sync").reload;

gulp.task("images", function() {
  gulp.src(config.watch)
    .pipe(gulp.dest(config.dest))
    .pipe(reload({
      stream: true
    }));
})
