// 01

function kek(param1 = 0) {
  return param1++;
}

kek();

// 02

function welcome() {
  let age = prompt("Скільки Вам років?", 18);
  if (age < 18) {
    alert("Привіт!");
  } else {
    alert("Добрий день!");
  }
}
welcome();

// 03

// 1.toString (). Worked? No.

Number(1).toString;

//04

let str = 0.456;

console.log(str.toFixed(2) + " " + "kek");

// 05

let num = 5;

console.log(Math.pow(num, 5));

// 06

let findMatch = "Збігів немає І ТУТ";

console.log(findMatch.indexOf("і"));

// 07

let arr = [
  1,
  2,
  3,
  4,
  5,
  20,
  19,
  18,
  17,
  16,
  15,
  14,
  10,
  13,
  12,
  11,
  6,
  7,
  8,
  9,
];
arr.sort((a, b) => a - b);

alert(arr);

// 08

let salaries = {
  salary1: 3000,
  salary2: 1500,
  salary3: 900,
  salary4: 1500,
  salary5: 900,
};

function sumSalaries(salaries) {
  return Object.values(salaries).reduce(function (sum, current) {
    return sum + current;
  }, 0);
}

sumSalaries(salaries);
