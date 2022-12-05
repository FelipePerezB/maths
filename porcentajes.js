const btn = document.getElementById("calcular");
const inputResultado = document.getElementById("resultado");
const inputPrecio = document.getElementById("precio");
const inputDescuento = document.getElementById("descuento");

const cupones = [
  {
    codigo: "GYQGWYGQ",
    valor: "10",
  },
  {
    codigo: "GSGSUIWHI",
    valor: "20",
  },
  {
    codigo: "GYQGWYGQ",
    valor: "10",
  },
];

const obtenerNuevoPrecio = () => {
  const campoDescuento = inputDescuento.value;
  let descuento = cupones.find(
    (cupon) => cupon.codigo === campoDescuento
  ).valor;
  if (!descuento) {
    descuento = Number(campoDescuento);
  }

  const precio = Number(inputPrecio.value);
  let rta;
  if (!precio) {
    rta = "¡Añade el precio original!";
  } else if (!descuento) {
    rta = "¡Añade el descuento!";
  } else if (descuento > 100) {
    rta = "¡El descuento tiene que ser inferior al 100%!";
  } else {
    const nuevoPrecio = (precio * (100 - descuento)) / 100;
    rta = `¡El precio final es ${nuevoPrecio}!`;
  }
  resultado.innerText = rta;
};

btn.addEventListener("click", obtenerNuevoPrecio);
