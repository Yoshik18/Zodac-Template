

//Smooth Scrolling
$('.navbar a, .btn').on('click', function(e){
    // console.log('Logged');
        if(this.hash !== ''){
            // console.log('Logged2');
            e.preventDefault();
            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top-50
            },
            800
            );
        }
});
//Navbar
window.addEventListener('scroll', function(){
    const nav = document.querySelector('.navbar');
    if(window.scrollY > 20){
        console.log('Logged');
        nav.setAttribute('style', 'background: linear-gradient(to right, #8e2de2, #5D26C1);  box-shadow: 1px 1px 5px black;');
    }else{
        nav.setAttribute('style', 'background-color:transparent !important;');
    }
})



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2,
            autoplay: false
        },
        900:{
            items: 2
        },
        1000:{
            items:3
        }
    }
})












