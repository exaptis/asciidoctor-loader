# asciidoctor loader for webpack

## Installation

`npm install asciidoctor-loader --save-dev`

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
var readme = require('html!asciidoctor!./README.adoc');
// => returns parsed file content
```


### Example config

This webpack config can load asciidoctor files.

``` javascript
module.exports = {
  module: {
    loaders: [
      { test: /\.adoc$/, loader: "html!asciidoctor" }
    ]
  }
};
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
