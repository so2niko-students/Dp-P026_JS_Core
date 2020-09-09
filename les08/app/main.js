document.querySelector('.test-form').addEventListener('submit', e => {
    e.preventDefault();


});


document.body.addEventListener('keydown', e => {
    console.log(e);
    if(e.ctrlKey){
        e.preventDefault();
    }
});

document.body.addEventListener('click', e => {
    console.log(e);
    
});
document.body.addEventListener('contextmenu', e => {
    console.log(e);
    e.preventDefault();
    
});