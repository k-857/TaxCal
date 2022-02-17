"use strict";
var $ = function(id) {
    return document.getElementById(id);
};
var calculateTotal = function(salesPrice, taxAmount) {
var total = ((salesPrice * taxAmount) + salesPrice);
total = total.toFixed(2);
return total;
};
var processEntries = function() {
    var salesPrice = parseFloat($("salesPrice").value);
    var taxAmount = parseFloat($("taxAmount").value);

    if (isNaN(salesPrice) || isNaN(taxAmount)) {
        alert("Both entries must be numeric");
    } else if (salesPrice <= 0 || taxAmount <= 0) {
      alert("Both entries must be greater than zero");
    } else {
        $("total").value = calculateTotal(salesPrice, taxAmount);
        $("total").focus();
    }
};
window.onload = function() {
    $("calculate").onclick = processEntries;
    $("salesPrice").focus();
};