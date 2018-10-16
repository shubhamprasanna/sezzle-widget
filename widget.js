// document.querySelectorAll('*[class*="price-"]');
// document.querySelectorAll('*[class*="price-"]')[0].innerHTML.split(" ");
// document.querySelectorAll('*[class*="price-"]')[0].classList[1];

var prices = document.querySelectorAll('*[class*="price-"]');
console.log(prices.length);
// console.log(prices[0].innerText.split("$")[0]);
for (var i = 0; i < prices.length; i++) {
  var p = prices[i].innerHTML;
  console.log(p);
  if (p.split(" ")[1] > 20) {
    const oldPrice = "Price: " + p.split(" ")[1] + "$";
    if (p.split(" ")[1] < 100) {
      var newPrice = p.split(" ")[1] - p.split(" ")[1] * 0.2;
      newPrice = "Offer Price: " + newPrice + "$";
      prices[i].innerHTML =
        oldPrice +
        "<br><br>" +
        "<span style='display:block; color:#26ed93; font-weight:900;'>" +
        newPrice +
        "</span>";
      //   prices[i].appendChild(offerPrice);
      // "Price:" + p + "<span style='display:block'" >
      // +newPrice + "</span>";
    } else if (p.split(" ")[1] >= 100 && p.split(" ")[1] < 500) {
      var newPrice = p.split(" ")[1] - p.split(" ")[1] * 0.3;
      newPrice = "Offer Price: " + newPrice + "$";
      prices[i].innerHTML =
        oldPrice +
        "<br><br>" +
        "<span style='display:block; color:#26ed93; font-weight:900;'>" +
        newPrice +
        "</span>";
      //   prices[i].appendChild(offerPrice);
    } else {
      var newPrice = p.split(" ")[1] - p.split(" ")[1] * 0.4;
      newPrice = "Offer Price: " + newPrice + "$";
      prices[i].innerHTML =
        oldPrice +
        "<br><br>" +
        "<span style='display:block; color:#26ed93; font-weight:900;'>" +
        newPrice +
        "</span>";
      //   prices[i].appendChild(offerPrice);
      // prices[i].innerHTML = oldPrice + "<br><br>" + newPrice;
    }
  }
}
