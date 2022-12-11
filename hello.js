var cowsay = require("cowsay");
const Quote = require('inspirational-quotes');
var q=(Quote.getRandomQuote());
console.log(cowsay.say({
    text : q,
    e : "oO",
    T : "U "
}));