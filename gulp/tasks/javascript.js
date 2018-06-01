var gulp = require("gulp");
var config = require("../config").js;
var errorHandler = require("../errorHandler");
var reload = require("browser-sync").reload;
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

gulp.task("javascript", function() {
  gulp.src(config.watch)
    .pipe(concat("app.js"))
    .pipe(uglify())
    .pipe(gulp.dest(config.dest))
    .pipe(reload({
      stream: true
    }));
});
