var swiper = new Swiper(".mySwiper",{
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, 
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    }
});