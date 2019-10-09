const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browsersync = require('browser-sync');
const htmlPartial = require('gulp-html-partial');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-clean-css');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

gulp.task('scss', function () {
   return gulp.src('src/scss/**/*.scss')
      .pipe(plumber({
         errorHandler: function (err) {
            // Сообщение об ошибке
            console.log(err);
            // Сообщение об ошибке
            this.emit('end')
         }
      }))
      .pipe(sourcemaps.init())
      .pipe(sass({ outputStyle: 'expand' }))
      .pipe(rename({ suffix: '.min', prefix: '' }))
      .pipe(autoprefixer({
         browsers: ['last 10 versions'],
      }))
      .pipe(cssmin())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/assets'))
      .pipe(browsersync.reload({ stream: true }))
});

gulp.task('html', function () {
   gulp.src(['src/**/*.html'])
      .pipe(htmlPartial({
         basePath: 'src/parts/',
         tagName: 'part',
         variablePrefix: '@@'
      }))
      .pipe(gulp.dest('dist'));
});


gulp.task('browser-sync', function () {
   browsersync({
      server: {
         baseDir: 'dist'
      },
   })
});

gulp.task('assets', function () {
   gulp.src('./src/assets/**/*.*')
      .pipe(gulp.dest('./dist/assets/'));
});

gulp.task('js', function () {
   return gulp
      .src([
         'node_modules/jquery/dist/jquery.js',
         'src/js/scripts/*.js'
      ])
      .pipe(plumber({
         errorHandler: function (err) {
            // Сообщение об ошибке
            console.log(err);
            // Сообщение об ошибке
            this.emit('end')
         }
      }))
      .pipe(concat('scripts.min.js'))
      .pipe(babel({
          presets: [['env', {
              loose: true,
              modules: false,
              exclude: ['transform-es2015-typeof-symbol']
          }]],
          plugins: ['transform-object-rest-spread']
      }))
      .pipe(uglify())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/assets'))
      .pipe(browsersync.reload({ stream: true }))
});


gulp.task('watch', ['scss', 'browser-sync', 'html', 'js', 'assets'], function () {
   gulp.watch('src/scss/**/*.scss', ['scss', browsersync.reload]);
   gulp.watch('src/assets/**/*.*', ['assets', browsersync.reload]);
   gulp.watch('src/js/**/*.js', ['js']);
   gulp.watch('src/**/*.html', ['html', browsersync.reload])
});

gulp.task('build', ['scss', 'html', 'js', 'assets']);

gulp.task('default', ['watch']);