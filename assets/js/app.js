$('.carousel').slick({
    dots: true,
    infinite: true
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
});
const $menuBtn = document.querySelector(".mobile-menu");
const $Appbar = document.querySelector(".appbar");
const $Overlay = document.querySelector(".overlay");

$(".mobile-menu").click(() => {
    $menuBtn.classList.add("open");
    $Appbar.classList.add("open");
    $Overlay.classList.add("open");
})

$(".close-btn").click(() => {
    $menuBtn.classList.remove("open");
    $Appbar.classList.remove("open");
    $Overlay.classList.remove("open");
})
$($Overlay).click(() => {
    $menuBtn.classList.remove("open");
    $Appbar.classList.remove("open");
    $Overlay.classList.remove("open");
})