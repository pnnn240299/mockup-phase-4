var gulp = require("gulp"),
  compass = require("gulp-compass"),
  // タスク監視中にエラーが発生しても監視を止めない
  plumber = require("gulp-plumber"),
  // タスク実行中にエラーが起こるとデスクトップ通知（たいていはscss→cssのコンパイルエラー）
  notify = require("gulp-notify"),
  // キャッシュに保存して次回以降変更のあったファイルだけタスクを実行
  cache = require("gulp-cached"),
  // SCSS_FILE = "scss/**/*.scss";

  SCSS_FILE = "scss/sp/keeplist.scss";
  SCSS_FILE_MY_HISTORY = "scss/sp/my-history.scss";
  SCSS_FILE_MY_HISTORY_SHOP = "scss/sp/my-history-shop.scss";
  SCSS_FILE_KEEPLIST_ATTENDANCE = "scss/sp/my-keeplist-attendance.scss";
  SCSS_FILE_KEEPLIST_THE_RAPIST = "scss/sp/my-keeplist-therapist.scss";
  SCSS_FILE_KEEPLIST_SHOP = "scss/sp/my-keeplist-shop.scss";

// entry
// gulp.task("compileEntryPc", function () {
//   gulp
//     .src([SCSS_FILE])
//     //.pipe(cache( 'sass' )) //
//     .pipe(plumber({ errorHandler: notify.onError("<%= error.message %>") }))
//     .pipe(
//       compass({
//         config_file: "config.rb",
//         comments: false,
//         css: "css/",
//         sass: "scss/",
//       })
//     );
// });

// // entry
// gulp.task("default", function () {
//   gulp.watch(SCSS_FILE, function (event) {
//     gulp.run("compileEntryPc");
//   });
// });


// Task compile SCSS thành CSS
gulp.task("compileKeeplist", function () {
  return gulp
    .src([SCSS_FILE]) // Chỉ định file keeplist.scss
    .pipe(plumber({ errorHandler: notify.onError("<%= error.message %>") }))
    .pipe(
      compass({
        config_file: "config.rb",  // Cấu hình Compass
        comments: false,
        css: "css/sp/",               // Thư mục CSS đầu ra
        sass: "scss/sp/",          // Thư mục SCSS đầu vào
      })
    );
});

gulp.task("MyHistory", function () {
  return gulp
    .src([SCSS_FILE_MY_HISTORY]) 
    .pipe(plumber({ errorHandler: notify.onError("<%= error.message %>") }))
    .pipe(
      compass({
        config_file: "config.rb",  // Cấu hình Compass
        comments: false,
        css: "css/sp/",               // Thư mục CSS đầu ra
        sass: "scss/sp/",          // Thư mục SCSS đầu vào
      })
    );
});

gulp.task("MyHistoryShop", function () {
  return gulp
    .src([SCSS_FILE_MY_HISTORY_SHOP])
    .pipe(plumber({ errorHandler: notify.onError("<%= error.message %>") }))
    .pipe(
      compass({
        config_file: "config.rb", 
        comments: false,
        css: "css/sp/",               // Thư mục CSS đầu ra
        sass: "scss/sp/",          // Thư mục SCSS đầu vào
      })
    );
});

gulp.task("KeeplistAttendance", function () {
  return gulp
    .src([SCSS_FILE_KEEPLIST_ATTENDANCE])
    .pipe(plumber({ errorHandler: notify.onError("<%= error.message %>") }))
    .pipe(
      compass({
        config_file: "config.rb", 
        comments: false,
        css: "css/sp/",               // Thư mục CSS đầu ra
        sass: "scss/sp/",          // Thư mục SCSS đầu vào
      })
    );
});
gulp.task("KeeplistTheRapist", function () {
  return gulp
    .src([SCSS_FILE_KEEPLIST_THE_RAPIST])
    .pipe(plumber({ errorHandler: notify.onError("<%= error.message %>") }))
    .pipe(
      compass({
        config_file: "config.rb", 
        comments: false,
        css: "css/sp/",               // Thư mục CSS đầu ra
        sass: "scss/sp/",          // Thư mục SCSS đầu vào
      })
    );
});
gulp.task("KeeplistShop", function () {
  return gulp
    .src([SCSS_FILE_KEEPLIST_SHOP])
    .pipe(plumber({ errorHandler: notify.onError("<%= error.message %>") }))
    .pipe(
      compass({
        config_file: "config.rb", 
        comments: false,
        css: "css/sp/",               // Thư mục CSS đầu ra
        sass: "scss/sp/",          // Thư mục SCSS đầu vào
      })
    );
});

