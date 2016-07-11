
(function(){

  console.log('script loaded')

  $('.card.blue-grey.darken-1').hover(function(){
    console.log('mouse noticed')
    $(this).css("box-shadow", "5px 5px 5px 5px #ccc")
  }, function(){
    $(this).css("box-shadow", "0px 0px 0px 0px #ccc")
  })


  var options = [
    {selector: '#iconMenu', offset: 50, callback: function() {
      Materialize.fadeInImage("#iconMenu");
    } }
  ];
  Materialize.scrollFire(options);





})();
