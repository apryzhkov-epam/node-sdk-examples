"use strict";

module.exports.printResponse = function (error, body, res) {
    if (error) {
        console.log("ERROR: " + JSON.stringify(error, null, 4));
    } else {
        console.log("RESPONSE: " + JSON.stringify(body, null, 4));
    }
};