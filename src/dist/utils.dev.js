"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function findElement(arr, position) {
  return position >= arr.length || position < 0 ? "index out of range" : arr[position];
}

function findIndex(num) {
  for (var _i = 0; _i < a.length; _i++) {
    if (a[_i] === num) {
      return _i;
    }
  }

  return -1;
}

function sort(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

function sumArrayElement(a, b) {
  var newArr = [];
  var limit = a.length > b.length ? a.length : b.length;

  for (i = 0; i < limit; i++) {
    var firstValue = a[i] || 0;
    var secondValue = b[i] || 0;
    var sumValue = firstValue + secondValue;
    var formatString = "".concat(firstValue, " + ").concat(secondValue, " = ").concat(sumValue);
    newArr.push(formatString);
  }

  console.log(newArr.join("\n"));
}

function maxElement(a) {
  var maxValue = a[0];

  for (var _i2 = 1; _i2 < a.length; _i2++) {
    if (a[_i2] > maxValue) maxValue = a[_i2];
  }

  return maxValue;
}

function minElement(a) {
  var minValue = a[0];

  for (var _i3 = 1; _i3 < a.length; _i3++) {
    if (a[_i3] < minValue) minValue = a[_i3];
  }

  return minValue;
}

function averageElement(a) {
  return sum(a) / a.length;
}

function modusElement(arr) {
  var number = {};
  var result = [];
  arr.forEach(function (element) {
    if (!number[element]) number[element] = 0;
    number[element] += 1;
  });

  for (var element in number) {
    if (number[element] >= 2) {
      result.push(element);
    }
  }

  return result;
}

function removeArrayElement(a, index) {
  var removed = [];

  for (i = 0; i < a.length; i++) {
    if (a[i] !== index) {
      removed.push(a[i]);
    }
  }

  return removed;
}

function sum(a) {
  var total = 0;

  for (var _i4 = 0; _i4 < a.length; _i4++) {
    total += a[_i4];
  }

  return total;
}

function addNewCar(curCars, newCar) {
  var newCars = [].concat(_toConsumableArray(curCars), [newCar]);
  return newCars;
}

function selledCar(cars, code, unit) {
  var newCars = _toConsumableArray(cars);

  if (unit < 1) {
    return "wajib memilih min 1";
  } else {
    for (var _i5 = 0; _i5 < newCars.length; _i5++) {
      if (newCars[_i5].code === code.toLowerCase()) {
        if (newCars[_i5].stock < unit) {
          return "stock tidak mencukupi";
        } else {
          newCars[_i5].stock -= unit;
          return newCars;
        }
      }
    }

    return "mobil dengan code ".concat(code, " tidak tersedia");
  }
}

function checkCharType(str) {
  var asci = str.charCodeAt();
  if (asci >= 65 && asci <= 90) return "upper";
  if (asci >= 97 && asci <= 122) return "lower";
  if (asci == 32) return "not a char";
}

function ConvertToLowerCase(str) {
  var newConvert = "";

  for (var _i6 = 0; _i6 < str.length; _i6++) {
    var asci = str[_i6].charCodeAt();

    if (checkCharType(str[_i6]) === "upper") {
      newConvert += String.fromCharCode(asci + 32);
    } else if (checkCharType(str[_i6]) === "lower") {
      newConvert += String.fromCharCode(asci - 32);
    } else {
      newConvert += str[_i6];
    }
  }

  return newConvert;
}

function changeSpace(str) {
  var newStr = "";

  for (var _i7 = 0; _i7 < str.length; _i7++) {
    if (str[_i7] === " ") {
      newStr += "_";
    } else {
      newStr += str[_i7];
    }
  }

  return newStr;
}

function oddEven(arr) {
  var odd = 0;
  var even = 0;

  for (var _i8 = 0; _i8 < arr.length; _i8++) {
    if (arr[_i8] % 2 === 0) even++;else odd++;
  }

  return "Ganjil: ".concat(odd, " \nGenap: ").concat(even);
}

function groupOddEven(arr) {
  var odd = [];
  var even = [];

  for (var _i9 = 0; _i9 < arr.length; _i9++) {
    if (arr[_i9] % 2 === 1) odd.push(arr[_i9]);else even.push(arr[_i9]);
  }

  return {
    odd: odd,
    even: even
  };
}

function oddEvenCount2(arr) {
  var totalOdd = 0;
  var totalEven = 0;

  for (var _i10 = 0; _i10 < arr.length; _i10++) {
    if (arr[_i10] % 2 === 1) {
      totalOdd += arr[_i10];
    } else {
      totalEven += arr[_i10];
    }
  }

  return "genap: ".concat(totalEven, "\nganjil: ").concat(totalOdd);
}

function oddEvenCount(arr) {
  var group = groupOddEven(arr);
  return "genap: ".concat(sum(group.even), "\nganjil: ").concat(sum(group.odd));
}

function compareNum(a, b) {
  if (a < b) {
    return "".concat(a, " lebih kecil dari ").concat(b);
  } else if (a > b) {
    return "".concat(a, " lebih besar dari ").concat(b);
  } else {
    return "".concat(a, " sama dengan ").concat(b);
  }
}

function compareArr(arr1, arr2) {
  for (var _i11 = 0; _i11 < arr1.length; _i11++) {
    var _a = arr1[_i11];
    var b = arr2[_i11];
    console.log(compareNum(_a, b));
  }
}

function reverseArr(arr) {
  var newArr = [];

  for (var _i12 = arr.length - 1; _i12 > -1; _i12--) {
    newArr.push(arr[_i12]);
  }

  return newArr;
}

function countTriangleWide(base, height) {
  return "".concat(base, " * ").concat(height, " / 2 = ").concat(base * height / 2);
}

function convertTimeToSecond(num, convert) {
  if (convert === "hours") {
    return num * 3600;
  } else if (convert === "minutes") {
    return num * 60;
  } else if (convert === "seconds") {
    return num * 1;
  }
}

function convertTime(time) {
  var split = time.split(":");
  return split[0] * 3600 + split[1] * 60 + split[2] * 1;
}

function timeMinusSecond(time1, time2) {
  var time1Sec = convertTime(time1);
  var time2Sec = convertTime(time2);

  if (time1Sec < time2Sec) {
    return "".concat(convertTimeString(time2Sec - time1Sec));
  } else if (time1Sec > time2Sec) {
    return "-".concat(convertTimeString(time1Sec - time2Sec));
  } else {
    return "".concat(convertTimeString(time1Sec - time2Sec));
  }
}

function convertTimeString(sec) {
  var hours = Math.floor(sec / 60 / 60);
  var minutes = Math.floor(sec / 60) - hours * 60;
  var seconds = sec % 60;
  return "".concat(addPadInfront(hours), ":").concat(addPadInfront(minutes), ":").concat(addPadInfront(seconds));
}

function addPadInfront(time) {
  if (time <= 9) {
    return "".concat(0, time);
  }

  return "".concat(time);
}

function convertTimeArray(clock1, clock2) {
  var newTimeArr = [];

  for (var _i13 = 0; _i13 < clock1.length; _i13++) {
    var time1Sec = convertTime(clock1[_i13]);
    var time2Sec = convertTime(clock2[_i13]);

    if (time1Sec < time2Sec) {
      newTimeArr.push(convertTimeString(time2Sec - time1Sec));
    } else if (time1Sec > time2Sec) {
      newTimeArr.push(convertTimeString(time1Sec - time2Sec));
    } else {
      newTimeArr.push(convertTimeString(time1Sec - time2Sec));
    }
  }

  return newTimeArr;
}

function startTimer(initTime, element) {
  var time = convertTime(initTime) - 1;
  var inter = setInterval(function () {
    element.innerHTML = convertTimeString(time--);

    if (time <= -1) {
      clearInterval(inter);
      time.innerHTML = "00:00:00";
    }
  }, 1000);
  return inter;
}