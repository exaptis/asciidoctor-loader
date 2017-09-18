"use strict";

const loaderUtils = require("loader-utils"),
    assign = require("object-assign"),
    asciidoctor = require('asciidoctor.js')(),
    path = require('path');

// default option
const defaultOptions = {
    safe: 'unsafe',
    sourceHighlighter: 'highlightjs'
};

module.exports = function (content) {
    // merge params and default config
    const query = loaderUtils.parseQuery(this.query),
        options = assign({}, defaultOptions, query, this.options["asciidoctorLoader"]),
        includeRegExp = new RegExp(/^include::(.*)\[\]/, 'm');

    let includePath,
        includeFileName;

    while (includeRegExp.test(content)) {
        includeFileName = content.match(includeRegExp)[1];
        includePath = path.join(`${this.context}/${includeFileName}`);
        content = content.replace(includeRegExp, "++++\n${require("+includeFileName+"')}\n++++");

    }

    this.cacheable();

    return asciidoctor.Asciidoctor(true).$convert(content, asciidoctor.Opal.hash(options));
};
