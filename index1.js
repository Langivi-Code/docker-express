function taskNumber () {
    let count=1;
    return function () {
    console.log(`*************************** Task ${count} ******************************`)
    count++;
    }
}
let task=taskNumber();

task();
let a='Привет'

function hi (b) {
return console.log(a+' '+b)
}

hi('Ivan')


task()

console.log(`${welcome}`)
function welcome (p) {
    if (p<18) {
        alert('Привіт!')
    } else {
        alert ("Добрий день!")
    }  
}

console.log(`${hiGoodDay}`)
function hiGoodDay () {
let age = prompt ("Скільки Вам років?", 18);
welcome(age);
}

task();
console.log('ні не спрацює тому що одиницю треба передати в змінну.')

console.log(`${nn}`)
function nn () {
let num=1;
num.toString();
}


task()

console.log(`${toFix}`)
let num4=3.549533372;

function toFix (n4,n) {
    n4 = n4.toString().split('')
    let res='';
    for (let i=0;i<=n+n4.indexOf('.');i++) {
        if (n4[i]==undefined) {
            n4[i]='0';
        }
        res+=n4[i]; 
    }
return res;
}


console.log(num4);

console.log(toFix(num4,5))

task()
console.log(`${pow}`)
function pow(numb,degree) {
    return numb**degree;
    }


task()

console.log(`${findEntranceLetter}`)
let str5='Збігів немає І ТУТ';
function findEntranceLetter (string,lettter) {
let count=0;
for (item of string ) {
if (item==lettter||item==lettter.toUpperCase()) {
    count++
}
}
return count
}
console.log(`${str5}, результат якщо не враховувати регістр дорівнює ${findEntranceLetter(str5,'і')}`)

task()
let arrayForSort= [1,4,6,8,9,10,17,13,2,3,5,7,11,12,14,15,18,16,19,20];

console.log(`Є масив ${arrayForSort}`)
 
arrayForSort.sort((a,b)=>a-b);

console.log(`Масив після сортування ${arrayForSort}`)

console.log(`Функція сортуюча масив: arrayForSort.sort((a,b)=>a-b)`)


 
task()

let salaries = {
    "Ivanov":340,
    "Petrov":400,
    "Sidorov":900,
    "Poppov": 1750,
    "fedorov":1200 
};

function sumSalaries(sal) {
    let sum=0;
    for (let key in sal) {
        sum+=sal[key]
    }
    return sum;
}
obj8()
console.log(`${sumSalaries}`)
function obj8 () {
    for (let key in salaries) {
        console.log(`${key} : ${salaries[key]} `)
    }
}

console.log(`результат : ${sumSalaries(salaries)}`)
