var TAX_RATE = 0.02
var PHONE_PRICE = 49.99
var ACCESSORY_PRICE = 9.99
var phones = 0

var bankBalance = prompt("Enter your bank balance");
alert("Your bank balance is $" + String(bankBalance));

var spendingThresh = prompt("Enter your spending threshold per item");
alert("Your spending threshold is $" + String(spendingThresh));


do {
  makePurchase = prompt("Hello. You have a bank balance of $" + String(bankBalance) + ".A phone will cost you $" + String(PHONE_PRICE) + ". An accessory will cost you $" + String(ACCESSORY_PRICE) + ". Don't forget sales tax of " + String(TAX_RATE * 100) + " percent! Would you like to make a purchase?");

  if(makePurchase === "n") {
    alert("Have a nice day!");
    break;
  } else {
    var saleTotal = (PHONE_PRICE + ACCESSORY_PRICE) + (PHONE_PRICE * TAX_RATE) + (ACCESSORY_PRICE * TAX_RATE);
      if(saleTotal > spendingThresh) {
        alert("The sale total of $" + String(saleTotal) + " is greater than your spending threshold of $" + String(spendingThresh) + ". No phone for you!");
      } else if(saleTotal > bankBalance) {
        alert("The sale total of $" + String(saleTotal) + " is greater than your bank balance of $" + String(bankBalance.toFixed(2)) + ". No phone for you!");
      } else {
        bankBalance -= saleTotal;
        phones ++
        alert("Thanks for your purchase! Your bank balance is now $" + String(bankBalance.toFixed(2)) + ". You currently own " + String(phones) + " phone(s).");
      }
    }
} while (makePurchase === "y");
