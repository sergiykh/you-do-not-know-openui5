/**
 * @author Kholod, Serhii
 */

let gulp = require('gulp');
let browserSync = require('browser-sync');
let GulpMem = require('gulp-mem');

const gulpMem = new GulpMem();
gulpMem.serveBasePath = '/';
gulpMem.enableLog = true;

const copy = () => {
  return gulp.src(['src/**/*']);
};

gulp.task('app:build', () => {
  return copy()
    .pipe(gulpMem.dest('/'));
});

gulp.task('bs:start', (done) => {
  const middlewares = require('./proxies');
  middlewares.push(gulpMem.middleware);
  browserSync.init({
    middleware: middlewares,
    server: [
      '/'
    ],
    browser: 'Chromium'
  });
  done();
});

gulp.task('bs:reload', (done) => {
  browserSync.reload();
  done();
});

gulp.task('app:watch', () => {
  gulp.watch('src/**/*', gulp.series('app:build', 'bs:reload'));
});

gulp.task('default', gulp.series('app:build', 'bs:start', 'app:watch'));
