var gulp = require("gulp");
var runSequence = require("run-sequence");

gulp.task("build", function(cb) {
  return runSequence(
    "cleanup",
    "images",
    "scss",
    "javascript",
    cb
  );
})
