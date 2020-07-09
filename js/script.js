/*--------------Navbar------------*/
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

$(document).ready(function () {
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


//validar usuario
/*function aler(form) {
  form.nome.value = form.nome.value.toLowerCase()
  form.senha.value = form.senha.value.toLowerCase()

  if (form.nome.value == "paulo" && form.senha.value == "123" || form.nome.value == "kalil" && form.senha.value == "4002") {
    location = "file:///C:/Users/06967780174/Documents/GitHub/Materialize2.0/Matrialize2.0/index.html"
  

  } else {
    form.nome.value == " "
    form.senha.value == " "
    alert("senha ou usuario incorreto")
  }
}*/


function logado(form)
{
  var logar = false
  if(form.nome.value != " " && form.senha.value != " ")
  {
    logar = true
    location = "file:///C:/Users/06967780174/Documents/GitHub/Materialize2.0/Matrialize2.0/index.html"
  }else{
    alert("tente novamente")
  }
}
