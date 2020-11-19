/**
 * Retrieve System Information 
 * Author: KCAK11 (https://www.kcak11.com)
 */

var os = require("os");
var info = {};
var text = "";
for (var key in os) {
    if (typeof os[key] === "function") {
        try {
            var outputInfo = JSON.stringify(os[key]());
            var outputText = JSON.stringify(os[key](), null, 4);
            info[key] = outputInfo;
            text += key + ":  " + outputText + "\n\n";
        } catch (exjs) { }
    }
}
module.exports = {
    text: text,
    info: info
};