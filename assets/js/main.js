let crearBtn = document.getElementById('crearBtn')
let spinnerStatic = document.getElementById('spinnerStatic')
let spinnerMove = document.getElementById('spinnerMove')
let form = document.getElementById('form')
crearBtn.addEventListener('click', () =>{
    form.classList.add('fade-out')
    spinnerStatic.classList.add('spinner');
    spinnerStatic.classList.add('fade-in');
    

}) 