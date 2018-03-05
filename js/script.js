// Fonction pour l'atout dynamique
var i = 0;
function dynamiqueAtout() {
  $('.atout1').css('transform', 'rotate(' + i + 'deg)');
  i = i + 1;
  };
  function dynamiqueAtoutTurn(){
    setInterval(dynamiqueAtout, 3);
  }
//

//Fonction pour l'atout Esprit d'équipe

function equipeAtoutDashed(){
  $('.atout3 a').css('border', '1px dashed black');
}
function equipeAtoutDashedInterval(){
    setInterval(equipeAtoutDashed, 2000);
}
function equipeAtoutSolid(){
  $('.atout3 a').css('border', '1px solid black');
}
function equipeAtoutSolidTimer(){
  setTimeout(equipeAtoutSolid, 1000);
}
function equipeAtoutSolidInterval(){
  setInterval(equipeAtoutSolidTimer, 2000);
}
//


///////////////////////TESTS/////////////////////////



/////////////////////////////////////////////////////

$(document).ready(function(){
  //Rigoureux

  //

  //Dynamique
dynamiqueAtoutTurn();
  //

  //Esprit d'équipe
equipeAtoutDashedInterval();
equipeAtoutSolidInterval();
  //

function atoutDisplay(){
  var atoutShowHide = 1;
  if (atoutShowHide == 1){

    $('.atout1').on('click',function(){
      $('.atout1').css('display', 'none');
      $('.atout2').css('display', 'none');
      $('.atout3').css('display', 'none');
      $('.mes-atouts').css('background-image', 'url(../image/ski.gif)');
      atoutShowHide = 2;

    })
    $('.atout2').on('click',function(){
      $('.atout1').css('display', 'none');
      $('.atout2').css('display', 'none');
      $('.atout3').css('display', 'none');
      $('.mes-atouts').css('background-image', '');
      atoutShowHide = 2;
    })
    $('.atout3').on('click',function(){
      $('.atout1').css('display', 'none');
      $('.atout2').css('display', 'none');
      $('.atout3').css('display', 'none');
      $('.mes-atouts').css('background-image', '');
      atoutShowHide = 2;
    })
    atoutShowHide = 2;

  }

  else if (atoutShowHide == 2) {
    $('.mes-atouts').on('click',function(){
      $('.atout1').css('display', 'inherit');
      $('mes-atouts').css('background-color','red');
    })
  }
}


atoutDisplay();



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


function rotateArrow(){
  setInterval(up, 1000);
  setInterval(down, 1000);
}
function up(){
  $('.arrow').css('transition', '0.2s');
  $('.arrow').css('margin-bottom', '10px');
}
function down(){
  $('.arrow').css('transition', '0.2s');
  $('.arrow').css('margin-bottom', '0px');
}
rotateArrow();


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
    if (heightScroll > scrollPercent * 0.73 || heightScroll < scrollPercent * 0.5){
      $('.arrow-left-projets').css('width', '50%');
      $('.arrow-right-projets').css('width', '50%');
      $('.title-section-projets').css('opacity', '0');
      $('.title-section-projets').css('transition', '2s');
    }

    //Partie mes compétences.
    if (heightScroll > scrollPercent * 0.73){
      $('.arrow-left-competences').css('width', '0px');
      $('.arrow-left-competences').css('transition', '1.5s');
      $('.arrow-right-competences').css('width', '0px');
      $('.arrow-right-competences').css('transition', '1.5s');
      $('.title-section-competences').css('opacity', '1');
    }
    if (heightScroll < scrollPercent * 0.73 || heightScroll > scrollPercent * 0.90){
      $('.arrow-left-competences').css('width', '50%');
      $('.arrow-right-competences').css('width', '50%');
      $('.title-section-competences').css('opacity', '0');
      $('.title-section-competences').css('transition', '2s');
    }

    //Partie mes atouts.
    if (heightScroll > scrollPercent * 0.90){
      $('.arrow-left-atouts').css('width', '0px');
      $('.arrow-left-atouts').css('transition', '1.5s');
      $('.arrow-right-atouts').css('width', '0px');
      $('.arrow-right-atouts').css('transition', '1.5s');
      $('.title-section-atouts').css('opacity', '1');
    }
    if (heightScroll < scrollPercent * 0.90 || heightScroll > scrollPercent * 0.999){
      $('.arrow-left-atouts').css('width', '50%');
      $('.arrow-right-atouts').css('width', '50%');
      $('.title-section-atouts').css('opacity', '0');
      $('.title-section-atouts').css('transition', '2s');
    }

  });
});
