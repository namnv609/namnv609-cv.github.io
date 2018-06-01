var gulp = require("gulp");
var sass = require("gulp-sass");
var errorHandler = require("../errorHandler");
var config = require("../config").scss;
var concat = require("gulp-concat");
var reload = require("browser-sync").reload;
var minifyCSS = require("gulp-minify-css");

gulp.task("scss", ["fonts"], function() {
  gulp.src(config.watch)
    .pipe(sass(config.sassOpts))
    .on("error", errorHandler)
    .pipe(concat("style.css"))
    .pipe(minifyCSS())
    .pipe(
      gulp.dest(config.dest)
    ).pipe(reload({
      stream: true
    }));
})
