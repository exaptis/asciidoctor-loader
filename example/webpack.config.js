var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.adoc$/,
      loader: "html!asciidoctor"
    }, {
      test: /\.css$/,
      include: /node_modules/,
      loader: "style-loader!css-loader"
    }]
  },
};
