//Endpoint de la API BINANCE
let endpoint = 'https://api.binance.com/api/v3/ticker/price';

//API Fetch -> Para realizar las peticiones HTTP para la obtencion de la INFO
fetch(endpoint)
    .then(respuesta => respuesta.json())//promise obteniendo respuesta incluyendo el metodo json a la funcion respuesta
    .then(datos => mostrarDatos(datos))//promise para la obtencion de los datos
    .catch(e => console.log(e))//metodo catch para capturar y mostrar posibles ERRORES



//Mostar datos
const mostrarDatos = (data) => {
    let tabla = ''

    for(let i=0; i<data.length; i++){
        tabla += `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>` //Agredando los datos al HTML
    }
    document.getElementById('data').innerHTML = tabla
}