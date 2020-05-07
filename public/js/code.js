new Vue({
  el: '#app',
  data() {
    return {
      logo: '/img/nedslogo.png',
      openMenu: '/img/icon-open.svg',
      altOpen: 'Open Menu',
      altClose: 'Close Menu',
      closeMenu: '/img/icon-close.svg',
      altLogo: 'Ned´s Pizza | The best pizza in Amman',
      menu:['Home', 'Menu', 'Our pizza','Working hours','Contact']
    }
  }
});

// menuResponsive
let menuOpen = document.querySelector('#menuOpen')
let menuClose = document.querySelector('#menuClose')
let mainMenu = document.querySelector('#mainMenu')
let menuContainer = document.querySelector('#menuContainer')

function showHide(){
  if (mainMenu.classList.contains('hidden')) {
    // mostrar menu
    mainMenu.classList.remove('hidden')
    mainMenu.classList.add('block')
    // cambiar boton
    menuOpen.classList.add('hidden')
    menuClose.classList.remove('hidden')
    menuClose.classList.add('block')
  }else{
    // mostrar menu
    mainMenu.classList.remove('block')
    mainMenu.classList.add('hidden')
    // cambiar boton
    menuClose.classList.add('hidden')
    menuOpen.classList.remove('hidden')
    menuOpen.classList.add('block')
  }
}
menuOpen.addEventListener('click', showHide)
menuClose.addEventListener('click', showHide)
menuContainer.addEventListener('click', showHide)
