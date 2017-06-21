
(function(){

  console.log('script loaded')

//Materialize

  $(document).ready(function(){
    $('.slider').slider();
  });

  $('.card.blue-grey.darken-1').hover(function(){
    console.log('mouse noticed')
    $(this).css("box-shadow", "5px 5px 5px 5px #ccc")
  }, function(){
    $(this).css("box-shadow", "0px 0px 0px 0px #ccc")
  })


  var options = [
    {selector: '#sketchCard', offset: 200, callback: function() {
      Materialize.fadeInImage("#sketchCard");
    } },
    {selector: '#sixtyCard', offset: 200, callback: function() {
      Materialize.fadeInImage("#sixtyCard");
    } },
    {selector: '#monteCard', offset: 50, callback: function() {
      Materialize.fadeInImage("#monteCard");
    } },
    {selector: '#tysonCard', offset: 50, callback: function() {
      Materialize.fadeInImage("#tysonCard");
    } },
    {selector: '#sullyCard', offset: 50, callback: function() {
      Materialize.fadeInImage("#sullyCard");
    } },
    {selector: '#challengeCard', offset: 200, callback: function() {
      Materialize.fadeInImage("#challengeCard");
    } },
    {selector: '#dwarfCard', offset: 50, callback: function() {
      Materialize.fadeInImage("#dwarfCard");
    } },
    {selector: '#tightcard', offset: 200, callback: function() {
      Materialize.fadeInImage("#tightcard");
    } }
  ];
  Materialize.scrollFire(options);

//Navbar

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#navMenu').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();


    if(Math.abs(lastScrollTop - st) <= delta)
        return;


    if (st > lastScrollTop && st > navbarHeight){
        $('#navMenu').removeClass('nav-down').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('#navMenu').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}



})();
