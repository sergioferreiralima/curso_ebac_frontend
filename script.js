let form = document.querySelector('#formValidacao')
let campoA = document.forms['formValidacao']['campoA']
let campoB = document.forms['formValidacao']['campoB']
const errorMessage = document.querySelector('.error-message');
const successMessage = document.querySelector('.success-message');

form.onsubmit = function(evento){
    evento.preventDefault()

if(campoA.value < campoB.value ) {
   // campoA.classList.add('inputError')

   successMessage.style.display = 'block';
   errorMessage.style.display = 'none';

  
} else{
   errorMessage.style.display = 'block'
   successMessage.style.display = 'none';

}

campoA.addEventListener('input', function () {
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
});

campoB.addEventListener('input', function () {
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
});
   
}


