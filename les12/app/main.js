//Регулярное выражение

//Литеральный
const reg1 = /4/g;
//Объектный
const reg2 = new RegExp('4', 'g');


function countW(w = ' ', str = ''){
    const regW = new RegExp(w, 'g');

    return str.match(regW).length;
}

console.log(countW('сыр', 'Ворона и сыр. Как-то Бог послал вороне кусочек сыра.'));

//Вызывать метод самого реглуярного выражения
// RegExp.test(String) -> boolean   - //!VALIDATION

//Вызывать метод строк, используя регулярное выражение
// String.match(RegExp) -> объект ИЛИ массив   //!SEARCH
// String.replace(RegExp, String) -> строку    //!REPLACE 
// String.split(RegExp) -> массив              //!FORMATE

//Спецсимволы

//ВСЕ ЧТО УГОДНО
const regAll = /./;

//Цифры
const regNums = /[0123456789]/;
const regNums2 = /[0-9]/;
const regNums3 = /\d/g;
const regNONums = /\D/g; //НЕ цифры

console.log('Днепропетровск, 49000'.match(regNums3));
console.log('Днепропетровск, 49000'.match(regNONums));

//буквы  //цифробуквенный символ
const regLetters = /[abcdefgh]/g;
const regLetters2 = /[a-z]/g;
const regLetters3 = /\w/g; //! -->  /[a-zA-Z0-9]/ 
const regLetters4 = /[а-я]/gi;
const regNOLetters = /\W/g;//НЕ буквы


console.log('Dnipro, 49000'.match(regLetters3));
console.log('Dnipro, 49000'.match(regNOLetters));
console.log('Днепропетровск, 49000'.match(regLetters4));

//ФЛАГИ 
//g - Global - глобальный поиск (match + replace)
//i - case Insensitive - нечуствительность к регистру (match + replace + test + split)
//m - Multiline - многострочность

//Пробельный символ - пробел, табуляция, вертикальная табуляция, сдвиг первой строки
const regSpace = /\s/; //space
const regNOSpace = /\S/;//Все, что не пробел
const regTab = /\t/; //Табуляция ESCAPE-последовательность

//Перенос строк
const regNewLine = /\n/; // ESCAPE-последовательность - перенос строки
const regNewLine2 = /\r/; // ESCAPE-последовательность - возврат каретки

//Квантификаторы
//четкий
const regYear = /\d{4}/;
console.log('hello, 18.09.20'.match(regYear));
console.log('hello, 18.09.2020'.match(regYear));
//диапазон
const regDates = /\d{2,4}/g;
console.log('hello, 18.09.2020'.match(regDates));
const regDates2 = /\d{0,4}/g;
//максимальный поиск
const regDates3 = /\d{,4}/g; //0,1,2,3,4
console.log('hello, 18.09.2020'.match(regDates2));
//минимальный поиск
const regDates3_1 = /\d{2,}/g; //2,3,4,...

//неуверенный -- будет или не будет - неизвестно
const regDates4 = /\d?/g; // {0,1}
//хотя-бы один
const regDates5 = /\d+/g; // {1,}
//who cares
const regDates6 = /\d*/g; // {0,}

//Якоря
//^ - начало строки - циркумфлекс
const regIsUpper = /^[A-ZА-Я][\w\s]*/;
//$ - конец строки
const regIsDotAtEnd = /\.$/;

console.log('hello, 18.09.2020', regIsDotAtEnd.test('hello, 18.09.2020'));
console.log('hello, 18.09.2020.', regIsDotAtEnd.test('hello, 18.09.2020.'));

const regFirstWords = /^[^АОУЫЭИЕЯЮЁ]/;