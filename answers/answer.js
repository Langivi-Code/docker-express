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
    1:'break',
    2:'continue',
    3:'switch',
    4:'throw',
    5:'return вернеться undefined',
    6:'do while',
    7:'for in -enumerable for obj, for of -iterable for arrays and oth',
    8:'while'
}

let qest6= {
    1:'function name () {body}',
    2:'локальні не виндни зовні',
    3:'до обох',
    4:'return undefined',
    5:'в дужках',
    6:'function foo (name,age=18)',
    7:'параметр це те що у визначенні, аргументи - це те що передали'
}
 
let qest7= {
1:'з ім ям та без нього',
2:'так можна це коллбек',
3:'function expression let foo=function () {body}',
4:'declaration',
5:'expression',
6:'declaration',
7:'expression',
8:'no'
}

let qest8={
    1:'синтаксис',
    2:'немає змінної arg',
    3:'()=>',
    4:'const splitName= function (name) {return name.split()}',
    5:'no'
}

let qest9={
1:'ні це не об єкт, але він становиться об єктом',
2:'якщо вони упаковані',
3:'тому що примитив упаковується в об єкт',
4:'так наприклад let num=new Number(333)',
5:'num.valueof()',
6:'(100).toString()',
8:'в прототипах конструктора'
}

let qest10={
    1:'1e5',
    2:'floor,cell,round',
    3:'toFixed,toString,valueof, and others',
    4:'у розрахунках з плаваючою комою',
    5:'0,1',
    6:'ні,Object.is(NaN,NaN)',
    7:'так рівні, але при використанні Object.is =false',
    8:'+,ParseInt,parseFloat,Number()'
}

let qest11={
    1:'/n,/r',
    2:'str.length',
    3:'srt[0],str.length-1',
    4:'да можна через переприсвоєння напр str=R+str[1]',
    5:'toUpperCase,toLowerCase',
    6:'indexOf,includes,strtsWith,endsWith',
    7:'includes,strtsWith,endsWith',
    8:'рядки перетворюються в числа які можна перевірити codePointAt(let)',
    9:'codePointAt(let),fromCodePoint(55)'
}

let qest12={
    1:'new Array,[],new Array(length)',
    2:'Массив',
    3:'копіювання за посиланням це здатність змінюватися оригінальному масиву, навідь якщо зміни відбуваються за посиланням',
    4:'forEach-undefined,map-інший масив результатів виконання,concat-склеєний масив,find-елемент,findIndex-індекс,filter-масив з елементами,slice-інший масив,sort-той же масив змінений',
    5:'Object.keys(obj),values,entries,is'
}

const arr=[qest1,qest2,qest3,qest4,qest5,qest6,qest7,qest8,qest9,qest10,qest11,qest12];

module.exports=arr;

