// hamburger

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

// skills ratings

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

/* Smooth scroll in menu */
$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top + 80;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({
        scrollTop: blockOffset
    }, 500);
});

// Smooth scroll and pageUp

$(window).scroll(function() {
    if ($(this).scrollTop() > 1200) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href='#up']").on('click', function() {
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 500, // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });
    return false;
});


// Smooth scroll in pageUp на чистом JS
// const smoothLinks = document.querySelectorAll('a[href="#up"]');
// for (let smoothLink of smoothLinks) {
//     smoothLink.addEventListener('click', function(e) {
//         e.preventDefault();
//         const id = smoothLink.getAttribute('href');
//         document.querySelector(id).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     });
// };