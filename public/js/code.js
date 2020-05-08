// menuResponsive
let menuOpen = document.querySelector('#menuOpen')
let menuClose = document.querySelector('#menuClose')
let menuContainer = document.querySelector('#menuContainer')

function showHide(){
  if (menuContainer.classList.contains('hidden')) {
    // mostrar menu
    menuContainer.classList.remove('hidden')
    menuContainer.classList.add('block')
    // cambiar boton
    menuOpen.classList.add('hidden')
    menuClose.classList.remove('hidden')
    menuClose.classList.add('block')
  }else{
    // mostrar menu
    menuContainer.classList.remove('block')
    menuContainer.classList.add('hidden')
    // cambiar boton
    menuClose.classList.add('hidden')
    menuOpen.classList.remove('hidden')
    menuOpen.classList.add('block')
  }
}
menuOpen.addEventListener('click', showHide)
menuClose.addEventListener('click', showHide)
menuContainer.addEventListener('click', showHide)
