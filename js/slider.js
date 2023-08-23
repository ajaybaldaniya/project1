$('#slider1').owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: ['<i class="fa-solid fa-angle-left icn"></i>', '<i class="fa-solid fa-angle-right icn"></i></i>'],
    animateIn: 'animate__fadeIn',
    animateOut: 'animate__fadeOut',
})

$('#slider2').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
})

$(document).ready(function () {
    $('#scroll_top').fadeOut()

    $(window).scroll(function () {
        x = $(window).scrollTop()
        if (x >= 150) {
            $('.navbar').addClass('sticky')
            $('#scroll_top').fadeIn()
        }
        else {
            $('.navbar').removeClass('sticky')
            $('#scroll_top').fadeOut()
        }
    })

    $('#scroll_top').click(function () {
        $(window).scrollTop(0)
    })

    $(window).on("load", function () {
        $('#loader').delay(4000).fadeOut()
    })
});