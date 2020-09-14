"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function addToCart(cart, products, name, counts) {
  var newCart = _toConsumableArray(cart);

  for (var i = 0; i < products.length; i++) {
    if (products[i].name === name) {
      newCart.push({
        name: name,
        counts: counts
      });
    }
  }

  return newCart;
}

function stockMinus(products, cart) {
  var newCart = _toConsumableArray(cart);

  var updateStock = _toConsumableArray(products);

  for (var i = 0; i < products.length; i++) {
    for (var j = 0; j < newCart.length; j++) {
      if (products[i].name === newCart[j].name) {
        products[i].stock -= newCart[j].counts;
      }
    }
  }

  return updateStock;
}

function countPrice(cart, products) {
  var totalPrice = 0;

  for (var i = 0; i < cart.length; i++) {
    for (var j = 0; j < products.length; j++) {
      if (products[j].name === cart[i].name) {
        totalPrice += products[j].price * cart[i].counts;
      }
    }
  }

  return totalPrice;
}

function changeMoney(customer, price) {
  var newUpdate = _objectSpread({}, customer);

  newUpdate.money -= price;
  return newUpdate;
}

function printReceipt(cart, products, subject) {
  var receipt = {
    cashier: subject.cashier,
    customer: subject.customer,
    products: [],
    createdAt: new Date(),
    total: 0
  };
  cart.forEach(function (e) {
    var _products$find = products.find(function (el) {
      return el.name === e.name;
    }),
        price = _products$find.price;

    receipt.products.push({
      name: e.name,
      quantity: e.counts,
      price: price
    });
    receipt.total += price * e.counts;
  });
  return receipt;
}