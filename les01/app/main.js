// console.log(threeNum);
// console.log(fourN);
// show2();
var threeNum = 3; //variable declaration
let fourN = 4;
const fiveN = {
    num : 5
};

fiveN.num = 44;
fiveN.isConst = true;
fiveN.show = show2;

// fiveN = 33;
//Примитивные типы данных:
//Number, String, Boolean, null, undefined, bigInt, Symbol
//Сложный тип данных:
//Object

for(let i = 0; i < 10; i++){
    if(Math.random() > .5){
        console.count('I am in a loop');
    }else{
        console.count('Random');
    }
    
}
//циклы, условия, множественные условия, 

//блочная область видимости
//block scope

console.log(fiveN);
// console.log('i: ', i);


function show2(){//function declaration
    console.log('show: 2');
}

// show2();

console.log(console);

const users = [
    {
        name : 'Nick',
        status : 'mentor'
    },
    {
        name : 'Anton',
        status : 'student'
    },
    {
        name : 'Alex',
        status : 'student'
    },
];

console.table(users);

console.log('%cHello', 'color: red; background-color: black; padding: 30px;');

//Всплывающие окна
//alert - показывает информацию
//prompt - просит ввести текст //return string
//confirm - просит нажать да/нет //return boolean
// alert('Uhahaha');
// const info = +prompt('Сколько вы добавите в депозит в этом месяце?');
// const oldDepo = 1000;
// const newDepo = oldDepo + info;//неявное преобразование типов
// console.log('New deposit: ', newDepo);


/*
число + число   --- суммирование
строка + строка --- конкатенация (сложение строк)
строка + число  --  конкатенация
число + строка  --  конкатенация

*/ 


const isHuman = confirm('Are you a human?');

console.log(isHuman);

// navigator.geolocation();
navigator.geolocation.getCurrentPosition((pos) => console.log(pos));