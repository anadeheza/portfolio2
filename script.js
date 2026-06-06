const swiper = new Swiper('.carrusel', {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    mousewheel: {
        forceToAxis: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});