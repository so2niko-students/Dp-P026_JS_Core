const names = [23, 'array', .3, , , 0, null, true, false, undefined];
const names2 = new Array(6);
const names3 = Array(22, 66);

names[0] = 'Nick';
names[99] = 33;


names[0.3] = { name : 3213 };
names["Ручка"] = [22, 44, 423432, 234];

console.log(names2);
console.log(names3);

console.log(names2.fill(0).join('-'));

// names.length = 97;

names.length = 0;

console.log(names['Ручка']);
console.log(names);