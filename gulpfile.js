let gulp = require('gulp');
let browserSync = require('browser-sync');
let GulpMem = require('gulp-mem');

// Configure gulp-mem plugin: base path, log
const gulpMem = new GulpMem();
gulpMem.serveBasePath = '/';
gulpMem.enableLog = true;

const copy = () => {
  return gulp.src(['src/**/*']);
};

// Copy content of src folder to root path in-memory
gulp.task('app:build', () => {
  return copy()
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
    browser: 'Chromium'
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
