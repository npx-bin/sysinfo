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
            var result = os[key]();
            var outputInfo, outputText;
            if (typeof result === "string") {
                outputInfo = result;
                outputText = result;
            } else {
                outputInfo = JSON.stringify(result);
                outputText = JSON.stringify(result, null, 4);
            }
            info[key] = outputInfo;
            text += key + ":  " + outputText + "\n\n";
        } catch (exjs) { }
    }
}

module.exports = {
    text: text,
    info: info
};