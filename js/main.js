
$("document").ready(function () {

$(".hamburger").click(function () {
  $('.hamburger').toggleClass('is-active');
  $(".overlay").fadeToggle();
});

var slider = tns({
  container: ".launchpad__wrap",
  loop: false,
  edgePadding: 0,
  mouseDrag: true,
});

$(".overlay .links a").click(function () {
  $('.hamburger').toggleClass('is-active');
$(".overlay").hide();
});

});