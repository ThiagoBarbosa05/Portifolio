let about = document.getElementById('about-button');
let modal = document.getElementById('modal-about-me');
let closeButton = document.getElementById('close');
let aboutContainer = document.getElementById('about');
let featuresContainer = document.getElementById('features');
let shadow = document.querySelector('.shadow');


const open = () => {
    modal.style.display = 'block';
    aboutContainer.classList.add('blur');
    featuresContainer.classList.add('blur');
    
}

const close = () => {
    modal.style.display = 'none';
    aboutContainer.classList.remove('blur');
    featuresContainer.classList.remove('blur');
}

about.onclick = open;
closeButton.onclick = close;
