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
// const cardsButton = document.querySelectorAll('.project-button');
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

for (let i = 0; i < myProjects.length; i += 1) {
  document.querySelector('.card-works').innerHTML += `<div class="cards">
                <div class="img-holder">
                    <img src="${myProjects[i].featuredImage}" alt="project1">
                </div>
                <div class="text-holder">
                    <h3>${myProjects[i].title}</h3>
                    <ul>
                        <li>Ruby on Rails</li>
                        <li>CSS</li>
                        <li>JavScript</li>
                        <li>Html</li>
                    </ul>
                    <button class="project-button" type="button">
                        <a href="#portfolio">See Project</a>
                    </button>
                </div>
            </div>`;
}

document.querySelector('.popup-container').innerHTML += `<div class="popup-window">
  <img class="popup-image" src="img/card1.png" alt="img-popup">
  <div class="burger-popup">
      <div class="popup-line"></div>
      <div class="popup-line"></div>
      <div class="popup-line"></div>
  </div>
  <h3 class="popup-title">Keeping track of hundreds of components</h3>
  <div class="popup-buttons display-mobile-none">
      <button>
          <a class="popup-button-live" href="" target="_blank">See Live <i class="fa fa-circle-o-notch " style="font-size: 20px;"></i></a>
      </button>
      <button>
          <a class="popup-button-source" href="" target="_blank">See Source <i class="fa fa-github" style="font-size: 20px;"></i></a>
      </button>
  </div>
  <ul>
      <li class="popup-technology"></li>
      <li class="popup-technology"></li>
      <li class="popup-technology"></li>
      <li class="popup-technology display-mobile-none"></li>
      <li class="popup-technology display-mobile-none"></li>
      <li class="popup-technology display-mobile-none"></li>
  </ul>
  <p class="popup-description"></p>
  <div class="popup-buttons display-desktop-none">
      <button>
          <a class="popup-button-live" href="" target="_blank">See Live <i class="fa fa-circle-o-notch " style="font-size: 20px;"></i></a>
      </button>
      <button>
          <a class="popup-button-source" href="" target="_blank">See Source <i class="fa fa-github" style="font-size: 20px;"></i></a>
      </button>
  </div>
</div>`;

const cardsButton = document.querySelectorAll('.project-button');

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
  const popupLiveVersion = popContainer.querySelector('.popup-button-live');
  popupLiveVersion.href = project.liveVersion;
  const popupSourceCode = popContainer.querySelector('.popup-button-source');
  popupSourceCode.href = project.sourceCode;
}));

const burgerPopup = document.querySelector('.burger-popup');

burgerPopup.addEventListener('click', () => {
  popupWindow.classList.remove('active');
});

//  validate email form

const email = document.getElementById('email');
const errorMsg = document.querySelector('.error-display');
const form = document.querySelector('#form-contact');
form.addEventListener('submit', (event) => {
  if (email.value.toLowerCase() !== email.value) {
    errorMsg.style.display = 'block';
    errorMsg.textContent = 'Please, use lowercase letters for your email address';
    event.preventDefault();
  }
});

// preserve data in the browser

const inputText = document.querySelectorAll('.input-text');
const dataStored = {
  name: '',
  email: '',
};
inputText.forEach((input) => {
  input.addEventListener('input', () => {
    dataStored[input.name] = input.value;
    localStorage.setItem('everyData', JSON.stringify(dataStored));
  });
});
