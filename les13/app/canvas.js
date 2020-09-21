const canv = document.querySelector('.canvas');

canv.width = 800;
canv.height = 450;

const draw = canv.getContext('2d');

setInterval(() => {
    const { h, m, s } = getAngle();
    const startAngle = -Math.PI / 2;
    draw.clearRect(0, 0, 800, 450);

    draw.beginPath();
    draw.arc(400, 225, 150, startAngle, s);
    draw.stroke();

    draw.beginPath();
    draw.arc(400, 225, 100, startAngle, m);
    draw.stroke();

    draw.beginPath();
    draw.arc(400, 225, 50, startAngle, h);
    draw.stroke();
}, 100);

function getAngle(){
    const pi2 = Math.PI * 2;
    const pi05 = Math.PI * .5;
    const t = new Date();
    return {
        s : -pi05 + pi2 * (t.getSeconds() + (t.getMilliseconds()) / 1000) / 60,
        m : -pi05 + pi2 * t.getMinutes() / 60,
        h : -pi05 + pi2 * (t.getHours() % 12) / 12
    }
}



