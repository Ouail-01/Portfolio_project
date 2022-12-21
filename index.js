// Menu script
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('#nav-menu');
const body = document.querySelector('body');
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  burger.classList.remove('active');
  navMenu.classList.remove('active');
  body.classList.remove('active');
}));

// Popup-window script

const popupWindow = document.querySelector('#popup-windows');
const burgerPopup = document.querySelector('.burger-popup');
const cardsButton = document.querySelectorAll('.project-button');
const myProjects = [

  {
    title: 'Uber Navigation',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it 1960s with the relea`,
    featuredImage: 'img/card1.png',
    technology: ['Html', 'Css', 'javaScript', 'Bootstrap', 'GitHub', 'Codepen'],
    liveVersion: 'https://ouail-01.github.io/Portfolio_project/',
    sourceCode: 'https://github.com/Ouail-01',
  },

  {
    title: 'Multi-Post Stories Gain+Glory',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it 1960s with the relea`,
    featuredImage: 'img/card2.png',
    technology: ['CodeKit', 'GitHub', 'javaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: 'https://ouail-01.github.io/Portfolio_project/',
    sourceCode: 'https://github.com/Ouail-01',
  },

  {
    title: 'Multi-Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it 1960s with the relea`,
    featuredImage: 'img/card3.png',
    technology: ['CodeKit', 'GitHub', 'javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: 'https://ouail-01.github.io/Portfolio_project/',
    sourceCode: 'https://github.com/Ouail-01',
  },

  {
    title: 'Facebook 360',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it 1960s with the relea`,
    featuredImage: 'img/card4.png',
    technology: ['Html', 'Ruby on rails', 'javascript', 'Css', 'Terminal', 'Codepen'],
    liveVersion: 'https://ouail-01.github.io/Portfolio_project/',
    sourceCode: 'https://github.com/Ouail-01',
  },

  {
    title: 'Keeping track of hundreds of components',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it 1960s with the relea`,
    featuredImage: 'img/imgHolder2.png',
    technology: ['CodeKit', 'GitHub', 'javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: 'https://ouail-01.github.io/Portfolio_project/',
    sourceCode: 'https://github.com/Ouail-01',
  },

  {
    title: 'Keeping track of hundreds of components',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it 1960s with the relea`,
    featuredImage: 'img/imgHolder2.png',
    technology: ['Ruby on rails', 'Css', 'javascript', 'Bootstrap', 'Terminal', 'GitHub'],
    liveVersion: 'https://ouail-01.github.io/Portfolio_project/',
    sourceCode: 'https://github.com/Ouail-01',
  },

];
// const cardsButton = document.querySelectorAll('.project-button');

cardsButton.forEach((item, i) => item.addEventListener('click', () => {
  popupWindow.classList.toggle('active');
  const project = myProjects[i];
  const popContainer = document.querySelector('.popup-window');

  const popupTitle = popContainer.querySelector('.popup-title');
  popupTitle.textContent = project.title;
  const popupDescription = popContainer.querySelector('.popup-description');
  popupDescription.textContent = project.description;
  const popupImage = popContainer.querySelector('.popup-image');
  popupImage.src = project.featuredImage;
  const popupThechnology = popContainer.querySelectorAll('.popup-technology');
  popupThechnology.forEach((item, i) => {
    item.textContent = project.technology[i];
  });
}));

