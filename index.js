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
    title: 'Multi-Post Stories Gain+Glory',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it 1960s with the relea`,
    imagePop: 'img/card1.png',
    technology: ['CodeKit', 'GitHub', 'javascript', 'Bootstrap', 'Terminal', 'Codepen'],
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
    technology: ['CodeKit', 'GitHub', 'javascript', 'Bootstrap', 'Terminal', 'Codepen'],
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
    featuredImage: 'img/card3.png',
    technology: ['CodeKit', 'GitHub', 'javascript', 'Bootstrap', 'Terminal', 'Codepen'],
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
    featuredImage: 'img/card4.png',
    technology: ['CodeKit', 'GitHub', 'javascript', 'Bootstrap', 'Terminal', 'Codepen'],
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
    featuredImage: 'img/Img Placeholder.png',
    technology: ['CodeKit', 'GitHub', 'javascript', 'Bootstrap', 'Terminal', 'Codepen'],
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
    featuredImage: 'img/Img Placeholder.png',
    technology: ['CodeKit', 'GitHub', 'javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: 'https://ouail-01.github.io/Portfolio_project/',
    sourceCode: 'https://github.com/Ouail-01',
  },

];
// const cardsButton = document.querySelectorAll('.project-button');
