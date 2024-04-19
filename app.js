const homeLink = document.getElementById('homeLink');
const aboutLink = document.getElementById('aboutLink');
const contactLink = document.getElementById('contactLink');
const servicesLink = document.getElementById('servicesLink');

const homeContent = document.getElementById('homeContent');
const aboutContent = document.getElementById('aboutContent');
const contactContent = document.getElementById('contactContent');
const servicesContent = document.getElementById('servicesContent');

homeLink.addEventListener('click', () => {
    showContent(homeContent);
    hideContent(aboutContent);
    hideContent(contactContent);
    hideContent(servicesContent);
});

aboutLink.addEventListener('click', () => {
    showContent(aboutContent);
    hideContent(homeContent);
    hideContent(contactContent);
    hideContent(servicesContent);
});

contactLink.addEventListener('click', () => {
    showContent(contactContent);
    hideContent(homeContent);
    hideContent(aboutContent);
    hideContent(servicesContent);
});

servicesLink.addEventListener('click', () => {
    showContent(servicesContent);
    hideContent(homeContent);
    hideContent(aboutContent);
    hideContent(contactContent);
});

function showContent(element) {
    element.classList.remove('hidden');
}

function hideContent(element) {
    element.classList.add('hidden');
}
