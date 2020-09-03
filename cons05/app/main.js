//!Просто проход по массиву и вызов какой-то функции
const arr = [1,2,-3,4,5];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

arr.forEach(function(el, i, arr){
    console.log(el);
});

arr.forEach(el => console.log(el));

//!Проверка элементов массива
let isPositive = true;

for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        isPositive = true;
    }else{
        isPositive = false;
        break;
    }
}

console.log('is positive', isPositive);

const isPositive2 = arr.every(el => el > 0);
console.log('is positive2', isPositive2);


const isPositive3 = arr.some(el => el > 0);
console.log('is positive3', isPositive3);
