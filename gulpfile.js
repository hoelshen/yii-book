const gulp = require("gulp");
const babel = require("gulp-babel");
const watch = require("gulp-watch");
const rollup = require("gulp-rollup");
const replace = require("@rollup/plugin-replace");
const eslint = require('gulp-eslint');
const entry = "./src/server/**/*.js";
const cleanEntry = "./src/server/config/index.js";


//开发环境
function buildDev() {
  return watch(entry, { ignoreInitial: false }, function () {
    gulp
      .src(entry)
      .pipe(
        babel({
          //关掉外部的bablerc
          babelrc: false,
          ignore: [cleanEntry],
          plugins: ["@babel/plugin-transform-modules-commonjs"],
        })
      )
      .pipe(gulp.dest("dist"));
  });
}

//上线环境
function buildProd() {
  return gulp
    .src(entry)
    .pipe(
      babel({
        //关掉外部的bablerc
        babelrc: false,
        ignore: [cleanEntry],
        plugins: ["@babel/plugin-transform-modules-commonjs"],
      })
    )
    .pipe(gulp.dest("dist"));
}

//清溪流
function buildConfig() {
  return (
    gulp
      .src(entry)
      // transform the files here.
      .pipe(
        rollup({
          // any option supported by Rollup can be set here.
          plugins: [
            replace({
              "env.NODE_ENV": JSON.stringify("production"),
            }),
          ],
          output: {
            format: "cjs",
          },
          input: cleanEntry,
        })
      )
      .pipe(gulp.dest("dist"))
  );
}

function buildhint(){
  return src(['scripts/*.js'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
}


//代码校验
let build = gulp.series(buildDev);
// 先完成核心的编译流程 再去清洗
if (process.env.NODE_ENV == "production") {
  build = gulp.series(buildProd, buildConfig);
}


if (process.env.NODE_ENV == "hint") {
  build = gulp.series(buildhint);
}

gulp.task("default", build);
