var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var clean = require('gulp-clean');

gulp.task('default', ['clean'], function () {
    gulp.src(['app/app.module.js', 'app/**/*.component.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/'))
});


gulp.task('clean', function () {
    gulp.src('app/app.js')
        .pipe(clean());
});