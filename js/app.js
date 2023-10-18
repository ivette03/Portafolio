const about=document.querySelector('#about-me');
const proyecto1=document.querySelector('#proyecto1');
const proyecto2=document.querySelector('#proyecto2');
const proyecto3=document.querySelector('#proyecto3');
const cargarSeccion=(entradas)=>{
    entradas.forEach((entrada)=> {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }
    });
}
const observador=new IntersectionObserver(cargarSeccion,{
    root:null,
    rootMargin:'0px 0px 0px 0px',
    threshold:0.9
});
observador.observe(about);
observador.observe(proyecto1);
observador.observe(proyecto2);
observador.observe(proyecto3);