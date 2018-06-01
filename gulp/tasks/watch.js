var gulp = require("gulp");
var config = require("../config");
var watch = require("gulp-watch");
var browserSync = require("browser-sync");

gulp.task("watch", function() {
  watch(config.scss.watch, function() {
    gulp.start("scss");
  });
  watch(config.js.watch, function() {
    gulp.start("javascript");
  });
  watch(config.images.watch, function() {
    gulp.start("images");
  });
  watch(config.html.src, browserSync.reload);
});
