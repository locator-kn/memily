var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var ts = require('gulp-typescript');
var path = require('path');

var paths = {
    sass: ['./scss/**/*.scss']
};

var tsconfig = {
    'typescript': {
        removeComments: false,
        target: 'ES5',
        noExternalResolve: false,
        noImplicitAny: false
    }
}

gulp.task('default', ['sass']);

gulp.task('sass', function (done) {
    gulp.src('./scss/ionic.app.scss')
        .pipe(sass())
        .pipe(gulp.dest('./www/css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest('./www/css/'))
        .on('end', done);
});

var typescript = ts.createProject(tsconfig);
gulp.task('typescript', function () {
    var typescriptFiles = [
        path.join('./www', "**/*.ts"),
        path.join('./www/typings', "**/*.ts")
    ];

    return gulp.src(typescriptFiles)
        .pipe(ts(ts))
        .pipe(gulp.dest('./www/js/dest'));
})

gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function () {
    return bower.commands.install()
        .on('log', function (data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});

gulp.task('git-check', function (done) {
    if (!sh.which('git')) {
        console.log(
            '  ' + gutil.colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required to download Ionic.',
            '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }
    done();
});
