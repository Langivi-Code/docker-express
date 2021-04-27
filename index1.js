
//task1
 console.log( 'document.querySelector(#age-table)')
 console.log('document.querySelectorAll(#age-table label)')//3 label
 console.log('document.querySelector(td)') //first td
 console.log('document.querySelector(form[name=search])')//form search
 console.log('document.querySelector(form[name=search] input)')//inp
 console.log('document.querySelectorAll(form[name=search] input)[length-1]')//search

 //task2

let t2= document.querySelector('.coor');

let coor= t2.getBoundingClientRect();
let vnverh=`внешний верхний = x:${coor.x} y:${coor.y}`;
let vnniz=`внешний нижний = x:${coor.x+coor.width} y:${coor.y+coor.height}`;
let vnutverh=`внутренний верхний = x:${coor.x+t2.clientLeft} y:${coor.y+t2.clientTop}`;
let vnutniz=`внутренний нижний = x:${coor.x+coor.width-t2.clientLeft} y:${coor.y+coor.height-t2.clientTop}`
console.log(vnverh);
console.log(vnniz);
console.log(vnutverh)
console.log (vnutniz)

t2.onmousemove=(e)=>{
document.querySelector('.d2').textContent=e.clientX+' '+e.clientY;
}

//task3

let d2=document.querySelector('.d2');
d2.style.cssText="border:1px solid black";

function positionFixed (anchor,position,elem) {
    let cord=anchor.getBoundingClientRect();
    elem.style.position='fixed';
    if (position=='top') {
        elem.style.top=cord.y-anchor.clientTop+'px'
        elem.style.left=cord.x+'px';
    } else if (position=='bottom') {
        elem.style.top=coor.bottom+'px';
        elem.style.left=cord.x+'px';
    } else if (position=="right") {
        elem.style.top=coor.bottom/2+(anchor.clientTop/2)+'px';
        elem.style.left=coor.right+'px';
    }

}

//task4 ans task5

positionAbsolute (t2,"bottom-in",d2);

let body= document.querySelector('body');
body.style.height='2000px';

function positionAbsolute (anchor,position,elem) {
    let cord=anchor.getBoundingClientRect();
    elem.style.position='absolute';
    if (position=='top'||position=="top-out") {
        elem.style.top=cord.y-anchor.clientTop+'px'
        elem.style.left=cord.x+'px';
    } else if (position=='bottom'||position=="bottom-out") {
        elem.style.top=coor.bottom+'px';
        elem.style.left=cord.x+'px';
    } else if (position=="right"||position=="right-out") {
        elem.style.top=coor.bottom/2+(anchor.clientTop/2)+'px';
        elem.style.left=coor.right+'px';
    } else if (position=="top-in") {
        elem.style.top=cord.y+anchor.clientTop+'px';
        elem.style.left=cord.x+anchor.clientLeft+'px';
    } else if (position=="bottom-in") {
        elem.style.top=coor.bottom-anchor.clientTop*2+'px';
        elem.style.left=cord.x+anchor.clientLeft+'px';
    } else if (position=="right-in") {
        elem.style.top=coor.bottom-anchor.clientTop*2+'px';
        elem.style.left=cord.width-elem.clientWidth+'px';
    }

}

//task6

let inp=document.querySelector('.inp');
let win=document.querySelector('.window');
let modal=document.querySelector('.ramka');

function ok () {
    win.classList.add('hide');
    modal.classList.add('hide');
    alert (`вы ввели:${inp.value}`);
    inp.value="";
    body.classList.remove('owerflow')
}

let tabex=document.querySelectorAll('.tab');
modal.onkeydown=(e)=>{
    if (e.code=="Escape") {
        cnx();
    } else if (e.code=="Enter") {
        ok();
    } 
    
}

function cnx () {
    win.classList.add('hide');
    modal.classList.add('hide');
    alert (`вы ввели:${null}`);
    inp.value="";
    body.classList.remove('owerflow')
 
}

