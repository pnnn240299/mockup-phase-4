var gulp = require("gulp"),
  compass = require("gulp-compass"),
  // タスク監視中にエラーが発生しても監視を止めない
  plumber = require("gulp-plumber"),
  // タスク実行中にエラーが起こるとデスクトップ通知（たいていはscss→cssのコンパイルエラー）
  notify = require("gulp-notify"),
  // キャッシュに保存して次回以降変更のあったファイルだけタスクを実行
  cache = require("gulp-cached"),
  SCSS_FILE = "scss/**/*.scss";

// entry
gulp.task("compileEntryPc", function () {
  gulp
    .src([SCSS_FILE])
    //.pipe(cache( 'sass' )) //
    .pipe(plumber({ errorHandler: notify.onError("<%= error.message %>") }))
    .pipe(
      compass({
        config_file: "config.rb",
        comments: false,
        css: "css/",
        sass: "scss/",
      })
    );
});

// entry
gulp.task("default", function () {
  gulp.watch(SCSS_FILE, function (event) {
    gulp.run("compileEntryPc");
  });
});
