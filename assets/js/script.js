$(function(){
    let header = $('#header');
    let introHeight = $('#intro').innerHeight();
    let scrollOffset = $(window).scrollTop();
    
    //Fixed header
    checkScroll(scrollOffset);
    $(window).on('scroll',function(){
       scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });
    function checkScroll(){
        if(scrollOffset >= introHeight){
            header.addClass('fixed');
        }else{
            header.removeClass('fixed');
        }
    }
    
    //Smooth scroll
    $("[data-scroll]").on('click',function(event){
        event.preventDefault();
        let el = $(this);
        let elementId =el.data('scroll');
        let blockOffset = $(elementId).offset().top;
        $('#nav a').removeClass('active');
        el.addClass('active');
        $('html,body').animate({
            scrollTop: blockOffset
        },500)
    })
    
    //Menu nav toggle
    $('#nav_toggle').on('click',function(){
        event.preventDefault();
        $(this).toggleClass('active');
        $('#nav').toggleClass('active');
    })
});