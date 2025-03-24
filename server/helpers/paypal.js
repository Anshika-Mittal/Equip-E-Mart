const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "Ab6krTtftDktx51i7FurD_aiBkDpEtYM3my1wKlhtXqDr0CQQUlQbVur6w9suPihrDRURbXpopQi7mdO",
  client_secret: "EN3eb1chIOy7jgGddh3YFqWFpV20sTB_bWX-6EvK04h4KKLxwRVYLFiwagSnjngXkD8aOk8iZkGOe5Cn",
});

module.exports = paypal;
