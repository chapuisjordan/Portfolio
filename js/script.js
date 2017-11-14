$(document).ready(function(){
  $(window).on('scroll', function(){
    var heightScroll = Math.round($(window).scrollTop());
    var perc = $(document).height();

    //Partie à propos de moi.
    if (heightScroll > perc *0.16){
      $('.arrow-hide-moi').css('transform', 'translateX(-100%)');
      $('.arrow-hide-moi').css('transition', '1.5s');
    }
    if (heightScroll > perc *0.40 || heightScroll < perc *0.15){
      $('.arrow-hide-moi').css('transform', 'translateX(0%)');
    }

    //Partie mes projets.
    if (heightScroll > perc *0.40){
      $('.arrow-hide-projets').css('transform', 'translateX(-100%)');
      $('.arrow-hide-projets').css('transition', '1.5s');
    }
    if (heightScroll > perc *0.57 || heightScroll < perc *0.35){
      $('.arrow-hide-projets').css('transform', 'translateX(0%)');
    }

    //Partie mes compétences.
    if (heightScroll > perc *0.57){
      $('.arrow-hide-competences').css('transform','translateX(-100%)');
      $('.arrow-hide-competences').css('transition','1.5s');
    }
    if (heightScroll < perc *0.55 || heightScroll > perc *0.99){
      $('.arrow-hide-competences').css('transform','translateX(0%)');
    }

  });
});
