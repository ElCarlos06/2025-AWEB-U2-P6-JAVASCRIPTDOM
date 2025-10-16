const btnCalcular = document.getElementById('btnCalcular');
const inputLado = document.getElementById('inputLado');
const resultado = document.getElementById('resultado')


btnCalcular.addEventListener('click',
    function(){
        const lado = parseFloat(inputLado.value);
        let area = 0.0;

        if(lado >0){
            area = lado*lado;
            resultado.className = 'mensaje-correcto';
            resultado.textContent = `El area es: ${area}`;
        }else{
            resultado.className = 'mensaje-error';
            resultado.textContent = 'Ingresa un valor mayor a 0 (e no es un valor valido)';
        }


    }
)
