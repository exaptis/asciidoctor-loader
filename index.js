"use strict";

const loaderUtils = require("loader-utils"),
    assign = require("object-assign"),
    asciidoctor = require('asciidoctor.js')();

// default option
const defaultOptions = {
    safe: 'unsafe',
    sourceHighlighter: 'highlightjs'
};

module.exports = function (content) {
    // merge params and default config
    const query = loaderUtils.parseQuery(this.query),
        options = assign({}, defaultOptions, query, this.options["asciidoctorLoader"]);

    this.cacheable();

    return asciidoctor.convert(content, options);
};
