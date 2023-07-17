$(document).ready(function(){
            
             //function showbar() {
              // var x = document.getElementById("navmenu");
               //if (x.style.left === "-100%") {
               //  x.style.left === "0%";
              // } else {
              //   x.style.left === "-100%";
              // }
            // }


            $('.right_slide').click(function(){
               if($('.mobile_menu').css('left') != '0px'){
                  $('.mobile_menu').css({'left':'0px'});
               }
               else{
                  $('.mobile_menu').css({'left':'100%'});
               }
               if($('.mobarrow-left').css('left') != '242px'){
                  $('.mobarrow-left').css({'left':'242px'});
               }
               else{
                  $('.mobarrow-left').css({'left':'-0%'});
               }
            });

            $('.mobarrow-left').click(function(){
               if($('.mobile_menu').css('left') != '-278px'){
                  $('.mobile_menu').css({'left':'-278px'});
               }
               else{
                  $('.mobile_menu').css({'left':'0px'});
               }
               if($('.mobarrow-left').css('left') != '-48px'){
                  $('.mobarrow-left').css({'left':'-48px'});
               }
               else{
                  $('.mobarrow-left').css({'left':'242px'});
               }
            });


            //owl start
            $(".owl-carousel").owlCarousel({
                loop:true,
                margin:20,
                responsiveClass:true,
                center:true,
                responsive:{
                    0:{
                        items:1,
                    },
                    600:{
                        items:3,
                    },
                    1000:{
                        items:5,
                        nav:true,
                    }
                }
            });
    //Price slide
            $('.price-owl').owlCarousel({
                margin:20,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    900:{
                        items:3
                    },
                    1500:{
                        items:5
                    }
                }
            });
    //Price slide
            $('.price-owl2').owlCarousel({
                margin:20,
                responsiveClass:true,center:true,loop:false,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    900:{
                        items:1
                    },
                    1500:{
                        items:1
                    }
                }
            });
    //Price slide
            $('.price-owl3').owlCarousel({
                margin:20,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    900:{
                        items:3
                    },
                    1500:{
                        items:5
                    }
                }
            });
    //Clients slide
            $('.clients-owl').owlCarousel({
                loop:true,
                margin:20,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:3
                    },
                    600:{
                        items:4
                    },
                    1000:{
                        items:7
                    }
                }
            });
    //Clients slide
            $('.owl-smrt').owlCarousel({
                loop:true,
                margin:20,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:2
                    },
                    300:{
                        items:3
                    },
                    600:{
                        items:4
                    },
                    1000:{
                        items:6
                    }
                }
            });
    //sticky nav
        window.onscroll = function() {myFunction()};
            var navbar = document.getElementById("navbar");
            var sticky = navbar.offsetTop;
            function myFunction() {
                if(window.pageYOffset >= sticky) {
                    navbar.classList.add("sticky")
                }else{
                    navbar.classList.remove("sticky");
                }
            }

           $('#scroll-nav').onePageNav({
                currentClass: 'current',
                changeHash: false,
                scrollSpeed: 1500,
                scrollThreshold: 0.5,
                filter: '',
                easing: 'swing',
            });

        //scrolling footer and sidemenu

         $(window).scroll(function (evt) {
        var sidebar_offset = $('#scroll-nav').offset().top;
        var sidebar_height = $('#scroll-nav').height();      //564
        var total_height = sidebar_offset + sidebar_height;
        var footer_offset = $('#mfooter').offset().top;
        var document_offset = $(window).scrollTop();

        var padding_top_to_footer = 90;
        var margin_top = 40;
        //calculate when the sidebar position + height touches footer
        //then remove the affix class, make it absolute and set the position accordingly
        //if it returns, then we put back the affix class

        //console.log(total_height + ' ' + footer_offset + ' ' + document_offset);
        //footer height 351
        if (document_offset + sidebar_height + padding_top_to_footer < footer_offset) {
            $('#scroll-nav').addClass('fixed').removeAttr('style');
            $('#scroll-nav').css({
            });
        } else {
            $('#scroll-nav').removeClass('fixed');
            $('#scroll-nav').css({
                position: 'absolute',
                top: (footer_offset - sidebar_height) - padding_top_to_footer - margin_top + 'px'
            });
        }
    });
         ///Faq collaps

    $(".collapse").on('shown.bs.collapse', function (e) {
        //console.log(e.target.id);
        var arrow = document.getElementById(e.target.id + '_arrow');
        arrow.classList.remove('fa-caret-down');
        arrow.classList.add('fa-caret-up');
        //alert('The collapsible content is now fully shown.');
    });

    $(".collapse").on('hidden.bs.collapse', function (e) {
        //console.log(e);
        var arrow = document.getElementById(e.target.id + '_arrow');
        arrow.classList.remove('fa-caret-up');
        arrow.classList.add('fa-caret-down');
        //alert('The collapsible content is now hidden.');
    });      
    
});
