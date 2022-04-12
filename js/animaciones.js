/////////////////////   ANIMACION PARA LOS HOBBIES     ///////////////////////////////

let animado = document.querySelectorAll(".hobbies-items");

function mostrar(){
  let scrollTop = document.documentElement.scrollTop;

    for(var i=0; i<animado.length; i++){
      let alturaAnimado = animado[i].offsetTop;
     
        
        if(alturaAnimado + 90 < scrollTop){

            animado[i].style.opacity=1;
            animado[i].classList.add("mostrar-arriba");
        }
        
      }  
}

window.addEventListener('scroll', mostrar);