"use strict";

var loaderUtils = require("loader-utils");
var assign = require("object-assign");
var asciidoctor = require('asciidoctor.js')();

// default option
var defaultOptions = {
  safe: 'server',
  sourceHighlighter: 'highlightjs'
};

module.exports = function (content) {
  // merge params and default config
  var query = loaderUtils.parseQuery(this.query);
  var options = assign({}, defaultOptions, query, this.options["asciidoctorLoader"]);
  var processor = asciidoctor.Asciidoctor(true);

  this.cacheable();

  return processor.$convert(content, asciidoctor.Opal.hash(options));
};
