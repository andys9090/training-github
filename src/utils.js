function findElement(arr, position) {
  return position >= arr.length || position < 0
    ? "index out of range"
    : arr[position];
}

function findIndex(num) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === num) {
      return i;
    }
  }
  return -1;
}

function sort(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function sumArrayElement(a, b) {
  let newArr = [];
  const limit = a.length > b.length ? a.length : b.length;
  for (i = 0; i < limit; i++) {
    const firstValue = a[i] || 0;
    const secondValue = b[i] || 0;
    const sumValue = firstValue + secondValue;

    const formatString = `${firstValue} + ${secondValue} = ${sumValue}`;

    newArr.push(formatString);
  }

  console.log(newArr.join("\n"));
}

function maxElement(a) {
  let maxValue = a[0];
  for (let i = 1; i < a.length; i++) {
    if (a[i] > maxValue) maxValue = a[i];
  }
  return maxValue;
}

function minElement(a) {
  let minValue = a[0];
  for (let i = 1; i < a.length; i++) {
    if (a[i] < minValue) minValue = a[i];
  }
  return minValue;
}

function averageElement(a) {
  return sum(a) / a.length;
}

function modusElement(arr) {
  let number = {};
  let result = [];
  arr.forEach(function (element) {
    if (!number[element]) number[element] = 0;
    number[element] += 1;
  });
  for (let element in number) {
    if (number[element] >= 2) {
      result.push(element);
    }
  }
  return result;
}

function removeArrayElement(a, index) {
  let removed = [];
  for (i = 0; i < a.length; i++) {
    if (a[i] !== index) {
      removed.push(a[i]);
    }
  }
  return removed;
}

function sum(a) {
  let total = 0;
  for (let i = 0; i < a.length; i++) {
    total += a[i];
  }
  return total;
}

function addNewCar(curCars, newCar) {
  const newCars = [...curCars, newCar];
  return newCars;
}

function selledCar(cars, code, unit) {
  const newCars = [...cars];
  if (unit < 1) {
    return "wajib memilih min 1";
  } else {
    for (let i = 0; i < newCars.length; i++) {
      if (newCars[i].code === code.toLowerCase()) {
        if (newCars[i].stock < unit) {
          return "stock tidak mencukupi";
        } else {
          newCars[i].stock -= unit;
          return newCars;
        }
      }
    }
    return `mobil dengan code ${code} tidak tersedia`;
  }
}

function checkCharType(str) {
  const asci = str.charCodeAt();
  if (asci >= 65 && asci <= 90) return "upper";
  if (asci >= 97 && asci <= 122) return "lower";
  if (asci == 32) return "not a char";
}

function ConvertToLowerCase(str) {
  let newConvert = "";
  for (let i = 0; i < str.length; i++) {
    const asci = str[i].charCodeAt();
    if (checkCharType(str[i]) === "upper") {
      newConvert += String.fromCharCode(asci + 32);
    } else if (checkCharType(str[i]) === "lower") {
      newConvert += String.fromCharCode(asci - 32);
    } else {
      newConvert += str[i];
    }
  }
  return newConvert;
}

function changeSpace(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      newStr += "_";
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

function oddEven(arr) {
  let odd = 0;
  let even = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) even++;
    else odd++;
  }

  return `Ganjil: ${odd} \nGenap: ${even}`;
}

function groupOddEven(arr) {
  let odd = [];
  let even = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) odd.push(arr[i]);
    else even.push(arr[i]);
  }

  return {
    odd,
    even,
  };
}

function oddEvenCount2(arr) {
  let totalOdd = 0;
  let totalEven = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      totalOdd += arr[i];
    } else {
      totalEven += arr[i];
    }
  }
  return `genap: ${totalEven}\nganjil: ${totalOdd}`;
}

function oddEvenCount(arr) {
  const group = groupOddEven(arr);
  return `genap: ${sum(group.even)}\nganjil: ${sum(group.odd)}`;
}

function compareNum(a, b) {
  if (a < b) {
    return `${a} lebih kecil dari ${b}`;
  } else if (a > b) {
    return `${a} lebih besar dari ${b}`;
  } else {
    return `${a} sama dengan ${b}`;
  }
}

function compareArr(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const a = arr1[i];
    const b = arr2[i];

    console.log(compareNum(a, b));
  }
}

function reverseArr(arr) {
  const newArr = [];
  for (let i = arr.length - 1; i > -1; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function countTriangleWide(base, height) {
  return `${base} * ${height} / 2 = ${(base * height) / 2}`;
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
  const split = time.split(":");
  return split[0] * 3600 + split[1] * 60 + split[2] * 1;
}

function timeMinusSecond(time1, time2) {
  const time1Sec = convertTime(time1);
  const time2Sec = convertTime(time2);
  if (time1Sec < time2Sec) {
    return `${convertTimeString(time2Sec - time1Sec)}`;
  } else if (time1Sec > time2Sec) {
    return `-${convertTimeString(time1Sec - time2Sec)}`;
  } else {
    return `${convertTimeString(time1Sec - time2Sec)}`;
  }
}

function convertTimeString(sec) {
  const hours = Math.floor(sec / 60 / 60);
  const minutes = Math.floor(sec / 60) - hours * 60;
  const seconds = sec % 60;
  return `${addPadInfront(hours)}:${addPadInfront(minutes)}:${addPadInfront(
    seconds
  )}`;
}

function addPadInfront(time) {
  if (time <= 9) {
    return `${0}${time}`;
  }
  return `${time}`;
}

function convertTimeArray(clock1, clock2) {
  let newTimeArr = [];
  for (let i = 0; i < clock1.length; i++) {
    const time1Sec = convertTime(clock1[i]);
    const time2Sec = convertTime(clock2[i]);
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
  let time = convertTime(initTime)- 1;
  const inter = setInterval(() => {
    element.innerHTML = convertTimeString(time--);
    if (time <= -1) {
      clearInterval(inter);
      time.innerHTML = "00:00:00"
    }
  }, 1000);
  return inter;
}
