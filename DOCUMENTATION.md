
<p align="center">
  <img src="https://github.com/guuibayer/gride/blob/gh-pages/src/img/logo.png">
</p>

<p align="center">
  <a href="https://gitter.im/gride-grid/Lobby"><img src="https://img.shields.io/badge/gitter-join%20chat-1dce73.svg"></a>
  <a href="https://badge.fury.io/js/gride"><img src="https://badge.fury.io/js/gride.svg"></a> 
  <a href="https://github.com/guuibayer/gride/blob/master/LICENSE.md"><img src="https://img.shields.io/badge/licence-MIT-blue.svg"></a>
</p>

<p align="center">
  Gride is a stylus and scss, simple and flexible grid system, gride use simple units percent or fractions, use only display  <code>inline-block</code> and <code>vertical-align</code>, not floats, positions or flexbox.
</p>

## Table of Contents
- [Installation](#installation)
- [How use](#how)
  - [Stylus API](#stylus)
  - [Gulp](#gulp)
  - [Grunt](#grunt)
- [Grid](#grid)
  - [`row`](#row)
  - [`col`](#col)
  - [`span`](#span)
- [Utilities](#utilities)
  - [`offset`](#offset)
  - [`debug`](#debug)
- [Support](#support)
- [Thanks](#thanks)

### Installation

Install the current version from gride and save in dev dependencies with command below

```bash
$ npm install gride
```

**[:arrow_up: back to top](#table-of-contents)**
&nbsp;

### How use

##### Stylus API

```stylus
@import 'node_modules/gride/gride'
```

**[:arrow_up: back to top](#table-of-contents)**
&nbsp;

##### Gulp

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

**[:arrow_up: back to top](#table-of-contents)**
&nbsp;

##### Grunt

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

**[:arrow_up: back to top](#table-of-contents)**
&nbsp;

### Grid

##### row

For all collumns or spans were need a row, the row is a container to align the context, row accept a unique param, is the max width. 

```stylus
.container
  row(1024px)
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

**[:arrow_up: back to top](#table-of-contents)**
&nbsp;

##### col

```stylus
aside
  col(2 / 5, top)
  
section
  col(3 / 5, top)
```

The output from this code is

```css
aside {
  width: 60%;
  padding: 0 15px;
  display: inline-block;
  vertical-align: top;
  font-size: initial;
}

section {
  width: 40%;
  padding: 0 15px;
  display: inline-block;
  vertical-align: top;
  font-size: initial;
}
```

**[:arrow_up: back to top](#table-of-contents)**
&nbsp;

##### span

```stylus
aside
  span(2 / 5, middle)
  
section
  span(3 / 5, middle)
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

**[:arrow_up: back to top](#table-of-contents)**
&nbsp;

### Utilities

##### offset

```stylus
aside
  offset(1 / 5, right)
```

The output from this is

```css
aside {
  margin-right: 20%; 
}
```


**[:arrow_up: back to top](#table-of-contents)**
&nbsp;

##### debug

```stylus
debug()
```

Output is

```css
* {
  background-color: rgba(255,255,255,0.2);
}
```

**[:arrow_up: back to top](#table-of-contents)**
&nbsp;

### Support

### Thanks
