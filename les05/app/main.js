//object { name : 'dd', age : '11'}
//array ['323', '222', 34, 33]

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];

//!Фильтрация
const filter1 = []; // новый, отфильтрованный массив
for(let i = 0; i < arr.length; i++){//проход по массиву
    if(arr[i] % 2 == 0){//условие/тело фильтра
        filter1.push(arr[i]);
    }
}

const filter2 = arr.filter(function(el, i, arrLink){
    //тело фильтра
    return el % 2 == 0;//true/false
});

const filter3 = arr.filter(el => el % 2 == 0);

//!Обработка массива
const obr1 = [];//новый обработанный массив
for(let i = 0; i < arr.length; i++){//проход по старому массиву
    obr1[i] = arr[i] * .75;
}

// console.log(arr, obr1);

const obr2 = arr.map(function(el, i, arr){
    return el * .75;
});

const obr3 = arr.map(el => el * .75);

//!Получение 1-го результата конденсирования массива

let sum = 0;//результат прохода по массиву
for(let i = 0; i < arr.length; i++){//проход по старому массиву
    sum += arr[i];
}

const sum1 = arr.reduce(function(acc, el, i, arr){
    return acc + el;
});

const sum2 = arr.reduce((acc, el) => acc + el);
const ost = arr.reduce((acc, el) => acc - el, 100);
console.log('ost', ost)

const cart = [
    {
        name : 'keyboard',
        price : 400
    },
    {
        name : 'mouse',
        price : 350
    },
    {
        name : 'headphones',
        price : 600
    }
];

const sum3 = cart.reduce((acc, prod) => acc + prod.price, '');

console.log(sum3);

//1 + 2 + 3 + 4 + 5 + 6 + 7 + 8  