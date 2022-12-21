// const sgMail = require('@sendgrid/mail')

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    // Navbar on scrolling
    $(window).scroll(function () {
        
            $('.navbar').fadeIn('slow').css('display', 'flex');
    });


    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('');
        } else {
            $('.back-to-top').fadeOut('');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 100, 'easeInOutExpo');
        return false;
    });
    

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

    
})(jQuery);
let scrollIndicator=document.querySelector(".scroll-indicator")
let overallHeight=document.documentElement.scrollHeight-window.innerHeight
window.addEventListener("scroll",()=>{
    scrollIndicator.style.width=`calc(${window.scrollY * 100 / overallHeight}% - ${70}px)`

})

let mainPage=document.querySelector(".main-page")
let cvPage=document.querySelector(".cv-page")
let cvButton=document.querySelector("#cv-button")
let mainNavBar=document.querySelector("#main-nav")
let cvNav=document.querySelector("#cv-nav")
let backToMainBtn=document.getElementById("main-btn")
cvButton.addEventListener("click",()=>{
    mainPage.classList.remove("fade-in-right")
    mainNavBar.classList.remove("fade-in-right")
    cvPage.classList.remove("fade-out-right")
    cvNav.classList.remove("fade-out-right-nav")
    mainPage.classList.add("fade-out-left")
    mainNavBar.classList.add("fade-out-left")
    cvPage.classList.add("fade-in-left")
    cvNav.classList.add("fade-in-left-nav")
    cvPage.style.display="flex"
    setTimeout(()=>{
        mainPage.style.display="none"
    },1000)
})
backToMainBtn.addEventListener("click",()=>{
    mainPage.classList.remove("fade-out-left")
    mainNavBar.classList.remove("fade-out-left")
    cvPage.classList.remove("fade-in-left")
    cvNav.classList.remove("fade-in-left-nav")
    mainPage.classList.add("fade-in-right")
    mainNavBar.classList.add("fade-in-right-nav")
    mainPage.style.display="block"
    cvPage.classList.add("fade-out-right")
    cvNav.classList.add("fade-out-right-nav")
    setTimeout(()=>{
        cvPage.style.display="none"
    },1000)
})
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// let emailField=''
// document.getElementById("email").addEventListener('change',(event)=>{
//  emailField=event.target.value
// })
// function onSubmit(event){
//     event.preventDefault()
// console.log(sgMail)
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: 'tare2sa3eed@gmail.com', // Change to your recipient
//   from: emailField, // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })}
//   document.getElementById('submit').addEventListener('click',(event)=>onSubmit(event))


    