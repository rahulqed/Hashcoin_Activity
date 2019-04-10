const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
var sassGlob = require('gulp-sass-glob');
var sourcemaps = require('gulp-sourcemaps');

var styleSRC = './scss/styles.scss'
var styleDIST = './dist/css/'

function css(done){
    gulp.src( styleSRC )
        .pipe(sassGlob())
        .pipe( sourcemaps.init())
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest( styleDIST ))
    done()
};


gulp.task("css", css);
