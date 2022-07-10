$(document).ready(function () {

// login-form Validation start
    if ($('.login-form').length > 0) {
        $(function () {
            $(".login-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                },
                rules: {
                    'email': {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                        minlength: 9,
                        passwordCheck: true
                    }

                },
                messages: {
                    'email': {
                        required: 'Email je obavezno polje',
                        email: 'Molimo unesite validan Email'
                    },
                    password: {
                        required: 'Pass je obavezno polje',
                        minlength: 'Password mora imati min 9 karaktera'
                                //passwordCheck: 'Pass mora imati malo, veliko slovo i broj'
                    }

                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.error-msg'));
                }

            });
        });
    }

    jQuery.validator.addMethod("passwordCheck",
            function (value, element, param) {
                if (this.optional(element)) {
                    return true;
                } else if (!/[A-Z]/.test(value)) {
                    return false;
                } else if (!/[a-z]/.test(value)) {
                    return false;
                } else if (!/[0-9]/.test(value)) {
                    return false;
                }

                return true;
            },
            "Password mora da ima malo slovo, veliko slovo i broj");
// login-form Validation end

// register-form Validation start
    if ($('.register-form').length > 0) {
        $(function () {
            $(".register-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                },
                rules: {
                    name: {
                        required: true
                    },
                    'email': {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                        minlength: 9,
                        passwordCheck: true
                    },
                    repassword: {
                        required: true,
                        equalTo: '#password'

                    }

                },
                messages: {
                    name: {
                        required: 'Name je obavezno polje'
                    },
                    'email': {
                        required: 'Email je obavezno polje',
                        email: 'Molimo unesite validan Email'
                    },
                    password: {
                        required: 'Pass je obavezno polje',
                        minlength: 'Password mora imati min 9 karaktera'
                                //passwordCheck: 'Pass mora imati malo, veliko slovo i broj'
                    },
                    repassword: {
                        required: 'RePass je obavezno polje',
                        equalTo: 'Lozinke se ne poklapaju'
                    }

                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.error-msg'));
                }

            });
        });
    }

    jQuery.validator.addMethod("passwordCheck",
            function (value, element, param) {
                if (this.optional(element)) {
                    return true;
                } else if (!/[A-Z]/.test(value)) {
                    return false;
                } else if (!/[a-z]/.test(value)) {
                    return false;
                } else if (!/[0-9]/.test(value)) {
                    return false;
                }

                return true;
            },
            "Password mora da ima malo slovo, veliko slovo i broj");
// register-form Validation end



// popup start
    $(`[data-show='popup']`).click(function (e) {
        e.preventDefault();
        let popupTarget = $(this).attr('data-target');
        $(popupTarget).fadeIn();
    });

    $(`[data-popup-close='popup']`).click(function (e) {
        $('.popup').fadeOut();
    });

    $('.popup .popup-wrapper').click(function (e) {
        e.stopPropagation();
    }); // popup end




// owlCarousel start
    if ($('.benefit-slider').length > 0) {
        $('.benefit-slider').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                }
            }
        });
    } // owlCarousel end




// Add header BG on scroll start
    function checkHeader() {

        let scrollFromTop = $(window).scrollTop();
        let headerHeight = $('header').outerHeight();
        if (scrollFromTop > headerHeight) {
            $('header').addClass('has-bg py-lg-0').removeClass('py-lg-2');
        } else {
            $('header').removeClass('has-bg py-lg-0').addClass('py-lg-2');
        }
    }

    checkHeader();

    $(window).scroll(function () {
        checkHeader();
    }); // Add header BG on scroll end




// animation start
    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var pozicija = $(this).offset().top;
            var animacija = $(this).attr('data-animation');
            var delay = $(this).attr('data-delay');
            if (pozicija < scroll + windowHight - 150) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
            }
        });
    }

    animation();

    $(window).scroll(function () {
        animation();
    }); // animation end




// counterUp start
    if ($('.counter').length > 0) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    } // counterUp end


// owlCarousel start
    if ($('.testimonials-slider').length > 0) {
        $('.testimonials-slider').owlCarousel({
            items: 1,
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    dots: false,
                    nav: true,
                    slideBy: 2
                },
                768: {
                    items: 2,
                    dots: true,
                    nav: false
                }
            }
        });
    } // owlCarousel end
    

// fancybox start
    $(`[data-fancybox='gallery']`).fancybox({
        thumbs: {
            autoStart: true,
            hideOnClose : true
        }
    }); // fancybox end
    
    
// owlCarousel start 
    if ($('.client-slider').length > 0) {
        $('.client-slider').owlCarousel({
            loop: true,
            responsiveClass: true,
            items: 1,
            autoplay: true,
            autoplayTimeout: 2000,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                576: {
                    items: 2,
                    nav: true
                },
                992: {
                    items: 3,
                    nav: true
                },
                1200: {
                    items: 6,
                    nav: true
                }
            }
        });
    } // owlCarousel end

});



