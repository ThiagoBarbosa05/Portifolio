let projects = document.getElementById('projects');
let skills = document.getElementById('skills');
let contacts = document.getElementById('contact');

let featuresNavigation = document.querySelectorAll('#features-js')


featuresNavigation[0].onclick = () => {

    featuresNavigation[0].classList.add('active');
    featuresNavigation[1].classList.remove('active');
    featuresNavigation[2].classList.remove('active');

    projects.style.display = 'block';
    skills.style.display = 'none';
    contact.style.display = 'none';

}

featuresNavigation[1].onclick = () => {

    featuresNavigation[1].classList.add('active');
    featuresNavigation[2].classList.remove('active');
    featuresNavigation[0].classList.remove('active');

    skills.style.display = 'block';
    projects.style.display = 'none';
    contact.style.display = 'none';
}

featuresNavigation[2].onclick = () => {

    featuresNavigation[2].classList.add('active');
    featuresNavigation[0].classList.remove('active');
    featuresNavigation[1].classList.remove('active');

    contact.style.display = 'block';
    skills.style.display = 'none';
    projects.style.display = 'none';
}



