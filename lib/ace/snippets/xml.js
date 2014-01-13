define(function(require, exports, module) {
"use strict";

exports.snippetText = require("../requirejs/text!./xslt.snippets")
    + "\n"
    + require("../requirejs/text!./xml.snippets");
exports.scope = "xml";

});
