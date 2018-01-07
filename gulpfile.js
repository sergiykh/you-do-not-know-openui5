const gulp = require('gulp');
const eslint = require('gulp-eslint');
const browserSync = require('browser-sync');
const babel = require('gulp-babel');
const merge = require('merge-stream');
const sourcemaps = require('gulp-sourcemaps');
const replace = require('gulp-replace');
const GulpMem = require('gulp-mem');

// Configure gulp-mem plugin: base path, log
const gulpMem = new GulpMem();
gulpMem.serveBasePath = '/';
gulpMem.enableLog = false;

// Stream for all files except .js
const copy = () => {
  return gulp.src([
    'src/**/*',
    '!src/**/*js'
  ]);
};

// Stream for all .js files
const copyJs = () => {
  let b = babel()
    .on("error", (e) => {
      console.log(e.stack);
      b.end();
    });
  return gulp.src([
    'src/**/*js'
  ])
    .pipe(sourcemaps.init())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(b)
    .pipe(replace('src.', ''))
    .pipe(replace('src/', ''))
    .pipe(sourcemaps.write('.'))
};

// Merge two streams and copy content of src folder to root path in-memory
gulp.task('app:build', () => {
  return merge(copy(), copyJs())
    .pipe(gulpMem.dest('/'));
});

// Configure browser-sync, start server and open app in Chromium browser
gulp.task('bs:start', (done) => {
  const middlewares = require('./proxies');
  middlewares.push(gulpMem.middleware);
  browserSync.init({
    middleware: middlewares,
    server: [
      '/'
    ],
    browser: 'Chromium',
    open: false
  });
  done();
});

// Refresh browser page where app is running
gulp.task('bs:reload', (done) => {
  browserSync.reload();
  done();
});

// Watch for changes in src folder
// If any changes, run app:build and bs:reload in sequence
gulp.task('app:watch', () => {
  gulp.watch('src/**/*', gulp.series('app:build', 'bs:reload'));
});

// Run app:build, bs:start and app:watch tasks in sequence
gulp.task('default', gulp.series('app:build', 'bs:start', 'app:watch'));
