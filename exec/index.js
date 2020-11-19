#!/usr/bin/env node

/**
 * Retrieve System Information
 * Author: KCAK11 (https://www.kcak11.com)
 */

var info = require("../index");
var result = "\n\n~~~~~~~~~~~~~~~~~~~~~~\nSystem Information\n~~~~~~~~~~~~~~~~~~~~~~\n\n";
result += info.text;

setTimeout(function () {
    console.clear();
    console.log(result);
}, 100);
