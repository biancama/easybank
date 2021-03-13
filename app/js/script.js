const headerMenu = document.getElementById('btnHamburger');
const body = document.body;
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade');

headerMenu.addEventListener('click', function(){ 
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    body.classList.remove('noscroll');
    fadeElems.forEach(elem => {
      elem.classList.remove('fade-in');
      elem.classList.add('fade-out');
    });
  } else {
      header.classList.add('open');
      body.classList.add('noscroll');
      fadeElems.forEach(elem => {
        elem.classList.add('fade-in');
        elem.classList.remove('fade-out');
      });
  }
}); 