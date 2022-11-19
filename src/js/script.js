/**
 * *
 * Developer: Mounir Boudhan
 * Package: Codes
 * 
 */

$(window).ready(function () {
    document.documentElement.scrollTop = 0;
})
// DROPDOWN MENU 
$(function () {
    $(window).resize(() => {
        $('.menu-mobile').slideUp();
    })
    $(window).ready(() => {
        $('.menu-mobile').slideUp();
    })
    $('.menu-mobile').slideUp(500)
    $('.icon-menu').click(() => {
        $('.menu-mobile').slideToggle(500)
    })
})
// Pricing Script 
$(function () {
    let state = false;
    const prices = ['$19', '$35', '$49'];
    const new_prices = ['$57', '$105', '$147'];
    const elements = document.querySelectorAll('.dollar-price');


    $(window).ready(() => {
        $('.annual-txt').css('color', '#939496')
    })
    $('.change-price .bar').click(() => {
        $('.change-price .bar .circle').toggleClass('circle-active')

        if (state == false) {
            $('.monthly-txt').css('color', '#939496');
            $('.annual-txt').css('color', '#333');
            $('.bar').css('background-color', '#00b0ff');

            for (let i = 0; i < new_prices.length; i++) {
                $(elements[i]).text(new_prices[i])
            }

            state = true;
        } else {
            $('.annual-txt').css('color', '#939496');
            $('.monthly-txt').css('color', '#333');
            $('.bar').css('background-color', '#eee');

            for (let i = 0; i < prices.length; i++) {
                $(elements[i]).text(prices[i])
            }
            state = false;
        }
    })
})
// FAQs Script
$(function () {
    let state = false;
    const controls = document.querySelectorAll('.slide-control');
    const answers = document.querySelectorAll('.answer');
    const marks_icons = document.querySelectorAll('.mark');
    $(window).ready(() => {
        $('.faqs .box .answer').slideUp();
        $(answers[0]).slideDown()
        $(marks_icons[0]).removeClass('fa-plus')
    })
    $(() => {


        for (let i = 0; i < controls.length; i++) {
            $(controls[i]).click(() => {
                $(answers[i]).slideDown(500)
                if (state == false) {
                    $(marks_icons[i]).removeClass('fa-plus')
                    state = true;
                } else {
                    $(marks_icons[i]).addClass('fa-plus')
                    state = false;
                }
                for (let x = 0; x < answers.length; x++) {
                    if (x != i) {
                        $(answers[x]).slideUp(500)
                        $(marks_icons[x]).addClass('fa-plus')
                        $(marks_icons[x]).removeClass('fa-minus')
                        state = false;
                    }
                }
            })
        }
    })
})

//Contact Script 
$(function () {
    const details = [
        document.querySelector('.fullname'),
        document.querySelector('.email'),
        document.querySelector('.phone-number'),
        document.querySelector('.message')];

    $('.btn-send').click((event) => {
        event.preventDefault();

        if (details[0].value != '' && details[1].value != '' && details[2].value != '' && details[3].value != '') {
            fetch('http://localhost:5000/contact', {
                method: 'POST',
                
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "fullname": `${details[0].value}`,
                    "email": `${details[1].value}`,
                    "phone": `${details[2].value}`,
                    "message": `${details[3].value}`
                })
            })
            .catch(error => console.log('connected failed because:' + error))

            for (let x = 0; x < details.length; x++) {
                if (details[x].value == '') {
                    details[x].style.cssText = 'outline: 1px solid red; box-shadow: 0 0 3px red';
                } else {
                    details[x].style.cssText = 'outline:none; box-shadow: none';
                }
                details[x].value= '';
            }
        }
    })

    for (let i = 0; i < details.length; i++) {
        $(details[i]).keyup(function () {
            details[i].style.cssText = 'outline:none; box-shadow: none';
        })
    }
})
// Scroll Button 
$(function () {
    $('.btn-scroll-top').hide()
    $(window).scroll(() => {
        if (window.scrollY >= 100) {
            $('.btn-scroll-top').show();
        } else {
            $('.btn-scroll-top').hide();
        }
    })
    $('.btn-scroll-top').click(function () {
        document.documentElement.scrollTop = 0;
    })
})