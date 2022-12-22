const hamburgerIcon = document.querySelector('#hamburger');
const navList = document.querySelector('.nav ul');
const mobileMenu = document.querySelector('.mobile-menu');
const navBar = document.querySelector('.nav');
const closeIcon = document.querySelector('.close');

function displayMenu() {
  navBar.classList.add('non-display');
  mobileMenu.classList.remove('non-display');
  navList.classList.remove('desktop');
  mobileMenu.appendChild(navList);
}

function close() {
  navBar.classList.remove('non-display');
  mobileMenu.classList.add('non-display');
}

closeIcon.addEventListener('click', close);
navList.addEventListener('click', close);
hamburgerIcon.addEventListener('click', displayMenu);

const projects = [
  {
      nameMobile: 'Project Art Printing Data',
      nameDesk: 'Project Art Printing Data',
      description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      technologies:['html','bootstrap','Ruby'],
      technologiesModal:['html','bootstrap','Ruby on rails'],
      DesktopItem: 'item8',
      mobileModalHeading:'Multi Post Stories',
      modalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      live:'https://henry-dura.github.io/portfolio-mobile-first/',
      source:'https://github.com/henry-dura/portfolio-mobile-first',

  },
  {
      nameMobile: 'Project Art Printing Data',
      nameDesk: 'Data Dashboard Healthcare',
      description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      technologies:['html','bootstrap','Ruby'],
      technologiesModal:['html','bootstrap','Ruby on rails'],
      DesktopItem: 'item9',
      mobileModalHeading:'Multi Post Stories',
      desktopModalHeading:'Keeping track of hundreds  of components website',
      modalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      live:'https://henry-dura.github.io/portfolio-mobile-first/',
      source:'https://github.com/henry-dura/portfolio-mobile-first',

  },
  {
      nameMobile: 'Project Art Printing Data',
      nameDesk: 'Website Portfolio',
      description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      technologies:['html','bootstrap','Ruby'],
      technologiesModal:['html','bootstrap','Ruby on rails'],
      DesktopItem: 'item10',
      mobileModalHeading:'Multi Post Stories',
      desktopModalHeading:'Keeping track of hundreds  of components website',
      modalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      live:'https://henry-dura.github.io/portfolio-mobile-first/',
      source:'https://github.com/henry-dura/portfolio-mobile-first',

  },
  {
      nameMobile: 'Project Art Printing Data',
      nameDesk: 'Project Art Printing Data',
      description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      technologies:['html','bootstrap','Ruby'],
      technologiesModal:['html','bootstrap','Ruby on rails'],
      DesktopItem: 'item11',
      mobileModalHeading:'Multi Post Stories',
      desktopModalHeading:'Keeping track of hundreds  of components website',
      modalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      live:'https://henry-dura.github.io/portfolio-mobile-first/',
      source:'https://github.com/henry-dura/portfolio-mobile-first',

  },
  {
      nameMobile: 'Project Art Printing Data',
      nameDesk: 'Data Dashboard Healthcare',
      description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      technologies:['html','bootstrap','Ruby'],
      technologiesModal:['html','bootstrap','Ruby on rails'],
      DesktopItem: 'item12',
      mobileModalHeading:'Multi Post Stories',
      desktopModalHeading:'Keeping track of hundreds  of components website',
      modalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      live:'https://henry-dura.github.io/portfolio-mobile-first/',
      source:'https://github.com/henry-dura/portfolio-mobile-first',

  },
  {
      nameMobile: 'Project Art Printing Data',
      nameDesk: 'Website Portfolio',
      description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      technologies:['html','bootstrap','Ruby'],
      technologiesModal:['html','bootstrap','Ruby on rails'],
      DesktopItem: 'item13',
      mobileModalHeading:'Multi Post Stories',
      desktopModalHeading:'Keeping track of hundreds  of components website',
      modalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      live:'https://henry-dura.github.io/portfolio-mobile-first/',
      source:'https://github.com/henry-dura/portfolio-mobile-first',

  }
]

