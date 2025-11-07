const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit",(e)=>{
   const elementos = document.querySelectorAll(".campoObligatorio");
    mostarerror = document.querySelector(".mostarerror");
   for (let elemento of elementos){
        if(elemento.value===""){
            e.preventDefault();
            mostarerror.innerHTML="<p>faltan llenar campos</p>";
        }
   }
});