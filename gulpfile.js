var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	minifycss = require('gulp-clean-css'),
	imagemin = require('gulp-imagemin'),
	htmlreplace = require('gulp-html-replace'),
	copy = require('gulp-copy'),
	webserver = require('gulp-webserver'),
	del = require('del'),
	modRewrite  = require('connect-modrewrite'),
	browserSync = require('browser-sync').create();

gulp.task('default', ['del', 'minify-js', 'minify-css', 'imagemin', 'html-replace', 'copy-pages', 'copy-fonts', 'copy-icon']);

gulp.task('del', function (cb) {
	del(['dist/**', '!dist'], cb);
});

gulp.task('html-replace', ['del'], function () {
	return gulp.src('index.html')
		.pipe(htmlreplace({ 
			js: {
				src: [['js/main.min.js']],
				tpl: '<script src="%s" defer></script>'
			}, 
			css: 'css/main.min.css' 
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('minify-js', ['del'], function () {
	return gulp.src(['js/**/*', '!js/**/*hero.js'])
		.pipe(concat('main.js'))
		.pipe(uglify({ mangle: false }))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('minify-css', ['del'], function () {
	return gulp.src(['css/normalize.css', 'css/main.css'])
		.pipe(concat('main.css'))
		.pipe(minifycss())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('imagemin', ['del'], function () {
	return gulp.src('images/**/*')
		.pipe(imagemin({progressive: true}))
		.pipe(gulp.dest('dist/images'));
});

gulp.task('copy-fonts', ['del'], function () {
	return gulp.src('fonts/**/*')
		.pipe(copy('dist/fonts', { prefix: 1 }));
});

gulp.task('copy-pages', ['del'], function () {
	return gulp.src('pages/**/*')
		.pipe(copy('dist/pages', { prefix: 1 }));
});

gulp.task('copy-icon', ['del'], function () {
	return gulp.src('favicon.ico')
		.pipe(copy('dist', { prefix: 1 }));
});

gulp.task('dev', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            middleware: [
                modRewrite([
                    '!\\.\\w+$ /index.html [L]'
                ])
            ]
        }
    });
});

gulp.task('test', function() {
    browserSync.init({
        server: {
            baseDir: "./dist",
            middleware: [
                modRewrite([
                    '!\\.\\w+$ /index.html [L]'
                ])
            ]
        }
    });
});
