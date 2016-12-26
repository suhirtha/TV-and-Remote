$(document).ready(function() {
    $('#rem').draggable();
    var count = 15;
    var slider = new Slider('#bright-slide');
    var slider = new Slider('#contrast-slide');
    var slider = new Slider('#color-slide');

    function ProgChange(count) {
        $('.channel-img').show();
        $('.channel').text(count);
        switch (count) {
            case 17:
                $('.channel-img').css("background-image", "url(img/channel1.png)");
                $('.power-switch').css("background-image", "url(img/hulk.gif)");
                document.getElementById('play-star').play();
                break;
            case 18:
                $('.channel-img').css("background-image", "url(img/channel2.png)");
                $('.power-switch').css("background-image", "url(img/tiger.gif)");
                document.getElementById('play-nat').play();
                break;
            case 19:
                $('.channel-img').css("background-image", "url(img/channel3.png)");
                $('.power-switch').css("background-image", "url(img/anime.gif)");
                document.getElementById('play-anime').play();
                break;
            case 20:
                $('.channel-img').css("background-image", "url(img/channel7.png)");
                $('.power-switch').css("background-image", "url(img/doc.gif)");
                document.getElementById('play-dis').play();
                break;
            case 21:
                $('.channel-img').css("background-image", "url(img/channel6.png)");
                $('.power-switch').css("background-image", "url(img/sorry.gif)");
                document.getElementById('play-pogo').play();
                break;
            case 30:
                $('.channel-img').css("background-image", "url(img/channel5.png)");
                $('.power-switch').css("background-image", "url(img/mega.gif)");
                document.getElementById('play-mov-now').play();
                break;
            case 2:
                $('.channel-img').css("background-image", "url(img/channel4.png)");
                $('.power-switch').css("background-image", "url(img/laugh.gif)");
                document.getElementById('play-romedy').play();
                break;
            case 13:
                $('.channel-img').css("background-image", "url(img/channel9.png)");
                $('.power-switch').css("background-image", "url(img/bomb.gif)");
                document.getElementById('play-star-act').play();
                break;
            case 16:
                $('.channel-img').css("background-image", "url(img/channel8.png)");
                $('.power-switch').css("background-image", "url(img/hulkrun.gif)");
                document.getElementById('play-hbo').play();
                break;
            default:
                $('.channel-img').hide();
                $('.power-switch').css("background-image","url(img/unavail.gif)");
                break;
        }
    }

    $('.power').click(function() {
        $('.power-switch').toggle();
        if ($("#pow").is(":hidden")) {
            $('.speak').attr('src', 'img/speaker1.png');
        } else {
            $('.speak').attr('src', 'img/speaker.gif');
        }
    });

    $('.prog-up').click(function() {
        count++;
        ProgChange(count);
    });
    $('.prog-down').click(function() {
        count--;
        ProgChange(count);

    });

    $('.vol-up').click(function() {
        $('.volume').fadeIn().css("background-color", "#0000ff").animate({ width: '+=10px' }, 'fast', function() {
            setTimeout(function() {
                $('.volume').fadeOut('fast');
            }, 2000);
        });
    });
    $('.vol-down').click(function() {
        $('.volume').fadeIn().css("background-color", "#0000ff").animate({ width: '-=10px' }, 'fast', function() {
            setTimeout(function() {
                $('.volume').fadeOut('fast');
            }, 2000);
        });
    });

    $('.all-prog').click(function() {
        $('.menu').toggle();
    });
    $('#ch-star').click(function() {
        count = 17
        $('.menu').hide();
        ProgChange(count);

    });
    $('#ch-nat').click(function() {
        count = 18
        $('.menu').hide();
        ProgChange(count);

    });
    $('#ch-anime').click(function() {
        count = 19
        $('.menu').hide();
        ProgChange(count);

    });
    $('#ch-hbo').click(function() {
        count = 16;
        $('.menu').hide();
        ProgChange(count);

    });
    $('#ch-star-act').click(function() {
        count = 13;
        $('.menu').hide();
        ProgChange(count);

    });
    $('#ch-rom').click(function() {
        count = 2;
        $('.menu').hide();
        ProgChange(count);

    });
    $('#ch-mov').click(function() {
        count = 30;
        $('.menu').hide();
        ProgChange(count);

    });
    $('#ch-dis').click(function() {
        count = 20;
        $('.menu').hide();
        ProgChange(count);

    });
    $('#ch-pogo').click(function() {
        count = 21;
        $('.menu').hide();
        ProgChange(count);

    });
    $('.setting').click(function() {
        $('.settings').toggle();
    });
});
