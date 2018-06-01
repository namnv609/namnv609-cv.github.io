var gulp = require("gulp");
var runSequence = require("run-sequence");

gulp.task("default", function(cb) {
  return runSequence(
    "cleanup",
    "images",
    "browserSync",
    "scss",
    "javascript",
    "watch",
    cb
  )
});
