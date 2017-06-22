
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
    {selector: '#sketchCard', offset: 20, callback: function() {
      Materialize.fadeInImage("#sketchCard");
    } },
    {selector: '#sixtyCard', offset: 20, callback: function() {
      Materialize.fadeInImage("#sixtyCard");
    } },
    {selector: '#monteCard', offset: 20, callback: function() {
      Materialize.fadeInImage("#monteCard");
    } },
    {selector: '#tysonCard', offset: 20, callback: function() {
      Materialize.fadeInImage("#tysonCard");
    } },
    {selector: '#sullyCard', offset: 20, callback: function() {
      Materialize.fadeInImage("#sullyCard");
    } },
    {selector: '#challengeCard', offset: 20, callback: function() {
      Materialize.fadeInImage("#challengeCard");
    } },
    {selector: '#dwarfCard', offset: 5, callback: function() {
      Materialize.fadeInImage("#dwarfCard");
    } },
    {selector: '#tightcard', offset: 5, callback: function() {
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

//Contact Icons

$('#envIcon').hover(function(){
        $('.slideTextE p').animate({margin: '2vh 0 0 0'}, 500)
    }, function(){
        $('.slideTextE p').animate({margin: '-12vh 0 0 0'}, 500)
    });

$('#gitIcon').hover(function(){
        $('.slideTextG p').animate({margin: '2vh 0 0 0'}, 500)
    }, function(){
        $('.slideTextG p').animate({margin: '-12vh 0 0 0'}, 500)
    });

$('#linkIcon').hover(function(){
        $('.slideTextL p').animate({margin: '2vh 0 0 0'}, 500)
    }, function(){
        $('.slideTextL p').animate({margin: '-12vh 0 0 0'}, 500)
    });


//INTRO

    var a = $(".text");
    var b = $(".hr");
    var c = $(".descText");
    var d = $(".descDetails");

    a.delay(1000).animate({top: "0", opacity: "1"}, 1000, function() {
        b.delay(500).animate({marginLeft: "0"}, 800, function() {
            c.animate({marginTop: "10"}, 800, function() {
              c.delay(3000).animate({marginTop:"-70"}, 600, function(){
                d.animate({marginTop:"-4"}, 800)
              });
            });
        });
    });

//SCROLL

$(".descDetails").on("click", function( e ) {
    e.preventDefault();
    $("body, html").animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 600);

  });

})();
