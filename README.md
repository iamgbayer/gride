# Gride

[![Gitter](https://img.shields.io/badge/gitter-join%20chat-1dce73.svg)](https://gitter.im/gride-grid/Lobby)
[![npm version](https://badge.fury.io/js/gride.svg)](https://badge.fury.io/js/gride)
[![Licence MIT](https://img.shields.io/badge/licence-MIT-blue.svg)](https://github.com/guuibayer/gride/blob/master/LICENSE.md)

> :triangular_ruler: Gride is a stylus and scss, simple grid system.

## Hey, share gride!
[![Twitter](https://img.shields.io/twitter/url/https/www.npmjs.com/package/gride.svg?style=social)](https://twitter.com/intent/tweet?text=Gride, is a simple grid system for stylus and scss!&url=https://github.com/guuibayer/gride/)

## Documentation
See the [documentation]() for all methods.

## How use
Gride use simple units percent or fractions, use only display `inline-block` and `vertical-align`, not floats, positions and flexbox.


```bash
# First install gride with npm,
npm install gride
```

```bash
# Import gride in you main stylus file
@import 'node_modules/gride/gride'
```

```bash
# Or, if use gulp, in the pipe from stylus use grid() 
gulp.task('styl', () => {
  gulp.src('main.styl')
    .pipe(stylus({ use: gride() }))
    .pipe(gulp.dest('css/main.css'));
});
```

## Contributing
Gride in construction, help build it!

See the [projects](https://github.com/guuibayer/gride/projects/1).

Want to contribute? [Follow these recommendations](https://github.com/guuibayer/gride/blob/master/CONTRIBUTING.md).

## Changelog
See [here](https://github.com/guuibayer/gride/releases) the last releases of gride.

## License
[MIT License](https://github.com/guuibayer/gride/blob/master/LICENSE.md)