document.querySelector('.modal').onclick=()=>{
    win.classList.remove('hide');
    modal.classList.remove('hide');
    body.classList.add('owerflow')
    inp.focus();
}

document.querySelector('.ok').onclick=ok;
document.querySelector('.cancel').onclick=cnx;
//task 7

let firstinvest=document.querySelector('.first');
let srok=document.querySelector('#srok');
let percent=document.querySelector('.perc');
let bilo=document.querySelector('#bilo');
let stalo=document.querySelector('#stalo');
let green=document.querySelector('.green');
let greenHeight=green.offsetHeight;


firstinvest.oninput=calc;
srok.onchange=calc;
percent.oninput=calc;

function calc () {
    stalo.value=(Number(firstinvest.value)*Number(percent.value)/100)*Number(srok.value)+Number(firstinvest.value);
    bilo.textContent=firstinvest.value;
    bilo.value=firstinvest.value;
    stalo.textContent=stalo.value;
    green.style.height=(+stalo.value/+bilo.value)*greenHeight+'px';  
    
}
//task8

let div7=document.querySelector('.t-7');
let txtarea=document.querySelector('.t-71');
let parent7=document.querySelector('.p7');

function changeField () {
  txtarea.classList.remove('hide');
  txtarea.focus();
  txtarea.value=div7.textContent;
}



function blur () {
    txtarea.classList.add('hide');
    div7.innerHTML=`<pre>${txtarea.value}</pre>`;
    div7.style.color="red";
}

div7.onclick=changeField;
txtarea.onblur=blur;
txtarea.onkeydown=(e)=>{
    if (e.code=="Enter") {
        blur();
    }
}

// task 9не сделал не пойму каким образом мне сделать так чтобы онклик когда попадает на редактируемую ячейку не реагировал больше не на что пока я не нажму ок или cancel

let table=document.querySelector('.redaxtable');
let cells=table.getElementsByTagName('td');


let txtArea=document.createElement('textarea');
let butOk=document.createElement('button');
let butCnx=document.createElement('button');

 function changeCell () {
txtArea.style.width=this.offsetWidth+'px';
txtArea.style.height=this.offsetHeight+'px';
txtArea.classList.add('ttt');
txtArea.value=this.closest('td').innerHTML;
this.appendChild(txtArea);
txtArea.focus();
txtArea.insertAdjacentElement("afterend",butOk);
txtArea.insertAdjacentElement("afterend",butCnx);
 }

 butOk.classList.add('but');
 butCnx.classList.add('but1');
 butOk.textContent='OK'
 butCnx.textContent='CANCEL';


    


for (cell of cells) {
    cell.onclick=changeCell;
    }
    
    



    
    

    //task 10

    let moveS=document.querySelector('.move');
 
   moveS.onclick=()=>{
moveS.classList.add('moveactive');
moveS.textContent="active";
moveS.setAttribute('tabindex',0);
moveS.focus();
   }

   moveS.onblur=()=>{
    moveS.classList.remove('moveactive');
    moveS.textContent="";
   }

   let leftDiv=moveS.offsetWidth/2;
   let upDiv=moveS.offsetHeight/2;

    document.addEventListener('keydown',function(e) {
        if (moveS.classList.contains('moveactive')) {
        if (e.code=="ArrowRight") {
            moveS.style.left=leftDiv+'px';
            leftDiv+=moveS.offsetWidth/2;
        } else if (e.code=="ArrowUp") {
            moveS.style.bottom=upDiv+'px';
            upDiv+=moveS.offsetHeight/2;
        } else if (e.code=="ArrowDown") {
            upDiv-=moveS.offsetHeight/2;
            moveS.style.bottom=upDiv-moveS.offsetHeight+'px';
        } else if (e.code=="ArrowLeft") {
            leftDiv-=moveS.offsetWidth/2;
            moveS.style.left=leftDiv-moveS.offsetWidth+'px';
        }
        }
    })






























