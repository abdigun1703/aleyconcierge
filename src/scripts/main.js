
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(en => en.addEventListener('click', linkAction));

const bgHeader = () => {
    const topHeader = document.getElementById('header');

    this.scrollY >= 50 ? topHeader.classList.add('bg-header') : topHeader.classList.remove('bg-header');
}

window.addEventListener('scroll', bgHeader);

// let testimonialSwiper = new Swiper(".testimonial-swiper", {
//     spaceBetween: 30,
//     loop: true,

//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev"
//     },
// });

/*=============== SWIPER HOME ===============*/
const swiperHOme = new Swiper('.home__swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 'auto',
  grabCursor: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/
const swiperTEstimonial = new Swiper('.testimonial__swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 48,
  grabCursor: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }

});

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 300
})

sr.reveal(`.home__container, .testimonial__container, .footer__container`)
sr.reveal(`.home__title`, {delay: 600})
sr.reveal(`.home__description`, {delay: 900})
sr.reveal(`.home__data .button`, {delay: 1200})
sr.reveal(`.destination__card, .gallery__card, .offer__card`, {interval: 100})

sr.reveal(`.join__data`, {origin: 'left'})
sr.reveal(`.join__img`, {origin: 'right'})