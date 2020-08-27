$(document).ready(function() {
  let inputText;

  class Human {
    constructor(firstName, age) {
      this.firstName = firstName;
      this.age = age;
    }
    // infoHuman() {
    //   let info = "Name: " + this.firstName;
    //   return info;
    // }
  }

  let human1 = new Human("Иван", 21);
  let human2 = new Human("Алёша", 100500);
  let human3 = new Human("Люцифер", 666);
  // human1.InfoHuman();
  // human2.InfoHuman();
  // human3.InfoHuman();
  let arrHumans = [human1, human2, human3];
  // console.log(arrHumans);

  let arrMinMax = [];
  createRandomArrMinMax(arrMinMax);
  console.log(arrMinMax);
  console.log(`Максимальный элемент в массиве: ${findMax(arrMinMax)}`);
  console.log(`Минимальный элемент в массиве: ${findMin(arrMinMax)}`);

  reverseNumbers(10, -2);

  $("#button-search").on("click", outputToAlert);
//-------------------------------------------------------------------
  function superSum(number1 = 0xff, number2 = -10.5) {
    let sum = number1 + number2;
    return sum;
  }

  function createRandomArrMinMax(arr) {
    for ( i = 0; i < 5; i++ ) {
      arr.push(Math.round(Math.random() * 100 ));
    }
  }

  function findMax(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) max = array[i];
    }
    return max;
  }

  function findMin(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    return min;
  }

  function reverseNumbers(a = "XXX", b = "YYY") {
    let c = a;
    a = b;
    b = c;
    console.log(`Число a: ${a}`);
    console.log(`Число b: ${b}`);
  }

  function outputMaxValue() {
    let maxValueNumber = findMax(arrMinMax);
    alert(maxValueNumber);
    //console.log(maxValueNumber);
  }

  function outputToAlert() {
    event.preventDefault();
    inputText = $("#input-search").val();
    if (inputText == "google") {
      alert(`Yandex круче. Но это не точно.\n${arrHumans[0].firstName}\nsuperSum: ${superSum(10, -11)}`);
      setTimeout(outputMaxValue, 3000);
    } else {
      alert(`${document.getElementById("input-search").value}\n${arrHumans[0].firstName}\nsuperSum: ${superSum(10, -11)}`);
      setTimeout(outputMaxValue, 3000);
    }
  }
});
