// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);
themeToggle.checked = currentTheme === 'light';

themeToggle.addEventListener('change', () => {
    const newTheme = themeToggle.checked ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

$(document).ready(function() {
    // Add smooth scrolling to all links with hash
    $('a[href^="#"]').on('click', function(event) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 800, 'swing');
        }
    });

    // Animate info boxes on scroll
    const animateOnScroll = () => {
        $('.info-box').each(function() {
            const boxTop = $(this).offset().top;
            const boxBottom = boxTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();

            if (boxBottom > viewportTop && boxTop < viewportBottom - 100) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    };

    // Initial info box state
    $('.info-box').css({
        'opacity': '0',
        'transform': 'translateY(60px)',
        'transition': 'all 1.3s cubic-bezier(0.23, 1, 0.32, 1)'
    });

    $(window).on('scroll', animateOnScroll);
    setTimeout(animateOnScroll, 200);

    // Make brand logo text glitch on hover
    $('.brand-logo').on('mouseenter', function() {
        // Rotate logo image
        $(this).find('img').css({
            'transform': 'rotate(360deg)',
            'transition': 'transform 0.6s ease'
        });
        
        // Glitch text effect
        const originalText = $(this).find('span').text();
        let glitchInterval;
        let count = 0;
        
        glitchInterval = setInterval(() => {
            if (count > 15) {
                $(this).find('span').text(originalText);
                clearInterval(glitchInterval);
                return;
            }
            
            const glitchChars = '!@#$%^&*()_+-={}[]|:;<>?,./~`';
            const glitched = originalText.split('').map(char => 
                Math.random() > 0.5 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
            ).join('');
            
            $(this).find('span').text(glitched);
            count++;
        }, 50);
    });

    $('.brand-logo').on('mouseleave', function() {
        // Reset logo image rotation
        $(this).find('img').css({
            'transform': 'rotate(0deg)',
            'transition': 'transform 0.6s ease'
        });
        
        // Reset text
        const originalText = 'Triemas Putra';
        $(this).find('span').text(originalText);
    });

    // Typing effect for tagline
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        const $element = $(element);
        $element.text('');
        
        function type() {
            if (i < text.length) {
                $element.text($element.text() + text.charAt(i));
                i++;
                setTimeout(type, speed);
            } else {
                // Add blinking cursor
                $element.append('<span class="cursor" style="animation: blink 1s infinite;">|</span>');
            }
        }
        
        type();
    }

    // Add CSS for blinking cursor
    if (!$('#cursor-style').length) {
        $('<style id="cursor-style">@keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }</style>').appendTo('head');
    }

    setTimeout(() => {
        const tagline = $('.tagline');
        const originalText = tagline.text();
        typeWriter(tagline[0], originalText, 80);
    }, 10);

    // 3D Info Box Tilt Effect
    $('.info-box').on('mousemove', function(e) {
        const box = $(this);
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        box.css({
            'transform': `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`,
            'transition': 'transform 0.1s ease'
        });
    });

    $('.info-box').on('mouseleave', function() {
        $(this).css({
            'transform': 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)',
            'transition': 'transform 0.5s ease'
        });
    });

    // Update active navigation link on scroll
    $(window).on('scroll', function() {
        const scrollPos = $(window).scrollTop() + 100;
        
        $('nav a').each(function() {
            const currLink = $(this);
            const refElement = $(currLink.attr('href'));
            
            if (refElement.length && refElement.position().top <= scrollPos && 
                refElement.position().top + refElement.height() > scrollPos) {
                $('nav a').removeClass('active');
                currLink.addClass('active');
            }
        });
    });
});
