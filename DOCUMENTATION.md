
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
- [Installation]()
- [How use]()
  - [Stylus API]()
  - [Gulp]()
  - [Grunt]()
- [Grid]()
  - [`row`]()
  - [`col`]()
  - [`span`]()
- [Utilities]()
  - [`offset`]()
  - [`debug`]()
- [Support]()
- [Thanks]()

### Installation

```bash
$ npm install gride
```

**[:arrow_up: back to top](#table-of-contents)**

### How use

##### Stylus API

```stylus
@import 'node_modules/gride/gride'
```

**[:arrow_up: back to top](#table-of-contents)**

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

##### Grunt

```stylus

```

**[:arrow_up: back to top](#table-of-contents)**
