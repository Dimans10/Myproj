var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify = require('gulp-uglifyjs'),
    del = require('del'), // Подключаем библиотеку для удаления файлов и папок
    autoprefixer = require('gulp-autoprefixer'), // Подключаем gulp-uglifyjs (для сжатия JS)
    imagemin = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    csso = require('gulp-csso'), // Для минификации css
    pngquant = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    cache = require('gulp-cache'), // Подключаем библиотеку кеширования
    sourcemaps = require("gulp-sourcemaps"),
    babel = require("gulp-babel");;

gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством //gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/css')) // Выгружаем результата // в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function(){
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('scripts', function(){
    return gulp.src([ // Берем все необходимые библиотеки
        'app/libs/**/*.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat("all.min.js"))
        .pipe(sourcemaps.write("."))
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('app/js')); // Выгружаем в папку app/js
});

gulp.task('css', function() {
    return gulp.src('app/css/**/*.css')
        .pipe(concat('main.min.css')) // Собираем их в кучу в новом файле main.min.css
        .pipe(csso()) // Сжимаем JS файл
        .pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
});

gulp.task('clean', function() {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*') // Берем все изображения из app
        .pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});

gulp.task('watch', ['browser-sync', 'sass', 'scripts', 'css'], function(){
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'img' ,'sass', 'scripts', 'css'], function() {

    var buildCss = gulp.src([ // Переносим CSS стили в продакшен
        'app/css/main.min.css'
        ])
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
    .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
    .pipe(gulp.dest('dist'));

});


