var  gulp        = require('gulp')
    ,uglify      = require('gulp-uglify')
    ,imagemin    = require('gulp-imagemin')
    ,sourcemaps  = require('gulp-sourcemaps')
    ,cleanCSS    = require('gulp-clean-css')
    ,sourcemaps  = require('gulp-sourcemaps')
    ,sass        = require('gulp-sass')
    ,del         = require('del');

/**
 * ----------------------------------------------
 * Paths
 * ----------------------------------------------
 */
var base_dest = 'dest';

var scripts = {
  src: 'src/scripts/**/*.js',
  dest: base_dest + '/js',
};

var images = {
  src: 'src/images/**/*',
  dest: base_dest + '/img'
};

var stylesheets = {
  'src': 'src/stylesheets/**/*',
  'dest': base_dest + '/css'
};

/**
 * ----------------------------------------------
 * Stylesheets
 * ----------------------------------------------
 */
gulp.task('stylesheets', function () {
  return gulp.src(stylesheets.src)
    .pipe(sass())
    .pipe(sourcemaps.init())
    .pipe(cleanCSS({compatibility: 'ie9'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(stylesheets.dest));
});

/**
 * ----------------------------------------------
 * JavaScript
 * ----------------------------------------------
 */
gulp.task('scripts', function() {
  return gulp.src(scripts.src)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(scripts.dest));
});

/**
 * ----------------------------------------------
 * Images
 * ----------------------------------------------
 */
gulp.task('images', function() {
  return gulp.src(images.src)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(images.dest));
});

/**
 * ----------------------------------------------
 * Watch for Changes
 * ----------------------------------------------
 */
gulp.task('watch', function() {
  gulp.watch(scripts.src, ['scripts']);
  gulp.watch(stylesheets.src, ['stylesheets']);
  gulp.watch(images.src, ['images']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts', 'stylesheets', 'images']);
