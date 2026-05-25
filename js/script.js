// OBTENER FORMULARIO

const formulario = document.getElementById("formulario");

// EVENTO DEL FORMULARIO

formulario.addEventListener("submit", function(evento){

    // EVITAR RECARGA
    evento.preventDefault();

    // OBTENER EL VALOR
    let meses = parseInt(document.getElementById("meses").value);

    // CONTENEDOR RESULTADO
    let resultado = document.getElementById("resultado");

    // VALIDACION

    if(meses <= 0 || isNaN(meses)){

        resultado.innerHTML = `
            <p class="mensaje">
                Ingresa un número válido de meses.
            </p>
        `;

        return;
    }

    // VARIABLES FIBONACCI

    let a = 0;
    let b = 1;
    let c;

    // TOTAL AHORRADO
    let total = 0;

    // TABLA
    let tabla = `
        <table>

            <tr>
                <th>Mes</th>
                <th>Ahorro (Bs.)</th>
                <th>¿Mes Primo?</th>
            </tr>
    `;

    // CICLO

    for(let i = 1; i <= meses; i++){

        // VALOR FIBONACCI

        if(i == 1){
            c = 1;
        }
        else if(i == 2){
            c = 1;
        }
        else{
            c = a + b;
            a = b;
            b = c;
        }

        // SUMAR TOTAL

        total += c;

        // VERIFICAR SI ES PRIMO

        let primo = esPrimo(i);

        // MENSAJE

        let mensajePrimo = primo
            ? "Sí ⭐"
            : "No";

        // CLASE CSS

        let clase = primo
            ? "primo"
            : "no-primo";

        // AGREGAR FILA

        tabla += `
            <tr>

                <td>${i}</td>

                <td>${c}</td>

                <td class="${clase}">
                    ${mensajePrimo}
                </td>

            </tr>
        `;
    }

    // CERRAR TABLA

    tabla += `</table>`;

    // MOSTRAR RESULTADO

    resultado.innerHTML = `
        ${tabla}

        <div class="total">
            💵 Total ahorrado: Bs. ${total}
        </div>
    `;
});

// FUNCION PARA VERIFICAR PRIMOS

function esPrimo(numero){

    // EL 1 NO ES PRIMO

    if(numero <= 1){
        return false;
    }

    // CONTADOR

    let divisores = 0;

    // RECORRER

    for(let i = 1; i <= numero; i++){

        if(numero % i == 0){
            divisores++;
        }
    }

    // SI TIENE SOLO 2 DIVISORES

    if(divisores == 2){
        return true;
    }
    else{
        return false;
    }
}