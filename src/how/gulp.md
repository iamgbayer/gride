[showdoc_index]: 130
[showdoc_id]: gulp
[showdoc_group]: how

## Gulp

```
var gulp = require('gulp'),
    gride = require('gride'),
    stylus = require('gulp-stylus');

gulp.task('styles', function() {
    gulp.src('assets/stylus/styles.styl')
        .pipe(stylus({ 'use': gride() }))
        .pipe(gulp.dest('assets/css'));
});
```
