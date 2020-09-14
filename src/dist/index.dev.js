"use strict";

// const time = document.getElementById("time");
// let initTime = "00:00:00";
// let inter;
// let pause = null;
// function init() {
//   time.innerHTML = initTime;
// }
// function clearTime() {
//   clearInterval(inter);
//   time.innerHTML = "00:00:00";
//   pause = null;
// }
// function startTime(timeString) {
//   pause = false;
//   if (inter) {
//     clearInterval(inter);
//   }
//   time.innerHTML = timeString;
//   inter = startTimer(timeString, time);
// }
// function pauseTime() {
//   clearInterval(inter);
//   pause = true;
// }
// function startPause() {
//   if (pause === null) {
//     startTime(initTime);
//     document.getElementById("startpause").innerHTML = "Pause";
//   } else if (!pause) {
//     pauseTime();
//     document.getElementById("startpause").innerHTML = "Start";
//   } else {
//     document.getElementById("startpause").innerHTML = "Pause";
//     const curTime = time.innerHTML;
//     startTime(curTime);
//   }
// }
// const addition = {
//   hours: 0,
//   minutes: 0,
//   seconds: 0,
// }
// function handleInputChange(event) {
//   const { value, name } = event.target;
//   const curTimeSec =
//     convertTime(initTime) +
//     convertTimeToSecond(value, name) -
//     convertTimeToSecond(addition[name], name);
//   initTime = convertTimeString(curTimeSec);
//   addition[name] = value;
//   time.innerHTML = initTime;
// }
// function stopAlarm() {
//   setTimeout (stopAlarm, 1000)
// }
// stopAlarm();
// document.getElementById('alarm').stopAlarm();
// init();
function init() {
  var customer = {
    id: 1,
    name: "Andy Aja",
    money: 7500000
  };
  var cashier = {
    id: 1,
    name: "Cin cai sia"
  };
  var cart = [];
  var products = [{
    id: 1,
    name: "Apple",
    stock: 100,
    price: 15000
  }, {
    id: 2,
    name: "Pear",
    stock: 150,
    price: 12500
  }, {
    id: 3,
    name: "Banana",
    stock: 250,
    price: 8000
  }, {
    id: 4,
    name: "Avocado",
    stock: 80,
    price: 20000
  }, {
    id: 5,
    name: "Guava",
    stock: 40,
    price: 10000
  }, {
    id: 6,
    name: "Strawberry",
    stock: 50,
    price: 13000
  }, {
    id: 7,
    name: "Water Melon",
    stock: 40,
    price: 10000
  }, {
    id: 8,
    name: "Orange",
    stock: 200,
    price: 9000
  }, {
    id: 9,
    name: "Lemon",
    stock: 100,
    price: 14000
  }, {
    id: 10,
    name: "Pineapple",
    stock: 20,
    price: 12000
  }]; // start from here
  //1. customer membeli barang min 5 produk dengan jumlah bebas
  //2. customer dapat mencetak struk hasil belanja
  // fungsi:
  //1. memasukkan barnag ke keranjang
  //2. menghitung total belanja
  //3. mengurangi stock barang dalam produk
  //4. mengurani uang customer
  //5. untuk mencetak data struk belanja

  cart = addToCart(cart, products, "Apple", 2);
  cart = addToCart(cart, products, "Guava", 1);
  cart = addToCart(cart, products, "Banana", 2);
  cart = addToCart(cart, products, "Orange", 2);
  cart = addToCart(cart, products, "Pineapple", 2);
  products = stockMinus(products, cart);
  price = countPrice(cart, products);
  change = changeMoney(customer, price);
  receipt = printReceipt(cart, products, {
    cashier: cashier,
    customer: customer
  });
  console.log(cart);
  console.log(products);
  console.log(price);
  console.log(change);
  console.log(receipt);
}

init();