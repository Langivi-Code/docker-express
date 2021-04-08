
//task1
class Car {
    constructor() {
    this.isStarted = false;
    }
    start () {
            console.log('the car is started')
        console.log('woof woof!!')
       this.isStarted=true;
    }
    drive () {
    if (this.isStarted) {
    console.log('I drive!!!!!!')
    } else {
    console.log('you must started auto')
    }
    }
    }
    
    class Ford extends Car {
        constructor(brend) {
            super();
            this.brend=brend;
        }
    }
    
    class Model extends Ford {
        constructor(brend,model,type) {
            super(brend)
            this.model=model;
            this.type=type;
        }
    
    }
    
    let fordFiesta=new Model('Ford','Fiesta','sedan');
    console.log(fordFiesta)
    fordFiesta.drive();
    
    //task2
    
    class Student {
        constructor(nameOf,group,scores) {
            this.nameOf=nameOf;
            this.group=group;
            this.scores=scores;
        }
        showFIO () {
          return  this.nameOf+' '+this.group;
        }
        middleOfscores () {
            let res=0;
            for (let item of this.scores) {
    res+=item;
            }
            return res/this.scores.length
        }
        addScore (score) {
            this.scores.push(score)
            
            }
                
        }
    
    
    let student=new Student('Vasya','3-N',[3,4,6,5,4,4,3,5]);
    
    
    console.log(student);
    console.log(student.middleOfscores())
    //task3
    class Pupil {
        constructor(nameOf,group,scores) {
            this.nameOf=nameOf;
            this.group=group;
            this.scores=scores;
        }
    
    }
    
    let pupilGosha=new Pupil('gosha','3-A',[3,4,5,6,6,4,6,7]);
    
    //task4
    student.showFIO.call(pupilGosha);
    //task5
    let boundPupilGosha= student.middleOfscores.bind(pupilGosha);
    console.log(boundPupilGosha());
    //task6
    student.addScore.apply(pupilGosha,[4,5])
    //task7
    
    //task 8
    
    function numOnme (num) {
        try {
        if (typeof num !== 'number') {
            throw 'error'
        }
        }
        catch {
            console.log('Помилка!!!')
            return false
        }
        return true
        }
    
        //task 9
    
        let uchni={
            'sasha':1,
            'katya':2,
            'lena':4,
            'illya':21,
            'mila':11,
            [Symbol.iterator]:function* () {
                for (let key in this) {
                    yield key
                }
            }
            }  
        
    
    for (let key of uchni) {
        console.log(key)
    }
    
    //task10
    const char= function () {
        let letters=[];
        for (let i=65;i<=90;i++) {
            letters.push(String.fromCharCode(i))
            }
            for (k=97;k<=122;k++) {
                letters.push(String.fromCharCode(k))
            }
            return letters
        }();
    
    let rendString= function* () {
           let res='';
           let ord=0;
           for (let i=0;i<5;i++) {
       res+=char[Math.floor(Math.random()*char.length)];
           }
           ord=Math.floor(Math.random()*10)+1
           yield {name:res,order:ord}  
     }
    
    for (let i=0;i<5;i++) {
     for (let obj of rendString()) {
         console.log(obj)
     }
     }