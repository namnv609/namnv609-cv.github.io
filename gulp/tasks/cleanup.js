var gulp = require("gulp");
var del = require("del");
var config = require("../config").del;

gulp.task("cleanup", function(cb) {
  return del(config.paths, cb);
});
