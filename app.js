let btn_r = document.getElementById('btn-r');
let btn_l = document.getElementById('btn-l');

let images = document.querySelectorAll('.photos div');
let i = 0;

btn_l.onclick = function () {
    images[i].className = 'none';
    i--;

    if(i < 0) {
        i = images.length - 1;
    }
    images[i].className = 'showed';
}

btn_r.onclick = function () {
    images[i].className = '';
    i++;

    if(i >= images.length) {
        i = 0;
    }
    images[i].className = 'showed';
}
