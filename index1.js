
//task1

let user= {
name:'Boris',
lastname:'Ivanov',
age:35
}

function fullName () {
    return this.name+' '+this.lastname;
}

function detail () {
    return (`${this.lastname} ${this.name} возраст ${this.age} лет.`)
}


const boundPrintDetails=detail.bind(user);
const boundPrintFullName=fullName.bind(user);
user.printFullName=boundPrintFullName;
user.printDetails=boundPrintDetails;

console.log(user.printFullName());
console.log(user.printDetails());

//task2

let timerId;
let printNumbers=function (from,to) {
    if (typeof from !='number' || typeof to !='number') {
        throw new Error ('Ошибка!!!')
    }
   timerId=setInterval(() => {
       console.log(from)
       from++;
       if (from>to) {
        clearInterval(timerId)
    }
   }, 1000);
};


let recurSetTime=function(from,to) {
 setTimeout(() => {
    console.log(from)
    from++
    if (from<=to) {
        setTimeout(recurSetTime(from,to),1000);
    }   
}, 1000);

}

// recurSetTime(3,8);*************************************
//task3

console.log("Перший console показує Aurelio De rosa тому що контекст на своєму місці, а другий test = Undefined тому що this не визначено ")
//task4  
console.log(" console.log(test.bind(obj.prop)())")
//task5
console.log( 'sayName.call(dog)');
//task6
console.log('getUserData.call(userData),getUserData.apply(userData)')

















