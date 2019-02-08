//Smooth Scrolling
$('.navbar a, .btn').on('click', function(e){
    // console.log('Logged');
        if(this.hash !== ''){
            // console.log('Logged2');
            e.preventDefault();
            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
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
        nav.setAttribute('style', 'background: linear-gradient(to right, #8e2de2, #5D26C1)');
    }else{
        nav.setAttribute('style', 'background-color:transparent !important');
    }
})
