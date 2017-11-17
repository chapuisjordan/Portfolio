$(document).ready(function(){
  $(window).on('scroll', function(){
    var heightScroll = Math.round($(window).scrollTop());
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var scrollPercent =(docHeight - winHeight);

    //Partie à propos de moi.
   if (heightScroll > scrollPercent * 0.18){
      $('.arrow-left-moi').css('transform', 'translateX(-100%)');
      $('.arrow-left-moi').css('transition', '1.5s');
      $('.arrow-right-moi').css('transform', 'translateX(100%)');
      $('.arrow-right-moi').css('transition', '1.5s');
    }
    if (heightScroll > scrollPercent * 0.5|| heightScroll < scrollPercent * 0.15){
      $('.arrow-left-moi').css('transform', 'translateX(0%)');
      $('.arrow-right-moi').css('transform', 'translateX(0%)');

    }

    //Partie mes projets.
    if (heightScroll > scrollPercent * 0.5){
      $('.arrow-left-projets').css('transform', 'translateX(-100%)');
      $('.arrow-left-projets').css('transition', '1.5s');
      $('.arrow-right-projets').css('transform', 'translateX(100%)');
      $('.arrow-right-projets').css('transition', '1.5s');

    }
    if (heightScroll > scrollPercent * 0.82 || heightScroll < scrollPercent * 0.45){
      $('.arrow-left-projets').css('transform', 'translateX(0%)');
      $('.arrow-right-projets').css('transform', 'translateX(0%)');
    }

    //Partie mes compétences.
    if (heightScroll > scrollPercent * 0.80){
      $('.arrow-hide-competences').css('transform','translateX(-100%)');
      $('.arrow-hide-competences').css('transition','1.5s');
    }
    if (heightScroll < scrollPercent * 0.75 || heightScroll > scrollPercent * 0.99){
      $('.arrow-hide-competences').css('transform','translateX(0%)');
    }
  });
});
