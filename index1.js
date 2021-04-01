function blockCount () {
    let count=1;
    return function() {console.log(`*****************************--Block ${count}--*********************************`)
count++
}
}
let block=blockCount();


let qest1={
    1:'змінна-це сховище для данних',
    2:'let,var,const',
    3:'область видимості',
    4:'змінність const-незмінна',
    5:'приведе до помилки',
    6:'не можна цифри,зарезервовані назви можна $ та _',
    7:'yes',
    8:'так дозволені, але не рекомендовані',
    9:'let,const,var,function,for,while,object,else,if,return,class',
    10:'use strict = let foo=7; else foo=7',
    11:'великими буквами оголошуються якісь складні значення, наприклад кольори, щоб потім легше шукати і використовути',
    12:'зрозумілі назви, CamelCase'
};

let qest2={
1:'string,number,object,null,undefined,bigint,boolean,symbol',
2:'ніякої',
3:'Зворотні лапки-це спрощена форма конкатенації рядків та змінних',
4:'null-нічого,пусто. undefined-невизначено',
5:'typeOf foo, typeof (foo)-визначення типу данних',
6:'символ n',
7:'object - історична помилка мови',
8:'object',
9:'тому що змінна може бути будь яким типом данних і змінена в любий час',
10:'typeof String, typeof Number, typeof Boolean-function тому що з великоі літери, typeof null-object, typeof undefined-undefined, typeof parseInt-function, typeof 10n-bigint, typeof 10-number, typeof 10.5-number, typeof ‘Helen’-string, typeof true-boolean, typeof prompt-function ',
11:'цілочисельні значення, так і числа з плаваючою крапкою.',
12:'NaN'
};

let qest3={
    1:'+,-,=,*,/,**,%',
    2:'+5+1= 5-лівий операнд,1-правий,+ -бінарний оператор, + унарний оператор застосований до 5',
    3:'1-присвоюваня, 2-бін плюс та бін мінус, 3-множення та ділення, 4-ступінь, 5 унарний+ та унарний -',
    4:'унарний +, Parseint,Number',
    5:'++,--',
    6:'префіксна, постфіксна',
    7:'бінарний + склеює строки, з числами та строками також',
    8:'18620, 25913',
    9:'error',
    10:'my name is Helen',
    11:'my name is Helen',
    12:'my name is Helen',
    13:'у визначенні змінної',
    14:'-589',
    15:"1,0,0,NaN",
    16:'0,1,0,0,4',
    17:'90'
};

let qest4={
    1:'>,<,=,!=,==,====,!==',
    2:'boolean',
    3:'посимвольно',
    4:'вони приводяться к числам',
    5:'Unicode',
    6:'a',
    7:'null=0,undefined=NaN',
    8:'true,false',
    9:'0=false',
    10:'true тому що це не пуста строка',
    11:'true тому що приводяться в числа'
}

let qest5={
    
}
