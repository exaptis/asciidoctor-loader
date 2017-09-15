"use strict";

var loaderUtils = require("loader-utils");
var assign = require("object-assign");
var asciidoctor = require('asciidoctor.js')();

// default option
var defaultOptions = {
  safe: 'unsafe',
  sourceHighlighter: 'highlightjs'
};

module.exports = function (content) {
  // merge params and default config
  var query = loaderUtils.parseQuery(this.query);
  var options = assign({}, defaultOptions, query, this.options["asciidoctorLoader"]);

  this.cacheable();

  return asciidoctor.convert(content, options);
};
