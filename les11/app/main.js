let startTime = 0;

function load(url = 'data.txt'){
    const ajax = new XMLHttpRequest();

    ajax.addEventListener('readystatechange', () => {
        if(ajax.readyState == 4 && ajax.status == 200){
            showText(ajax.responseText);
        }
    });

    ajax.open('GET', url);

    startTime = new Date();
    ajax.send();
}


function showText(txt){
    const time = (new Date()) - startTime;
    document.querySelector('.info_txt').innerHTML = `${txt} for: ${ time }ms`;
}