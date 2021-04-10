
let inp1=document.querySelector('.i-1');
//task1 and task2 in one func 
function f1 () {
    inp1.value='???????';
    alert(`${inp1.value}`)
}

document.querySelector('.b-1').onclick=f1;

let inp2= document.querySelector('.i-2')

document.querySelector('.b-2').onclick=()=>{
    alert(`${inp2.value**2}`)
}

document.querySelector('.b-4').onclick=()=>{
    let val= inp1.value
    inp1.value=inp2.value
    inp2.value=val
}

document.querySelector('.i-6').onclick=()=>{
    document.querySelector('.i-6').value='текст змінився'
}

let inp7=document.querySelector('.i-7');
document.querySelector('.b-71').onclick=()=>{
    inp7.setAttribute('disabled','disabled')
}
document.querySelector('.b-72').onclick=()=>{
    inp7.removeAttribute('disabled')
}

let res=document.querySelector('.out-8')
let elem8=document.querySelector('.d-8')
document.querySelector('.b-81').onclick=()=>{
    elem8.classList.add('www')
    res.textContent='класс www добавлен'
}
document.querySelector('.b-82').onclick=()=>{
    elem8.classList.remove('www')
    res.textContent='класс удален'
}

document.querySelector('.b-83').onclick=()=>{
    if (elem8.classList.contains('www')) {
   res.textContent='класс www є'
    } else {
        res.textContent='классу www нема'
    }
}

document.querySelector('.b-84').onclick=()=>{
    elem8.classList.toggle('www')
    if (elem8.classList.contains('www')) {
        res.textContent='класс www є'
         } else {
             res.textContent='классу www нема'
         }   
}

document.querySelector('.b-85').onclick=()=>{
    res.textContent=elem8.classList.length
}

document.querySelector('.b-86').onclick=()=>{
    for (let elem of elem8.classList) {
        alert(elem);
    }

}

let elem9=document.querySelector('.d-9');
elem9.style.cssText='width:30px;height:30px;border:solid 1px red';

document.querySelector('.p-10').onclick=function () {
    document.querySelector('.out-10').textContent=this.tagName
}

let arr11=[4,5,6,7,8];
let u11= document.querySelector('.ulist-11')
let o11=document.querySelector('.olist-11')

let t11=document.createElement('li');
t11.innerHTML='пункт';
o11.appendChild(t11);

arr11.forEach(el => {
t11=document.createElement('li');
t11.innerHTML=el;
u11.appendChild(t11)
    
});

let u12=document.querySelector('.ulist-12')

arr11.forEach(el => {
    t11=document.createElement('li');
    t11.classList.add('ch-11')
    t11.innerHTML=el;
    u12.appendChild(t11);   
    });

    let ch11=document.querySelectorAll('.ch-11')


for (let i=0;i<ch11.length;i++) {
ch11[i].addEventListener('click',function () {
    this.textContent='Свій Техт!!!!!'
})
}
document.querySelector('.b-13').onclick=()=>{
    let go=document.querySelector('.go')
    let hi=document.createElement('li');
    hi.innerHTML='Привет!!!'
    u12.insertBefore(hi,go)
}

let d14=document.querySelector('.d-14')

d14.insertAdjacentHTML("beforebegin","<span>Привіт</span>")
d14.insertAdjacentHTML("beforeend","<span> мене</span>")
d14.insertAdjacentHTML("afterbegin","<span> звати </span>")
d14.insertAdjacentHTML("afterend","<span> Тьома</span>") 

let d15 = document.querySelector('.d-15')
d15.firstElementChild.style='color:red';
d15.lastElementChild.style='color:red';
for (let i=0;i<d15.children.length;i++) {
d15.children[i].insertAdjacentText("beforeend"," Привіт")
}

let d16=document.querySelector('.d-16')

d16.previousElementSibling.insertAdjacentText("beforeend"," привіт я РОМА")
d16.nextElementSibling.insertAdjacentText("beforeend"," привіт я Аня") 
d16.nextElementSibling.nextElementSibling.insertAdjacentText("beforeend"," привіт я Костян")   


let d17= document.querySelector('.d-17')
d17.parentElement.style.color='red'///????????????????????
d17.parentElement.parentNode.style.color="green"
d17.style.color='black'//!!!!!!!!!!!!!!!!!!















