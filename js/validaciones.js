export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }
 
  if (input.validity.valid ){  
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-mensage-error").innerHTML = ""
  }else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-mensage-error").innerHTML = nostrarMensajeDeError(tipoDeInput, input)
}
}


const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensajeDeError = {
  nombre: {
    valueMissing: "Este campo nombre no puede estar vacio",
  },
  email: {
    valueMissing: "Este campo correo no puede estar vacio",
    typeMismatch: "El correo no es valido",
  },
  password:{
    valueMissing: "Este campo contraseña no puede estar vacio",
    patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
  },
  naciemiento: {
    valueMissing: "Este campo no puede estar vacio",
    customError: "Debes tener al menos 18 años de edad",
  },
  numero: {
    valueMissing: "Este campo no puede estar vacio",
    patternMismatch: "EL formato requerido es XXXXXXXXXX 10 números",
  },
  numero: {
    valueMissing: "Este campo no puede estar vacio",
    patternMismatch: "EL formato requerido es XXXXXXXXXX 10 números",
  },
  direccion: {
    valueMissing: "Este campo no puede estar vacio",
    patternMismatch: "La direccion debe contener entre 10 a 40 caracteres.",
  },
  ciudad: {
    valueMissing: "Este campo no puede estar vacio",
    patternMismatch: "La ciudad debe contener entre 10 a 40 caracteres.",
  },
  estado: {
    valueMissing: "Este campo no puede estar vacio",
    patternMismatch: "El estado debe contener entre 10 a 40 caracteres.",
  },
}
const validadores = {
  nacimiento: (input) => validarNacimiento(input),
};

function mostrarMensajeDeError(tipoDeInput, input){
  let mensaje = "";
  tipoDeErrores.forEarch((error) => {
  if(input.validity[error]){
    console.log(tipoDeInput, error);
    console.log(input.validity[error]);
    console.log(mensajesDeError[tipoDeInput][error]);
    mesaje = mensajesDeError(tipoDeInput)[error];
  } 
});
  return mensaje;
}


function validarNacimiento(input) {
  const fechaCliente = new Date(input.value);
  let mensaje = "";

  if (!mayorDeEdad(fechaCliente)) {
    mensaje = "Debes tener al menos 18 años de edad";
  }

  input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha) {
  const fechaActual = new Date();
  const diferenciaFechas = new Date(
    fecha.getUTCFullYear() + 18,
    fecha.getUTCMonth(),
    fecha.getUTCDate()
  );
  return diferenciaFechas <= fechaActual;
}
