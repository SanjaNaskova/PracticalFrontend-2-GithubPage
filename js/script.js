jQuery(document).ready(function($){

    $(".js-slider-carousel").owlCarousel({
        loop:true,
        autoplay: false,
        autoplayTimeout: 5000,
        margin: 20,
        nav: false,
        dots: true,
        items: 1
    });

    $(".js-menu-toggle").click(function () {
        $(this).toggleClass("activated");
 
        $(".js-navigation-wrap").toggleClass("navigation-displayed");
     });
});