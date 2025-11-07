const formulario =document.querySelector(".formulario");

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

let name=document.getElementById("nombre");
nombre.addEventListener("keyup",(e)=>{
let name=nombre.value;
    let mostarerror = document.querySelector(".error");

if(name!=""){
mostarerror.innerHTML="<p>funciona</p>";
//name.style.color = 'green';
nombre.classList.add('error')
}
});

const inputs=document.querySelectorAll(".campoObligatorio");
