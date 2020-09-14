// const cars = [
//   { merk: "toyota", type: "avanza", color: "silver", price: 125 },
//   { merk: "toyota", type: "inova", color: "white", price: 455 },
//   { merk: "honda", type: "CR-V", color: "white", price: 115 },
//   { merk: "suzuki", type: "Ertiga", color: "black", price: 350 },
// ];

// function generateCarPrice(type, unit) {
//   const i = cars.find((element) => element.type === type);

//   return i.price * unit;
// }

// function getTypeByMerk(merk) {
//   const a = [];
//   for (i = 0; i < cars.length; i++) {
//     if (cars[i].merk == merk) {
//       a.push(cars[i]);
//     }
//   }
//   return a;
// }

// function changePriceByType(type, price) {
//   for (i = 0; i < cars.length; i++) {
//     if (cars[i].type === type) {
//       cars[i].price = price;
//     }
//   }
//   console.log(cars);
// }

// function addCarAttr(type, key, value) {
//   for (i = 0; i < cars.length; i++) {
//     if (cars[i].type === type) {
//       cars[i][key] = value
//     }

//   }
//   console.log(cars)
// }
// console.log(addCarAttr("avanza", "seats", 6));

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] < arr[j]) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }

// console.log(arr, 'setelah diurutkan');

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 10) {

//     console.log(i)
//   }