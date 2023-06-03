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
    title: 'Football Academy website',
    description: `Football Academy's website, where you can delve into the world of our exceptional staff and discover 
    the extraordinary programs we offer. Our website is meticulously crafted using a blend of cutting-edge technologies 
    such as HTML, CSS, and Javascript, ensuring an immersive and seamless browsing experience. Get ready to embark on a 
    thrilling journey as you explore the diverse talents of our staff and the comprehensive range of programs we have 
    meticulously designed for aspiring football enthusiasts like yourself.`,
    featuredImage: 'img/FootballAcademy.png',
    technology: ['Html', 'Css', 'javaScript', 'GitHub', 'Codepen', 'Terminal'],
    liveVersion: 'https://ouail-01.github.io/Capstone_Project/',
    sourceCode: 'https://github.com/Ouail-01/Capstone_Project',
  },

  {
    title: 'Musify Application',
    description: `Musify app is a platform that allows users to listen to music, create playlists, discover new music, 
    and customize their listening experience. The app typically offers a vast library of songs from different genres, 
    artists, and albums, and uses algorithms to curate personalized playlists and recommendations for users based on their 
    listening habits. Some music apps may also offer additional features like lyrics, music videos, podcasts, and live 
    streaming. The aim of a music app is to provide users with a seamless and enjoyable listening experience that caters 
    to their music preferences.`,
    featuredImage: 'img/MusifyApp.jpeg',
    technology: ['CodeKit', 'GitHub', 'javaScript', 'React', 'Terminal', 'Codepen'],
    liveVersion: 'https://ouail-01.github.io/Musify_React-Capstone/',
    sourceCode: 'https://github.com/Ouail-01/Musify_React-Capstone',
  },

  {
    title: 'Leaderboard',
    description: `The Leaderboard website is a platform designed to showcase and track scores submitted by various players. 
    It serves as a hub where users can view and compare their achievements with those of other participants. 
    The website offers a user-friendly interface that presents the scores in a visually appealing and organized manner.`,
    featuredImage: 'img/Leaderboard.png',
    technology: ['React', 'GitHub', 'javascript', 'CSS', 'Terminal', 'Codepen'],
    liveVersion: 'https://ouail-01.github.io/Leaderboard_Project/dist/',
    sourceCode: 'https://github.com/Ouail-01/Leaderboard_Project',
  },

  {
    title: 'To-do List',
    description: `To-do List is a tool that helps to organize your day. It simply lists the things that you need to do and
     allows you to mark them as complete. You will build a simple website that allows for doing that, and you will do it 
     using ES6 and Webpack!`,
    featuredImage: 'img/TodoList.png',
    technology: ['Html', 'React', 'javascript', 'Css', 'Terminal', 'Codepen'],
    liveVersion: 'https://ouail-01.github.io/To-Do-List_Project/',
    sourceCode: 'https://github.com/Ouail-01/To-Do-List_Project',
  },

  {
    title: 'Space Travelers Hub',
    description: `Space Traveler's Hub Project is a Single Page App (SPA) implemeted using React and Redux that has 3 pages:
    The Rockets section displays a list of all available SpaceX rockets. Users can book each rocket by clicking the reservation 
    button or cancel the previously made booking.
    The Missions section displays a list of current missions along with their brief description and participation status. 
    There is also a button next to each mission that allows users to join the selected mission or leave the mission the 
    user joined earlier.displayed
    It uses an external API to SpaceX's API to gather data to be displayed on each page.
    The Dragons section displays a list of all available SpaceX dragons. Users can book each dragon by clicking the 
    reservation button or cancel the previously made booking.`,
    featuredImage: 'img/SpaceHub.png',
    technology: ['React', 'GitHub', 'javascript', 'CSS', 'Terminal', 'Codepen'],
    liveVersion: 'https://space-travelers-hub-rw29.onrender.com/rockets',
    sourceCode: 'https://github.com/Ouail-01/space-travelers-hub',
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

const inputText = document.querySelectorAll('.input-data');
const dataStored = {
  name: '',
  email: '',
  message: '',
};
inputText.forEach((input) => {
  input.addEventListener('input', () => {
    dataStored[input.name] = input.value;
    dataStored[input.email] = input.value;
    dataStored[input.message] = input.value;
    localStorage.setItem('everyData', JSON.stringify(dataStored));
  });
});
const formStored = JSON.parse(localStorage.getItem('everyData'));
if (formStored) {
  inputText.forEach((element) => {
    element.value = formStored[element.name];
  });
}