const path = require("path");

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const livereload = require("gulp-livereload");
const webserver = require("gulp-webserver");
const clean = require("gulp-clean");

const sassMatch = "src/sass/**/*.sass";
const htmlMatch = "src/index.html";
const jsMatch = "src/js/*.js";
const outBase = "dist";

function compileSass() {
    return gulp
        .src(sassMatch)
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(path.join(outBase, "css")));
}

function html() {
    return gulp.src(htmlMatch).pipe(gulp.dest(outBase));
}

function js() {
    return gulp.src(jsMatch).pipe(gulp.dest(path.join(outBase, "js")));
}

function setup() {
    return gulp.src("src/index.theme").pipe(gulp.dest(outBase));
}

function static() {
    return gulp.src("src/static/**/*").pipe(gulp.dest(outBase));
}

const build = gulp.series(setup, compileSass, html, js, static);
exports.build = build;

function server() {
    gulp.src(outBase).pipe(webserver({ livereload: true }));
}
function watchFiles() {
    gulp.watch("src/index.theme", setup);
    gulp.watch(sassMatch, compileSass);
    gulp.watch(htmlMatch, html);
    gulp.watch(jsMatch, js);
    gulp.watch("src/static", static);
}

const dev = gulp.series(
    setup,
    compileSass,
    html,
    js,
    static,
    gulp.parallel(server, watchFiles)
);
exports.dev = dev;
