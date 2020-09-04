/* 
    Создать html-страницу со светофором и кнопкой,
    которая переключает светофор на следующий цвет.
*/

const colors = ['#fc0f03', '#ff9700', '#1cfc03'];
const defaultColor = '#8b8b8b';
const spans = document.querySelectorAll('span');
const button = document.getElementById('button');
// const button2 = document.getElementById('button2');

let count = 0;

button.addEventListener('click', changeColor);
button.addEventListener('click', () => console.log('uhaha'));
button.removeEventListener('click', changeColor);
console.dir(button);

button2.onclick = changeColor;
button2.onclick = () => console.log('uhaha');


function changeColor() { 
    spans.forEach(span => span.style.backgroundColor = defaultColor);

    spans[count].style.backgroundColor = colors[count];
    
    count = ++count % 3;        
}

/* 
Вопросы:

*/
