// console.log(a);
b();
const a = 4;

console.log(a);

//Variable declaration

//Function Declaration
function b(){
    console.log('function b');
}


var c = function(){//безымянная функция
    console.log('function c');
}

//callback functions

c();


var c1 = function() { return 'function c';}
//arrow function
const d = () => 'function d' ;

d();
