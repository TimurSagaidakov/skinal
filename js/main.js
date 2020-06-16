$(window).load(function() {
    $(".before-after").twentytwenty({
        before_label: 'Без скинали',
        after_label: 'С установленным скинали'
    });
    $('.before-slider').slick({
        draggable: false,
        dots: true,
        swipe: false,
        dotsClass: 'before-slider__dots',
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right')
    });
    $('.menu-button').on('click', function(){
        $('.menu').toggleClass('menu_active');
    });
    $('.select').on('click',function(){
        $('.select__dropdown').toggleClass('select__dropdown_open');
    });
    $('a').on('click', function(){
        $('.menu').removeClass('menu_active');
    });
    $('.select__option').on('click', function(){
        var value = $(this).attr('data-value');
        $('#select-type').val(value);
        $('.select__checked').text(value);
        $('select__dropdown').toggleClass('select__dropdown_open');
    });
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top -100 + "px"}, 1000);
        return false;
    });
    $('input[type="tel"]').mask("+7 (999) 999-99-99");
    var reviews = $('.reviews');
    var reviewsTop = reviews.offset().top;
    $(window).bind('scroll', function(){
        var windowTop = $(this).scrollTop();
        if (windowTop > reviewsTop) {
            $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ae4cb5ffc91e20650c64a26ff4599f3d0d96b24c6868b0a566419fb4820074a72&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>')
            $(window).unbind('scroll')
        }
    })
    
});


