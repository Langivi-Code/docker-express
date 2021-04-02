let arr =require ('./answers/answer.js');

function blockCount () {
    let count=1;
    return function() {console.log(`*****************************--Block ${count}--*********************************`)
count++
}
}
let block=blockCount();

for (let obj of arr) {
    block()
    for (let item in obj) {
        console.log(`${item}  :  ${obj[item]}`)
    }
};

