// ----------------------- Task 3 --------------------------------- //
// С помощью reduce, перепишите реализацию следующего кода

// const arr1 = ['Apple', 'Banana', 'Pineapple'];
// // map
// //.map(el => el[0]);
// const res1 = arr1.reduce((acc, el) => acc.concat(el[0]), []);
// console.log(res1);

// filter
//.filter(el => el[0].toLowerCase() == 'a');
// const res2 = arr1.reduce((acc, el) => el[0].toLowerCase() == 'a' ? acc.concat(el) : acc, []);
// console.log(res2);
// const res22 = arr1.reduce((acc, el) => {
//     el[0].toLowerCase() == 'a' ? acc.push(el) : null;
//     return acc;
// }, []);
// console.log('res2.1', res21);

// // forEach
// //.forEach((el, i, arr) => arr[i] = `${i + 1}: ${el}`);
// const res3 = arr1.reduce((acc, el, i) => acc.concat(`${i + 1}: ${el}`),[])
// console.log(res3);

const arr = ['Яблоко', 'Банан', 'Ананас', 'Абрикос', 'Банан'];

const result2 = arr.reduce((prev, item) => item[0].toLowerCase() === 'а' ? [...prev, item] : prev, []);

console.log(result2);