//Modo oscuro

const btnSwitch = document.querySelector("#switch");
const conteinerDiv = document.querySelector(".conteiner");
btnSwitch.addEventListener("click", () => {
  conteinerDiv.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
});
//Funciones
function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let imgEncriptado = document.getElementById("img-encriptador");
  if (/^[a-z\s]+$/.test(texto)) {
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");

    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = textoCifrado;
      imgEncriptado.src = "./img/encriptado.jpg";
    } else {
      imgEncriptado.src = "./img/Muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent =
        "Ingresa el texto que deseas encriptar o desencriptar";
      alert("Debes ingresar algún texto");
    }
  } else {
    alert(
      "El texto no puede contener letras mayúsculas, acentos o caracteres especiales"
    );
  }
}
function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let imgEncriptado = document.getElementById("img-encriptador");
  if (/^[a-z\s]+$/.test(texto)) {
    let textoDesencriptado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    if (texto.length != 0) {
      document.getElementById("texto").value = textoDesencriptado;
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = textoDesencriptado;
      imgEncriptado.src = "./img/encriptado.jpg";
    } else {
      imgEncriptado.src = "./img/Muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent =
        "Ingresa el texto que deseas encriptar o desencriptar";
      alert("Debes ingresar algún texto");
    }
  } else {
    alert(
      "El texto no puede contener letras mayúsculas, acentos o caracteres especiales"
    );
  }
}

function copiarTexto() {
  let textoCifrado = document.getElementById("texto").value;
  let tempInput = document.createElement("textarea");
  tempInput.value = textoCifrado;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Texto copiado al portapapeles");
}
