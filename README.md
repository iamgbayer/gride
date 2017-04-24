<p align="center">
    <img src="https://rawgit.com/guuibayer/gride/master/logo.png">
</p>

<p align="center">
  <a href="https://gitter.im/gride-grid/Lobby"><img src="https://img.shields.io/badge/gitter-join%20chat-1dce73.svg"></a>
  <a href="https://badge.fury.io/js/gride"><img src="https://badge.fury.io/js/gride.svg"></a> 
  <a href="https://github.com/guuibayer/gride/blob/master/LICENSE.md"><img src="https://img.shields.io/badge/licence-MIT-blue.svg"></a>
</p>

<p align="center">
  Gride is a stylus and scss, simple and flexible grid system, gride use simple units percent or fractions, use only display  <code>inline-block</code> and <code>vertical-align</code>, not floats, positions or flexbox.
</p>

# Quick Start

## Installation

Install the current version from gride and save in dev dependencies with command below.

```bash
$ npm install gride --save-dev
```

## Import main file

The easiest way to use gride is by importing the file directly, see.

Stylus:
```stylus
@import 'node_modules/gride/gride'
```

SCSS:
```scss
@import 'node_modules/gride/gride';
```


## Gulp

To use gride stylus with gulp, needs use [gulp-stylus](https://www.npmjs.org/package/gulp-stylus) and include gride call in use option.  

```javascript
var gulp = require('gulp')
    , gride = require('gride')
    , stylus = require('gulp-stylus');
    
gulp.task('styles', function () { 
  gulp.src('assets/stylus/styles.styl') 
    .pipe(stylus({ 'use': gride() })) 
    .pipe(gulp.dest('assets/css')); 
  });
```


## Grunt

This is a example to use gride stylus with grunt.

```javascript
module.exports = function (grunt) {
  grunt.loadNpmTask('grunt-contrib-stylus');

  grunt.initConfig({
    'stylus': {
      'options': {
        'compress': false,
        'use': [
          require('gride')
        ]
      },
      'styles': {
        'files': {
          'assets/css/styles.css': 'assets/stylus/styles.styl'
        }
      }
    }
  };
};
```


# Guide from grid properties

## Row

For all collumns or spans were need a row, the row is a container to align the context, row accept a unique param, is the max width. 

Stylus:
```stylus
.container
  row(1024px)
```
SCSS:
```scss
.container {
  @include row(1024px);
}
```
The output from code above is

```css
.container {
  width: 100%;
  display: block;
  margin: 0 auto;
  padding: 0 0px;
  max-width: 1024px;
  font-size: 0;
}
```


## Col

The collumns accept two parameters, the first is a fraction or percent, example `2/5` or `40%/100% ` where 5 is the total of collumns and this collumn will occupy **2** from **5**, or **40%** from **100%**, the last parameter is the vertical alignment, the possible values is `top`, `middle` and `bottom`, and col use gutters for space between the collumns.   

Stylus:
```stylus
aside
  col(2/5, top)
  
section
  col(3/5, top)
```

SCSS:
```scss
aside {
  @include col(2/5, top);
}

section {
  @include col(3/5, top);
}
```

The output from this code is

```css
aside {
  width: 40%;
  padding: 0 15px;
  display: inline-block;
  vertical-align: top;
  font-size: initial;
}

section {
  width: 60%;
  padding: 0 15px;
  display: inline-block;
  vertical-align: top;
  font-size: initial;
}
```


## Span

The span method is based and follows the same principle of calculation in the `col` method, accept fractions or percent in the first parameter and the last accept `top`, `middle` and `bottom`, but the difference is that he has no gutters.

Stylus:
```stylus
aside
  span(2/5, middle)
  
section
  span(3/5, middle)
```
SCSS:
```scss
aside {
  @include span(2/5, middle);
}

section {
  @include span(3/5, middle);
}
```

```css
aside {
  width: 40%;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  font-size: initial;
}

section {
  width: 60%;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  font-size: initial;
}
```


# Utilities

## Offset

The offset method is an auxiliary to be used along with the `col` or `span` in the example below, we move the column **aside** to the right, centering it.

Stylus:
```stylus
aside
  offset(1/3, left)
  col(1/3, top)
```

SCSS:
```scss
aside {
  @include offset(1/3, left);
  @include col(1/3, top);
}
```

The output from this example is the aside centralized.

```css
aside {
  margin-right: 33,333333333%;
  width: 33,333333333%;
  padding: 0 15px;
  display: inline-block;
  vertical-align: top;
  font-size: initial;
}
```

## Debug
Stylus:
```stylus
debug()
```

SCSS:
```scss
@include debug();
```

Output is

```css
* {
  background-color: rgba(255, 255, 255, 0.2);
}
```

# Support

# Thanks
Everyone who has [contributed](https://github.com/guuibayer/gride/graphs/contributors).
