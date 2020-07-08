/*--------------Navbar------------*/
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

/*--------------carousel------------*/


var instance = M.Carousel.init({
    fullWidth: true,
    
  });
 
  // Or with jQuery

  $('.carousel.carousel-slider').carousel({
    fullWidth: true
    
  });
var instance2 = M.Carousel.next({
  
});

function validar()
{
  var valid = document.getElementsByClassName('email');
  if(valid === 'pauloG')
  {
    console.log('certo');
  }
}
  