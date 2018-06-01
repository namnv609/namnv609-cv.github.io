var src = "./src",
    dest = "./dest";

module.exports = {
  scss: {
    src: src + "/scss",
    dest: dest + "/css",
    get watch() {
      return [
        this.src + "/**/*.s*ss",
        "./node_modules/font-awesome/scss/font-awesome.scss"
      ];
    },
    sassOpts: {
      outputStyle: "compressed"
    }
  },
  html: {
    src: "./*.html"
  },
  js: {
    src: src + "/js",
    dest: dest + "/js",
    get watch() {
      return [
        this.src + "/**/*.js",
        "./node_modules/jquery/dist/jquery.min.js"
      ];
    }
  },
  del: {
    paths: [
      dest
    ]
  },
  fonts: {
    src: src + "/fonts",
    dest: dest + "/fonts",
    get watch() {
      return [
        this.src + "/**/*.*",
        !this.src + "/.keep",
        "./node_modules/font-awesome/fonts/*.*"
      ];
    }
  },
  browserSync: {
    server: {
      baseDir: "./"
    }
  },
  images: {
    src: src + "/images",
    dest: dest + "/images",
    get watch() {
      return [
        this.src + "/**/*.*",
        !this.src + "/.keep"
      ];
    }
  }
}
