var Hyperwallet = require("hyperwallet-sdk");
var Utils = require("../utils.js");

var username = process.argv[2];
var password = process.argv[3];
var programToken = process.argv[4];
var userToken = process.argv[5];
var bankAccountToken = process.argv[6];
var statusTransitionToken = process.argv[7];

var client = new Hyperwallet({
    username: username,
    password: password,
    programToken: programToken,
});

client.getBankAccountStatusTransition(userToken, bankAccountToken, statusTransitionToken, Utils.printResponse);