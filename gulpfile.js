'use strict';

var gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		rename = require('gulp-rename'),
		concat = require('gulp-concat');

gulp.task('library', function() {
	gulp.src(['source/lib/*.js'])
		.pipe(uglify())
		.pipe(concat('lib.min.js'))
		.pipe(gulp.dest('public/js/'));
});

gulp.task('compress', function() {
	gulp.src(['public/js/main.js'])
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('public/js/'));
});
/*


gulp.task('style', function() {
	var csslint = require('gulp-csslint'),
		csslintReport = require('gulp-csslint-sourcemap-reporter'),
		plumber = require('gulp-plumber'),
		sourcemaps = require('gulp-sourcemaps');

	return gulp.src('./dev/css/*.css')
		.pipe(plumber())
		
		//.pipe(sourcemaps.init({loadMaps: true}))
		
		//.pipe(sourcemaps.write('.'))
		.pipe(csslint())
		.pipe(csslint.reporter(csslintReport))
		.pipe(reload({stream:true}));


		//.pipe(concat('style.css'))

});

gulp.task('critical', function() {
	var critical = require('critical'),
		criticalOption = require('./dev/critical.json');

	critical.generate(criticalOption);
});

gulp.task('image:build', function() {
	var imagemin = require('gulp-imagemin');

	return gulp.src('./dev/images/*')
		.pipe(imagemin({progressive: true}))
		.pipe(gulp.dest('./build/images/'));
});
*/
gulp.task('spritesmith', function() {
	var spritesmith = require('gulp.spritesmith');

	var spriteDate = gulp.src('./source/sprite/*.*')
		.pipe(spritesmith({
			imgName: 'sprite.png',
			cssName: 'sprite.less',
			cssFormat: 'less',
			algorithm: 'binary-tree',
			cssTemplate: 'spritesmith.mustache'
		}));

	spriteDate.img.pipe(gulp.dest('./public/images/'));
	spriteDate.css.pipe(gulp.dest('./source/less/spritesmith/'));
	console.log('finally');
	
});

gulp.task('watch', function() {
	var watch = require('gulp-watch');

	// watch('./dev/*.html', watchBatch(['html']));
	//watch('./dev/less/**/*.less', watchBatch(['less']));
	// watch('./dev/css/*.css', watchBatch(['style']));
	watch('./source/sprite/*.png', watchBatch(['spritesmith']));

	// watch('./dev/js/*.js', watchBatch(['js']));
});

gulp.task('default', ['watch']);
/*
* функция обёртка для gulp-watch
*/
function watchBatch(arr) {
	var batch = require('gulp-batch');
	return batch( function(events, done) {
		for(var i = 0; i < arr.length; i++) {
			gulp.start(arr[i], done);
		}
	});
}
