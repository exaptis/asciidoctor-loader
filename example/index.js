require('asciidoctor.js/dist/css/asciidoctor.css');
require('highlight.js/styles/zenburn.css');

var html = require("./README.adoc");
var hljs = require("highlight.js");

document.getElementById('container').innerHTML = html;
hljs.initHighlightingOnLoad();
