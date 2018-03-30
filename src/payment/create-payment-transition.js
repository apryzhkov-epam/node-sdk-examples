var Hyperwallet = require("hyperwallet-sdk");
var Utils = require("../utils.js");

var username = process.argv[2];
var password = process.argv[3];
var programToken = process.argv[4] || "prg-44a64920-45fc-4578-a7f9-e14813b3ed54";
var paymentToken = process.argv[5] || "";

var client = new Hyperwallet({
    username: username,
    password: password,
    programToken: programToken,
});

client.createPaymentStatusTransition(paymentToken, {
    transition: "DE_ACTIVATED"
}, Utils.printResponse);