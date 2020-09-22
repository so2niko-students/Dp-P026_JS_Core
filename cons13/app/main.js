const form = document.querySelector('.inp_form');

form.addEventListener('submit', ev => {
    ev.preventDefault();

    console.dir(form);

    console.log(form.children.bdday.value);
})