$(document).ready(function () {
    
    function fix_header()
    {
        if ( $('body').hasClass('home'))
            
            if ($(window).scrollTop() > 25 + $('body .banner').height() - 77 )
                $('header, body > .sub').addClass('fixed');
            else
                $('header, body > .sub').removeClass('fixed');
        
        else if ($(window).scrollTop() > 0)
            $('header, body > .sub').addClass('fixed');
        else
            $('header, body > .sub').removeClass('fixed');
    }

    $(window).scroll(function() {
        fix_header();
    });

    $('header, body > .sub').removeClass('fixed');

    fix_header();

    //

    setTimeout(function () {
        AOS.init({ once: true });
        AOS.refreshHard();

        if ( $('body').hasClass('home') ) {
            document.addEventListener('aos:in:count-up', ({ detail }) => {
                (new CountUp('YY', 54)).start();
                (new CountUp('dd', 93)).start();
                (new CountUp('ac', 13)).start();
                (new CountUp('sub', 7)).start();
            });

        }
    
    });

    $('header .top .q').on('click', function(e) {
        e.preventDefault();

        var form = $('header .top .area form');
        var q = form.find('input[name=q]');

        if (q.val().trim())
            form.submit();

        else if (form.hasClass('show')) {
            form.removeClass('show'); 
            q.val('');

        } else {
            form.addClass('show'); 
            q.focus();
        }
    });

    $('header nav.mobile form input[name=q]').on('keypress', function(e) {
        if (e.key === 'Enter' && $(this).val().trim()) $($(this).parents('form')[0]).submit();
    });

    //

    $('header nav').click(function(e) {

        if (e.target != this) return;
        if ($(window).width() > 767) return;

        parent = $('body');

        if (parent.hasClass('plus'))
            parent.removeClass('plus');
        else
            parent.addClass('plus');
    });

    //

    /*function reposition_nav_sub()
    {
        $.each(['admisiones', 'facultades', 'cu', 'investigacion', 'info'], function(i, o) {
            $("." + o + ".sub ol").css('left', $("header nav a." + o).position().left + "px")
            $("." + o + ".sub span").css('left', ( $("header nav a." + o).position().left + 20 ) + "px")
        })
    }

    $(window).resize(function() { reposition_nav_sub() });

    reposition_nav_sub();*/

    //

    $("header nav, header .moto, body > .sub").on('mouseover', function(e) {
        e.stopPropagation();
    });

    function sub(e, klass) {
        e.stopPropagation();
        
        $("body > .sub").removeClass("plus");
        if ($(window).width() >= 992) $("." + klass + ".sub").addClass('plus');
    }

    $("header nav a.admisiones").on('mouseover', function(e) {
        sub(e, 'admisiones');
    });

    $("header nav a.facultades").on('mouseover', function(e) {
        sub(e, 'facultades');
    });

    $("header nav a.cu").on('mouseover', function(e) {
        sub(e, 'cu');
    });

    $("header nav a.investigacion").on('mouseover', function(e) {
        sub(e, 'investigacion');
    });

    $("header nav a.info").on('mouseover', function(e) {
        sub(e, 'info');
    });

    $("body > .sub ol").on('mouseleave', function() {
        $(this).parent().removeClass("plus");
    });

    $(window).on('focusout', function() {
        $("body > .sub").removeClass("plus");
    });

    $("body > .sub").on('click', function(e) {
        $("body > .sub").removeClass("plus");
    });

    $("body, .logo, .capellania").on('click, mouseover', function(e) {
        $("body > .sub").removeClass("plus");
    });

    //

    $('header nav a').click(function() {
        $('body').removeClass('plus');
    });

    //

    $('header nav form input[type="submit"]').click(function(e) {
        parent = $(this).parent();

        if (parent.hasClass('plus')) 
            parent.removeClass('plus');
        else {
            $('header nav form input[type="text"]').focus();
            
            parent.addClass('plus');
            e.preventDefault();
        }
    });

    $('header nav form').submit(function() {
        q    = $('header nav form input[type="text"]').val()

        if ( $.trim(q) == "") return false;
    });

    //

    if ( $('.home').length ) {
     
        $(".eaf .swiper").slick({
            arrows: true, dots: true
        });

    }

    if ( $('.campus.index').length ) {

        $(".swiper").slick({
            arrows: true, 
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true
        });

    }

    if ( $('section.rss').length ) {
        
        $(".rss .swiper").slick({
            dots: false,
            infinite: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToScroll: 2,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: "unslick"
                }
            ],
            slidesToScroll: 4,
            slidesToShow: 4
        });
    
        function set_rss_card_height() {
            $('.rss .card').css('height', ($('.rss .slick-track').height() - 5) + 'px');
        }

        window.setInterval(function() {
            set_rss_card_height();
        
        }, 2000);

        set_rss_card_height();
    }

    //

    $('.ac.umg .escuelas').click(function(e) {
        e.preventDefault();

        $(this).hide(); $('.ac.umg').addClass('plus');
    });

    //

    $('.page.adr ol label').click(function () {
        parent = $(this).parent();

        parent.parent().find('li').removeClass('plus');
        parent.addClass('plus');

        $('.page.adr .container > ol').css('height', parent.find('> ol').height() + 'px');
    });

    $('.page.adr .container > ol').css('min-height', $('.page.adr .container > ol').height() + 'px');
    
    $('.page.adr .plus label').click();

    //

    if ( ( $('.post .swiper').length > 0) 
      || ( $('.ac .swiper').length > 0) 
      || ( $('.us .swiper').length > 0)) {

        $('.swiper .full').slick({
            arrows: true,
            asNavFor: '.swiper .thumb',
            dots: false,
            slidesToScroll: 1,
            slidesToShow: 1,
        });

        $('.swiper .thumb').slick({
            arrows: false,
            asNavFor: '.swiper .full',
            centerMode: true,
            dots: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 766,
                    settings: {
                        slidesToScroll: 3,
                        slidesToShow: 4,
                        vertical: false,
                        verticalSwiping: false
                    }
                },
                {
                    breakpoint: 577,
                    settings: {
                        slidesToScroll: 2,
                        slidesToShow: 3,
                        vertical: false,
                        verticalSwiping: false
                    }
                }
            ],
            slidesToScroll: 3,
            slidesToShow: 4,
            vertical: true,
            verticalSwiping: true
        });

    }

    //

    $('.ac.index .prog .ico').click(function() {
        parent = $(this).parent();

        if (parent.hasClass('plus'))
            parent.removeClass('plus');
        else
            parent.addClass('plus');
    });

    //

    $('#adr .index li').click(function() {
        $(this).parent().find('li').removeClass('active');
        $(this).addClass('active');

        $("#adr .book .body > li").removeClass('active');
        $("#adr .book .body > li[value=" + $(this).attr('value') +  "]").addClass('active');
    });

    const DISPLAY_PER_PAGE = 10;

    let paged = $('#adr .book').data('paged');

    if ( $.trim(paged)) {
        $('#adr .book .index li').slice( paged * DISPLAY_PER_PAGE, paged * DISPLAY_PER_PAGE + DISPLAY_PER_PAGE).addClass('visible').show();
        $('#adr .book .index li:eq(' + paged * DISPLAY_PER_PAGE + ')').addClass('active').css('margin-top', 0).click();

        $('#adr .book .body > li').slice( paged * DISPLAY_PER_PAGE, paged * DISPLAY_PER_PAGE + DISPLAY_PER_PAGE).addClass('visible');
    
        let len = Math.ceil( $('#adr .book .index li').length / 10);
  

        for (var i = 1; i <= len; i++) {
            var cls = (paged + 1 == i) ? 'class = "sel"' : '';

            $('#adr .pages').append('<a href="/empleos?paged=' + i + '" ' + cls + '>' + i + '</a>');
        }
    }

    //

    if ( $('body.campus.pics').length ) {

        $('[data-fancybox="gallery"]').fancybox({
            animationEffect: "zoom",
            buttons: [
                "zoom",
                "fullScreen",
                "close"
            ],
            gutter: 10,
            hash: null,
            image: {
                preload: true
            },
            infobar: false,
            protect: true,
            transitionEffect: "slide"
        });

        $('[data-fancybox="gallery"]:first').click()

    }

    //

    $("footer h5").click(function() {
        nav = $(this).next();

        if (nav.hasClass('plus'))
            nav.removeClass('plus');
        else
            nav.addClass('plus');
    });

    //

    if ( location.hash ) {
        
        setTimeout(function () {
            id = location.hash.replace('#', '');

            if (id == 'facultades') sel = 'a[name=facultades]';
            if (id == 'noticias')   sel = 'a[name=noticias]';
        
            if (sel) $([document.documentElement, document.body]).animate({
                scrollTop: $(sel).offset().top - 60
            }, 1);

        }, 1);
    }

    $('header nav.mobile a').on('click', function() {
      $('.top button').click();
    });
    
    $('.home section.e .rss a').on('click', function(e) {
      e.preventDefault();

      $('.home section.e .rss').removeClass($('.home section.e .rss').data('class'));
      $('.home section.e .rss').data('class', $(this).data('class'));
      $('.home section.e .rss').addClass($(this).data('class'));

      $('.home section.e .rss a').removeClass('active');
      $(this).addClass('active');

      $(".home .col.right .card").hide();
      $('.home .col.right .card:eq(' + $(this).index() + ')').show();


    });


    // Contacto

    $('form.contacto').on('submit', function(e) {
        e.preventDefault(); let form = $(this);

        grecaptcha.ready(function() {
          grecaptcha.execute( $(form).data('recaptcha-key'), { action: 'submit' }).then(function(token) {
            $("input[name='_recaptcha']").val(token);

            $.ajax({
              beforeSend: function() {
                form.find('button').text('Enviando mensaje...');
              },
              complete: function() {
                form.find('button').text('Enviar mensaje');
              },
              data: {
                _recaptcha: $('input[name=_recaptcha]').val(),
                _step: 1,
                _type: 'XHR',
                destinatario: 'medicina',
                mensaje: {
                  asunto: $('#mensaje-asunto').val(),
                  texto: $('#mensaje-texto').val()
                },
                remitente: {
                  correo_electronico: $('#remitente-correo-electronico').val(),
                  nombre: $('#remitente-nombre').val(),
                  telefono: $('#remitente-telefono').val()
                }
              },
              error: function(data) {
                // TODO
              },
              success: function(httpCode) {
                form.find('.err, .msg').addClass('hidden');

                if (httpCode == 200)
                  form.find('.msg').text('Su mensaje ha sido enviado.').removeClass('hidden');
                
                else 
                {
                  var errormsg;

                  switch (httpCode) {
                    case '409': 
                      errormsg = 'Su mensaje ha sido enviado previamente.'; break;
                    case '500': 
                      errormsg = 'El servicio parece estar fuera de línea.'; break;
                    case 'UROBOT': 
                      errormsg = 'No se superó la verificación reCAPTCHA.'; break;
                  }

                  form.find('.err').text(errormsg).removeClass('hidden');          
                }
              },
              type: 'POST',
              url: form.attr('action'),
            });
          });
        });
      });

      $('form.contacto button').on('click', function() {
        $('form').addClass('was-validated');
      });
});