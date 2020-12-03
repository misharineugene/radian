import $ from 'jquery'; window.jQuery = $; window.$ = $ // import module example (npm i -D jquery)
// require('./other_script.js') // Require Other Script(s) from app/js folder Example

document.addEventListener('DOMContentLoaded', () => {

  const mobileToggle = document.querySelector('.g-header__toggle')
  const mobileNav = document.querySelector('.g-header__mobile')
  const body = document.body
  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('open')
    mobileNav.classList.toggle('open')
    body.classList.toggle('open')
  })

  const header 		= $('#g-header'),
        topHeight = header.outerHeight()
         
  $(window).on('load scroll', function() {
    if ( !header.hasClass('scroll') && $(this).scrollTop() > topHeight ) {
      header.addClass('scroll');
    } else if ( header.hasClass('scroll') && $(this).scrollTop() <= topHeight ) {
      header.removeClass('scroll');
    }
  })

})
