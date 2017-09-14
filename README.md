# asciidoctor loader for webpack

## Installation

`npm install asciidoctor-loader --save-dev`

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
var readme = require('html!asciidoctor!./README.adoc');
// => returns parsed file content
```


## Config

Config examples for loading asciidoctor files.

### Webpack 1


``` javascript
module.exports = {
  module: {
    loaders: [
      { test: /\.adoc$/, loader: "html!asciidoctor" }
    ]
  }
};
```

### Webpack 2

``` javascript
    rules: [
        {
            test: /\.adoc/,
            use: [
                {
                    loader: "html-loader"
                },
                {
                    loader: "asciidoctor-loader",
                    options: {
                        attributes: 'showtitle'
                    }
                }
            ]

        }
    ]
```

The attribute `showtitle` allows h1 header to be rendered.


## License

MIT (http://www.opensource.org/licenses/mit-license.php)
