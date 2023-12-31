(function(){
// ============= BURGER ===========
    document.addEventListener('click', burgerInit)
    function burgerInit(e){
    

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return
        
        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        } 
    
    
    }

    let button = document.getElementById("burger");

// Функция, которая будет вызываться при скролле
function handleScroll() {
  // Добавляем класс "active" к кнопке
  button.classList.add("burger__active");

  // Устанавливаем таймер на 1 секунду для удаления класса "active"
  clearTimeout(button.timer);
  button.timer = setTimeout(function() {
    button.classList.remove("burger__active");
  }, 700);
}

// Привязываем функцию handleScroll к событию скролла на странице
window.addEventListener("scroll", handleScroll);

    

// ============= MODALKA ===========
    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if(target.closest('.modal__close') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')

        }
    }

// ============= PROGRAM-TABS ===========

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {
        
        const tabControl = e.target.closest('.tab-controls__link')

        if(!tabControl) return

        e.preventDefault()
        if(tabControl.classList.contains('tab-controls__link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if(activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        if(activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        
        
        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')


    }


// ============= PROGRAM-ACCORDEON ===========


    const accordionLists = document.querySelectorAll('.accordion-list')

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            
            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')
            
            const accordionControl = e.target.closest('.accordion-list__control')

            if (!accordionControl ) return

            e.preventDefault()
            const accordionItem = accordionControl.parentElement
            const accordionContent = accordionControl.nextElementSibling

            

            if (accordionOpenedItem && accordionItem != accordionOpenedItem ) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened')
                accordionOpenedContent.style.maxHeight = null
            }
            accordionItem.classList.toggle('accordion-list__item--opened')

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            } else { 
                accordionContent.style.maxHeight = null
            }

        });

    });
    
    
// ============= SLIDER-GALLERY ===========

const swiper = new Swiper('.gallery__slider', {


    spaceBetween: 32,
    slidesPerView: 1,

    pagination: {
        el: '.gallery__pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
    },



    breakpoints: {
        320:{
            slidesPerView: 2,
        },
        601:{
            slidesPerView: 3,
        },
        801:{
            spaceBetween: 15,
        },
        1101:{
            slidesPerView: 4,
        },
    },

    });

// ======= TESTIMONIALS ====

new Swiper('.testimonials__slider', {


    spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: true,
    initialSlide: 1,

    scrollbar:{
        el: '.testimonials__scrollbar',
        draggble: true,
    },

    navigation: {
        nextEl: '.testimonials__next',
        prevEl: '.testimonials__prev',
    },

    breakpoints: {
        
        1201:{
            slidesPerView: 1.5,
        },

        1201:{
            slidesPerView: 2.1,
        },
    },


    });

// ======= МАСКА ====

const telInputs = document.querySelectorAll('input[type="tel"]');


const im = new  Inputmask('+7 (999) 99-99-99')
    im.mask(telInputs)

})()