$(function(){

    function init(){
    	slider();
    }
    init();


    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });

    if(location.hash){
        var target = location.hash;
        var targetOffset = $(target).offset().top;
        $('body,html').stop().animate({scrollTop:targetOffset},500);
    }


    function slider(){
        if($('.slider').length){

            if($('.slider-2560').css('display')=='block'){
                sliderClass = '.slider-2560';
            }else
            if($('.slider-1440').css('display')=='block'){
                sliderClass = '.slider-1440';
            }else
            if($('.slider-mobile').css('display')=='block'){
                sliderClass = '.slider-mobile';
            }

            $(sliderClass+':not(.active)').each(function(index){
                var $this = $(this);
                $this.flickity({
                    cellSelector: sliderClass+' .slide',
                    setGallerySize: 0,
                    pageDots: false,
                    lazyLoad: 1,
    				autoPlay: 5500,
                    cellAlign: 'left',
                    wrapAround: true,
                    fade: true,

    			    on: {
                        ready: function() {
                            $this.addClass('active');
                        },
    				    lazyLoad: function(event, cellElement) {
    						if(!$this.hasClass('active')){
    							$this.addClass('active');
    						}
    				    }
    				}

                });
            });

        }
    }

    $(window).resize(function(){
        slider();
    })

});