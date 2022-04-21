let projects = document.getElementById('projects');
let skills = document.getElementById('skills');
let contacts = document.getElementById('contact');

let featuresNavigation = document.querySelectorAll('#features-js')


featuresNavigation[0].onclick = () => {
    projects.style.display = 'block';
    skills.style.display = 'none';
    contact.style.display = 'none';
}

featuresNavigation[1].onclick = () => {
    skills.style.display = 'block';
    projects.style.display = 'none';
    contact.style.display = 'none'
}

featuresNavigation[2].onclick = () => {
    contact.style.display = 'block';
    skills.style.display = 'none';
    projects.style.display = 'none';
}

