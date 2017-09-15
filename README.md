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
                    loader: "html-loader",
                     options: {
                        interpolate: 'require'
                     }
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

The attribute `showtitle` allows h1 headers to be rendered.

Use the `html-loader` option `interpolate` to enable the asciidoc `include::[]` syntax.

Files loaded through `include::[]` will be affected from other webpack loaders.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
