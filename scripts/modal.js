let about = document.getElementById('about-button');
let modal = document.getElementById('modal-about-me');
let closeButton = document.getElementById('close');

const open = () => {
    modal.style.display = 'block';
}

const close = () => {
    modal.style.display = 'none';
}

about.onclick = open;
closeButton.onclick = close;
