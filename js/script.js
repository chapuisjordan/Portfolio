$(document).ready(function(){

  $('.name').css('transform', 'translateX(0%)');
  $('.name').css('opacity', '1');
  $('.name').css('transition','3s');
  function qualificationAppear(){
    setTimeout(afterTwoSeconds, 1000);
  }
  function barreAppear(){
    setTimeout(afterOneSeconds, 3500);
  }
  function afterOneSeconds(){
    $('.barre').css('transform', 'translateX(0%)');
    $('.barre').css('opacity', '1');
    $('.barre').css('transition','3s');
  }
  function afterTwoSeconds(){
    $('.div-for-border').css('transform', 'translateX(0%)');
    $('.div-for-border').css('opacity', '1');
    $('.div-for-border').css('transition','3s');
  }
barreAppear();
qualificationAppear();






  $(window).on('scroll', function(){
    var heightScroll = Math.round($(window).scrollTop());
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var scrollPercent =(docHeight - winHeight);


    //Partie à propos de moi.
   if (heightScroll > scrollPercent * 0.18){

      $('.arrow-left-moi').css('width', '0px');
      $('.arrow-left-moi').css('transition', '1.5s');
      $('.arrow-right-moi').css('width', '0px');
      $('.arrow-right-moi').css('transition', '1.5s');
      $('.title-section-moi').css('opacity', '1');
      $('.title-section-moi').css('transition', '2s');

    }
    if (heightScroll > scrollPercent * 0.5|| heightScroll < scrollPercent * 0.15){
      $('.arrow-left-moi').css('width', '50%');
      $('.arrow-right-moi').css('width', '50%');
      $('.title-section-moi').css('opacity', '0');

    }


    //Partie mes projets.
    if (heightScroll > scrollPercent * 0.5){
      $('.arrow-left-projets').css('width', '0px');
      $('.arrow-left-projets').css('transition', '1.5s');
      $('.arrow-right-projets').css('width', '0px');
      $('.arrow-right-projets').css('transition', '1.5s');
      $('.title-section-projets').css('opacity', '1');

    }
    if (heightScroll > scrollPercent * 0.77 || heightScroll < scrollPercent * 0.5){
      $('.arrow-left-projets').css('width', '50%');
      $('.arrow-right-projets').css('width', '50%');
      $('.title-section-projets').css('opacity', '0');
      $('.title-section-projets').css('transition', '2s');
    }

    //Partie mes compétences.
    if (heightScroll > scrollPercent * 0.80){
      $('.arrow-left-competences').css('width', '0px');
      $('.arrow-left-competences').css('transition', '1.5s');
      $('.arrow-right-competences').css('width', '0px');
      $('.arrow-right-competences').css('transition', '1.5s');
      $('.title-section-competences').css('opacity', '1');
    }
    if (heightScroll < scrollPercent * 0.77 || heightScroll > scrollPercent * 0.999){
      $('.arrow-left-competences').css('width', '50%');
      $('.arrow-right-competences').css('width', '50%');
      $('.title-section-competences').css('opacity', '0');
      $('.title-section-competences').css('transition', '2s');
    }
  });
});
