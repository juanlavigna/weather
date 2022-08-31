let input = document.querySelector(".encabezado>input");
let botonEnviar = document.querySelector(".encabezado>button");
let contenedor = document.querySelector(".container");
let ciudad = document.querySelector("#ciudad");
let temperatura = document.querySelector("#temperatura");
let icono = document.querySelector("#wicon");
let descripcion = document.querySelector("#descripcion");

function cargarCiudad(){
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + input.value +"&appid=dcec7df661b1e6b0edab51d796b7339c&units=metric&lang=es", function(data){
        console.log(data)
        ciudad.textContent = data.name;
        temperatura.innerHTML =  `${data.main.temp}<sup>°C</sup>`
        icono.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        descripcion.textContent = data.weather[0].description;
    }).fail(()=>{
        alert("Ingresá una ciudad válida")
    })
}

function checkInput(){
    if(input.value == ""){
        alert("Ingrese el nombre de la ciudad")
    }else{
        cargarCiudad()
        input.value = ""
        contenedor.style.visibility = "visible"
    }
}

botonEnviar.addEventListener("click", checkInput)

document.body.addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        checkInput()
    }
})