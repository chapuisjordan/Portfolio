$(document).ready(function(){
  $(window).on('scroll', function(){
    var heightScroll = Math.round($(window).scrollTop());
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var scrollPercent =(docHeight - winHeight);

    //Partie à propos de moi.
    if (heightScroll > scrollPercent * 0.18){
      $('.arrow-hide-moi').css('transform', 'translateX(-100%)');
      $('.arrow-hide-moi').css('transition', '1.5s');
    }
    if (heightScroll > scrollPercent * 0.5|| heightScroll < scrollPercent * 0.15){
      $('.arrow-hide-moi').css('transform', 'translateX(0%)');
    }

    //Partie mes projets.
    if (heightScroll > scrollPercent * 0.5){
      $('.arrow-hide-projets').css('transform', 'translateX(-100%)');
      $('.arrow-hide-projets').css('transition', '1.5s');
    }
    if (heightScroll > scrollPercent * 0.82 || heightScroll < scrollPercent * 0.45){
      $('.arrow-hide-projets').css('transform', 'translateX(0%)');
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
