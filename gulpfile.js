var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var ts = require('gulp-typescript');
var path = require('path');


var tsconfig = {
    'typescript': {
        removeComments: false,
        target: 'ES5',
        noExternalResolve: false,
        noImplicitAny: false
    }
}

gulp.task('default', ['typescript']);


var typescript = ts.createProject(tsconfig);
gulp.task('typescript', function () {
    var typescriptFiles = [
        path.join('./www', "**/*.ts"),
        path.join('./www/typings', "**/*.ts")
    ];

    return gulp.src(typescriptFiles)
        .pipe(ts(ts))
        .pipe(gulp.dest('./www/dest'));
})

gulp.task('watch', function () {
    gulp.watch('./www/*.ts', ['typescript']);
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
