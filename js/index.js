;(function(){
    $(".main-slider-wrap").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        autoWidth: false,
        smartSpeed: 1000,
    });
    
    $(".new-products-crousel").owlCarousel({
        items: 4,
        nav: true,
        dots: true,
        autoWidth: true,
        margin: 20,
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        center: true,
    });
    
    $(".news-crousel").owlCarousel({
        items: 5,
        nav: true,
        dots: false,
        autoWidth: true,
        margin: 25,
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        center: true,
    });
}());