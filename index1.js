
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
console.log('getUserData.call(userData),getUserData.apply(userData)');
//task 7
function devide (chisl,znamen) {
    if (znamen==0) {
        throw new Error ("Помилка, спроба поділити на 0")
    }
    return chisl/znamen
}
// task 8
console.log('мені здається що обидва додатки очистять робочий простір')
// task 9
let arr9=['lion','cat','dog','croco','bear','tiger','snake'];


function inIndex (index) {
    try {
    if (index>=arr9.length||index<0) {
        throw new TypeError()
    }
   for (let i=0;i<arr9.length;i++) {
       if (index==i) {
         console.log(`показую ${arr9[i]}`)
       }

   }

}
catch(e) {
    console.error(`${e} введіть індекс від 0 до ${arr9.length}`)
}
}

console.log(inIndex(3));
console.log(inIndex(9));
//task10

let timer= document.querySelector('.timer')
let i=0;
let timerID;


function time () {
timerID=  setInterval(() => {
        document.querySelector('#start').setAttribute('disabled','disabled');
        document.querySelector('#stop').removeAttribute('disabled')
        i++
        timer.textContent=i;
    }, 200);
}

function stop () {
    clearInterval(timerID)
    document.querySelector('#start').removeAttribute('disabled')
    document.querySelector('#stop').setAttribute('disabled','disabled');
}

document.querySelector('#start').onclick=time;
document.querySelector('#stop').onclick=stop;
document.querySelector('#res').onclick=()=>{
    i=0
    timer.textContent=i;
}

//task 11

let div11=document.querySelector('.d-11');
function d () {
let date=new Date;
setTimeout(() => {
let hours= date.getHours();
let min=date.getMinutes();
let sec=date.getSeconds();
if (sec<10) {
    sec='0'+sec;
}
if (min<10) {
    min='0'+min;
}
if (hours<10) {
    hours='0'+hours
}
div11.textContent=(`${hours}:${min}:${sec}`)
}, 1000);
setTimeout(d,1000)
}
document.querySelector('.time').onclick=d;
//task 12
let timer1= document.querySelector('.timer1')
let k=100;
let timerID1;
function time1 () {
    timerID1=  setInterval(() => {
        if (k==1) {
            clearInterval(timerID1)
        }
            document.querySelector('#start1').setAttribute('disabled','disabled');
            document.querySelector('#stop1').removeAttribute('disabled')
            k--
            timer1.textContent=k;
        }, 100);
    }
    
    function stop1 () {
        clearInterval(timerID1)
        document.querySelector('#start1').removeAttribute('disabled')
        document.querySelector('#stop1').setAttribute('disabled','disabled');
        if (k==0) {
        k=100;
        timer1.textContent=k;
        }
    }
    
    document.querySelector('#start1').onclick=time1;
    document.querySelector('#stop1').onclick=stop1;

//task 13

function* sequence (start=0,step=1) {
  for(let i=start;i<Infinity;i+=step)
  yield i;

}

let gen13=sequence();
console.log(gen13.next())

//task14

// function* gen14 (...arguments) {
//     for(let i=0;i<arguments.length;i++)
//     yield arguments[i];
//     }
  

//   const gen=gen14(3,4,5,6);
  
// function a () {
//     if (this.next().done) {
//         return
//     } else {
//        return this.next().value*10
//     }
// }


// function fmap (gener,afunc) {
//    return afunc(gener)
//     }

//     let aaa=fmap(gen,a);






//task15

class User {
    constructor() {
        this.firstname=undefined
        this.surname=undefined
    }
    getfullName=function () {
       return this.firstname+' '+this.surname
    }
    setFirstName (val) {
        this.firstname=val;
    }
    setLastName (val) {
        this.surname=val
    }
}

let usr=new User()

























