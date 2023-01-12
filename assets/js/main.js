$(document).ready(function(){
    let crearBtn = $('#crearBtn');
    let spinnerStatic = $('#spinnerStatic');
    let form = $('#form');

    crearBtn.on('click', () =>{
        form.addClass('fade-out')
        spinnerStatic.addClass('spinner');
        spinnerStatic.addClass('fade-in');
        

    }) 
    //código a ejecutar cuando el DOM está listo para recibir instrucciones.
 });


