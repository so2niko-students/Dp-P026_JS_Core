export default class ChuckView{
    constructor(handleGetJoke){
        this.btn = document.querySelector('.btn_generate');
        this.jokeField = document.querySelector('.joke');

        this.btn.addEventListener('click', handleGetJoke);
    }

    renderJoke({ value }){
        this.jokeField.innerText = value;
    }
}