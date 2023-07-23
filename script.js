var product = document.getElementById("product");
var price = document.getElementById("price");
var calcBtn = document.getElementById("calcBtn");
var promo = document.getElementById("promo");
var product3Message = document.getElementById("product3");

calcBtn.addEventListener("click", calcular);
function calcular() {
  var product3 = parseFloat(price.value) * 0.5;
  var promoPrice = parseFloat(price.value) * 3 - product3;
  promo.textContent =
    product.value.toUpperCase() +
    " - Promoção: Leve 3 por R$: " +
    promoPrice.toFixed(2);
  product3Message.textContent =
    "O 3º produto custa apenas R$: " + product3.toFixed(2);
}
