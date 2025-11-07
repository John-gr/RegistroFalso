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

let nombre=document.getElementById("nombre");
nombre.addEventListener("keydown",(e)=>{
nombre.classList.add('error')
});

nombre.addEventListener("keyup",(e)=>{
let name=nombre.value;
if(name!=""){
nombre.classList.add('bien')
}
});

let ap=document.getElementById("apellidoP");
ap.addEventListener("keydown",(e)=>{
ap.classList.add('error')
});

ap.addEventListener("keyup",(e)=>{
let name=ap.value;
if(name!=""){
ap.classList.add('bien')
}
});

let am=document.getElementById("apellidoM");
am.addEventListener("keydown",(e)=>{
am.classList.add('error')
});

am.addEventListener("keyup",(e)=>{
let name=am.value;
if(name!=""){
am.classList.add('bien')
}
});

let correo=document.getElementById("correo");
correo.addEventListener("keydown",(e)=>{
correo.classList.add('error')
});

correo.addEventListener("keyup",(e)=>{
let name=correo.value;
if(name!=""){
correo.classList.add('bien')
}
});


const inputs=document.querySelectorAll(".campoObligatorio");
