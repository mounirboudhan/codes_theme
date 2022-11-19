"use strict";

/**
 * *
 * Developer: Mounir Boudhan
 * Package: Codes
 * 
 */

$(window).ready(function () {
  document.documentElement.scrollTop = 0;
});
// DROPDOWN MENU 
$(function () {
  $(window).resize(function () {
    $('.menu-mobile').slideUp();
  });
  $(window).ready(function () {
    $('.menu-mobile').slideUp();
  });
  $('.menu-mobile').slideUp(500);
  $('.icon-menu').click(function () {
    $('.menu-mobile').slideToggle(500);
  });
});
// Pricing Script 
$(function () {
  var state = false;
  var prices = ['$19', '$35', '$49'];
  var new_prices = ['$57', '$105', '$147'];
  var elements = document.querySelectorAll('.dollar-price');
  $(window).ready(function () {
    $('.annual-txt').css('color', '#939496');
  });
  $('.change-price .bar').click(function () {
    $('.change-price .bar .circle').toggleClass('circle-active');
    if (state == false) {
      $('.monthly-txt').css('color', '#939496');
      $('.annual-txt').css('color', '#333');
      $('.bar').css('background-color', '#00b0ff');
      for (var i = 0; i < new_prices.length; i++) {
        $(elements[i]).text(new_prices[i]);
      }
      state = true;
    } else {
      $('.annual-txt').css('color', '#939496');
      $('.monthly-txt').css('color', '#333');
      $('.bar').css('background-color', '#eee');
      for (var _i = 0; _i < prices.length; _i++) {
        $(elements[_i]).text(prices[_i]);
      }
      state = false;
    }
  });
});
// FAQs Script
$(function () {
  var state = false;
  var controls = document.querySelectorAll('.slide-control');
  var answers = document.querySelectorAll('.answer');
  var marks_icons = document.querySelectorAll('.mark');
  $(window).ready(function () {
    $('.faqs .box .answer').slideUp();
    $(answers[0]).slideDown();
    $(marks_icons[0]).removeClass('fa-plus');
  });
  $(function () {
    var _loop = function _loop(i) {
      $(controls[i]).click(function () {
        $(answers[i]).slideDown(500);
        if (state == false) {
          $(marks_icons[i]).removeClass('fa-plus');
          state = true;
        } else {
          $(marks_icons[i]).addClass('fa-plus');
          state = false;
        }
        for (var x = 0; x < answers.length; x++) {
          if (x != i) {
            $(answers[x]).slideUp(500);
            $(marks_icons[x]).addClass('fa-plus');
            $(marks_icons[x]).removeClass('fa-minus');
            state = false;
          }
        }
      });
    };
    for (var i = 0; i < controls.length; i++) {
      _loop(i);
    }
  });
});

//Contact Script 
$(function () {
  var details = [document.querySelector('.fullname'), document.querySelector('.email'), document.querySelector('.phone-number'), document.querySelector('.message')];
  $('.btn-send').click(function (event) {
    event.preventDefault();
    if (details[0].value != '' && details[1].value != '' && details[2].value != '' && details[3].value != '') {
      fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "fullname": "".concat(details[0].value),
          "email": "".concat(details[1].value),
          "phone": "".concat(details[2].value),
          "message": "".concat(details[3].value)
        })
      })["catch"](function (error) {
        return console.log('connected failed because:' + error);
      });
      for (var x = 0; x < details.length; x++) {
        if (details[x].value == '') {
          details[x].style.cssText = 'outline: 1px solid red; box-shadow: 0 0 3px red';
        } else {
          details[x].style.cssText = 'outline:none; box-shadow: none';
        }
        details[x].value = '';
      }
    }
  });
  var _loop2 = function _loop2(i) {
    $(details[i]).keyup(function () {
      details[i].style.cssText = 'outline:none; box-shadow: none';
    });
  };
  for (var i = 0; i < details.length; i++) {
    _loop2(i);
  }
});
// Scroll Button 
$(function () {
  $('.btn-scroll-top').hide();
  $(window).scroll(function () {
    if (window.scrollY >= 100) {
      $('.btn-scroll-top').show();
    } else {
      $('.btn-scroll-top').hide();
    }
  });
  $('.btn-scroll-top').click(function () {
    document.documentElement.scrollTop = 0;
  });
});