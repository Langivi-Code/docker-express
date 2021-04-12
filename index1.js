
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


document.querySelector('.b-18').onclick=()=>{
    let child=document.querySelector('.d-181')
    document.querySelector('.d-18').removeChild(child)
}


 document.querySelector('.b-181').onclick=()=>{
    let lastCh=document.querySelector('.o-18').lastElementChild;
    document.querySelector('.o-18').removeChild(lastCh)
}
 
let chi=document.querySelector('.o-18').children;


for (let el of chi) {
    let offs=0;
    el.onclick=()=>{
        offs+=20;
        el.style.marginLeft=offs+'px'
    }
}

document.querySelector('.b-19').onclick=()=>{
    let clone=document.querySelector('.i-19');
   clone.appendChild(clone.cloneNode(true));
}

let arr20=['andrey','sergey',4,33,'dynamo'];

let ul20= document.createElement("ul");

for(let el of arr20) {
    ul20.innerHTML+=`<li>${el}</li>`
}

document.querySelector('.d-20').insertAdjacentElement("afterbegin",ul20);

document.querySelector('.b-21').onclick=()=>{
  let inp21= document.querySelector('.i-21')
  let inpClone= inp21.cloneNode();
  inp21.insertAdjacentElement("afterend",inpClone)

}

let inp22=document.querySelector('.i-22');

inp22.onblur=()=>{
   let res=inp22.value.split('')
   inp22.value=res[0]
   for (let i=res.length-1;i>=1;i--) {
       let inp222= document.createElement("input")
       inp222.value=res[i]
       inp22.insertAdjacentElement("afterend",inp222)
   }
  
}

let b23=document.querySelector('.b-23')
let d23=document.querySelector('.d-23');
b23.onclick=function(){
    d23.insertAdjacentElement("afterend",b23)
    d23.remove()
}


 















