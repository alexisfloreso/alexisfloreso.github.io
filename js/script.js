// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function abrirModal(e){

    console.log(e.id)
    modal.style.display = "block";
    if( e.id === "pad" ){
      document.getElementById("galeria-pad").classList.add('galeria')
    }else if( e.id === "placii" ){
      document.getElementById("galeria-placii").classList.add('galeria')
    }else if( e.id === "sicstra" ){
      document.getElementById("galeria-sicstra").classList.add('galeria')
    }
}

// When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  document.getElementById("galeria-pad").classList.remove('galeria')
  document.getElementById("galeria-placii").classList.remove('galeria')
  document.getElementById("galeria-sicstra").classList.remove('galeria')

  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    document.getElementById("galeria-pad").classList.remove('galeria')
    document.getElementById("galeria-placii").classList.remove('galeria')
    document.getElementById("galeria-sicstra").classList.remove('galeria')    
    modal.style.display = "none";
  }
}