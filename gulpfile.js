const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const wait = require('gulp-wait');

// Compilation of SASS
gulp.task('sass', function() {
    return gulp.src(['sass/**/*.scss'])
        .pipe(wait(500))
        .pipe(sass().on('error', sass.logError))
        .pipe(rename({
            basename: "style",
            extname: ".css"
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch'])