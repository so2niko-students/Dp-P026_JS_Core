//! Условие

if(true){
    //Действия если ДА
    //любое число, кроме 0 и NaN
    //Любая строка, кроме ''(пустой)
    // {}
    // []
    // ссылка на функцию
    console.log('ДА--');
}else{
    //Действия если НЕТ
    //null
    //undefined
    //0
    //NaN
    //''
    //несуществующее свойство объекта
    //возврат из функции без return(undefined)
    console.log('НЕТ');
}

if(false) console.log(2); else console.log(3);
true ? console.log('true') : console.log('false');


// if(true){
//     a = 3;
// }else{
//     a = 100;
// }
// let a;
// true ? a = 3 : a = 100;

// let b = true ? 3 : 100;

const eleven = 11;
switch(eleven){
    case 10 : {
        console.log('это 10');
        break;
    }
    case '11' : {
        console.log('это **********"11"');
        break;
    }
    case 11 : {
        console.log('это 11');
        break;
    }
    case 12 : {
        console.log('это 12');
        break;
    }
}

const step = 128;// 0 -- 1024
switch(step){
    case 0 : console.log(0);
    case 2 : console.log(2);
    case 4 : console.log(4);
    case 8 : console.log(8);
    case 16 : console.log(16);
    case 32 : console.log(32);
    case 64 : console.log(64);
    case 128 : console.log(128);
    case 256 : console.log(256);
    case 512 : console.log(512);
    case 1024 : {
        console.log('ДА');
        break;
    }
    default : {
        console.log('НЕТ');
    }
}

const years = 1943;
//12-17
//39-45
// if(years >= 1912 && years <= 1917){
//     console.log('WWI');
// }

// if(years >= 1939 && years <= 1945){
//     console.log('WWII');
// }

switch(true){
    case years >= 1912 && years <= 1917 : {
        console.log('WWI');
        break;
    }
    case years >= 1939 && years <= 1945 : {
        console.log('WWII');
        break;
    }
    default : {
        console.log('just a year');
    }
}