
var _REQUIRED_EMAIL = "Email field is mandatory";
var _INVALID_EMAIL = "Please enter valid email";
var _REQUIRED_DAY = "Date field is mandatory";
var _REQUIRED_MONTH = "Month field is mandatory";
var _REQUIRED_YEAR = "Year field is mandatory";
var _TELEPHONE_REQUIRED = "Telephone number is mandatory";
var _TELEPHONE_NUMBERONLY = "Telephone number should be numeric only";
var _STDCODE_REQUIRED = "STD code is mandatory";
var _STDCODE_NUMBERONLY = "STD code should be numeric only";
var _TELEPHONE_LIMIT = "Enter not more than 10 digits";

// Menu  Dropdown Toggle
if ($('.menu-trigger').length) {
  $(".menu-trigger").on('click', function () {
    $(this).toggleClass('active');
    $('.header-area .nav').slideToggle(200);
  });
}
// Header Memu Fixed
// $(window).bind('scroll', function () {
//   if ($(window).scrollTop() > 0) {
//     $('.header').addClass('fix-top');
//   } else {
//     $('.header').removeClass('fix-top');
//   }
// });

jQuery(window).bind('scroll', function () { 
  if ($(window).scrollTop() > 200) {
     $('.header').addClass('fix-top'); } 
     else { $('.header').removeClass('fix-top');}})
     


