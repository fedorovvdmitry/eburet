document.addEventListener('DOMContentLoaded', () => {
  const menumobile = document.querySelectorAll('.header-btn-mobile')
  menumobile.forEach((menumobile) => {
    menumobile.addEventListener('click', () => {
      menumobile.children[0].classList.toggle('show')
    })
  })
})
