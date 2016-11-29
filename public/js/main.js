
(function(){

  console.log('script loaded')


  $('.card.blue-grey.darken-1').hover(function(){
    console.log('mouse noticed')
    $(this).css("box-shadow", "5px 5px 5px 5px #ccc")
  }, function(){
    $(this).css("box-shadow", "0px 0px 0px 0px #ccc")
  })


  var options = [
    {selector: '#sketchCard', offset: 0, callback: function() {
      Materialize.fadeInImage("#sketchCard");
    } },
    {selector: '#sixtyCard', offset: 200, callback: function() {
      Materialize.fadeInImage("#sixtyCard");
    } },
    {selector: '#tysonCard', offset: 50, callback: function() {
      Materialize.fadeInImage("#tysonCard");
    } },
    {selector: '#sullyCard', offset: 50, callback: function() {
      Materialize.fadeInImage("#sullyCard");
    } },
    {selector: '#seanCard', offset: 50, callback: function() {
      Materialize.fadeInImage("#seanCard");
    } },
    {selector: '#challengeCard', offset: 200, callback: function() {
      Materialize.fadeInImage("#challengeCard");
    } }
  ];
  Materialize.scrollFire(options);

})();
