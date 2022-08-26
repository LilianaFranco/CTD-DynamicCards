/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
  imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
  lenguajes: "HTML y CSS",
  bimestre: "1er bimestre",
},
{
  imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
  lenguajes: "Javascript",
  bimestre: "2do bimestre",
},
{
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
  lenguajes: "React JS",
  bimestre: "3er bimestre",
},
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let fechaDeHoy = new Date();
  let annoActual = fechaDeHoy.getFullYear();
  datosPersona.nombre = prompt("Ingresa tu nombre");
  let anno = parseInt(prompt("Ingresa el año en que naciste"));
  datosPersona.edad = annoActual - anno;
  datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
  confirm("¿Te interesa JavaScript?") ? datosPersona.interesPorJs = "Si" : datosPersona.interesPorJs = "No"
  return datosPersona;
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let arregloSpans = document.querySelectorAll(".card-header span")
  let arregloPersona = Object.keys(datosPersona).map(
    function(key) {
      return datosPersona[key];
    });

  arregloSpans.forEach((element, index) => {
    element.innerText = arregloPersona[index];
  });
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  listado.forEach(element =>{
    createMateria(element.imgUrl, element.lenguajes, element.bimestre)
  })
  materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas);
}

function createMateria(imagen, lenguajes, bimestre) {
  const postTemplate = `
          <div class="caja">
          <img src="${imagen}" alt = "${lenguajes}">
          <h2 class = "languajes">${lenguajes}</h2>
          <p class = "bimestre">${bimestre}</p>
          </div>
  `;
  document.querySelector("#fila").innerHTML += postTemplate;
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let body = document.getElementById("sitio")
  body.classList.toggle("dark")
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
window.addEventListener("keydown", function(event){
  if(event.key=="f"){
    this.document.getElementById("sobre-mi").classList.remove("oculto")
  }
})


