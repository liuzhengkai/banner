var gulp = require('gulp');
var server = require('gulp-webserver');

gulp.task('server', function() {
    gulp.src('./src/')
        .pipe(server({
            port: 9090,
            open: true,
            middleware: function(req, res, next) {
                var pathname = require('url').parse(req.url).pathname;

                if (pathname === '/favicon.ico') {
                    return;
                };

                pathname = pathname === '/' ? 'index.html' : pathname;
                res.end(require('fs').readFileSync(require('path').join(__dirname, 'src', pathname)));
            }
        }))
})