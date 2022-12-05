class RiveroSolve {
  static calcularMediana = (array) => {
    array.sort((a, b) => a - b);
    const mitadIndice = Math.floor(array.length / 2) - 1;
    const mediana = arrayEsPar(array)
      ? this.calcularPromedio([array[mitadIndice], array[mitadIndice + 1]])
      : array[mitadIndice + 1];
    return mediana;
  };

  static calcularModa = (array) => {
    const valores = {};
    const valoresRepetidosArray = array.map((e) => {
      valores[e] = valores[e] ? valores[e] + 1 : 1;
      return valores;
    })[array.length - 1];

    const valoresRepetidos = Object.entries(valoresRepetidosArray);

    const valoresOrdenados = valoresRepetidos.sort((a, b) => b[1] - a[1]);
    const modaArray = valoresOrdenados.filter(
      (valor) => valor[1] === valoresOrdenados[0][1]
    );
    const moda = modaArray.map((e) => e[0]);

    return moda;
  };
  static promedioPonderado = (array) => {
    const valoresFinales = array.map((element) => element.dato * element.valor);
    const sumaDeValores = valoresFinales.reduce((e, eA) => e + eA);
    const totalDeValores = array.map((e) => e.valor);
    const sumaTotalDeValores = totalDeValores.reduce((e, eA) => e + eA);
    const resultado = sumaDeValores / sumaTotalDeValores;
    return resultado.toFixed(2);
  };

  static calcularPromedio(valores) {
    const sumadDeValores = valores.reduce((i, iA) => i + iA);
    const cantidadDeValores = valores.length;
    const resultado = sumadDeValores / cantidadDeValores;
    return resultado;
  }

  static calcularPercentil90 = (array) => {
    array.sort((a, b) => a - b);
    const indice = Math.floor((array.length * 9) / 10)
    const p90 = arrayEsPar(array)
      ? this.calcularPromedio([array[indice], array[indice + 1]])
      : array[indice + 1];
    return p90;
  };

  static proyeccion = (array, años) => {
    let i = 0;
    const diferencias = array.map((e) => {
      const aumento = (e) / array[i - 1]
      i++;
      return aumento
    });
    diferencias.splice(0 , 1)
    const diferenciaPromedio = this.calcularMediana(diferencias)
    const nuevosSalarios = [...array]
    for (let i = 0; i < años; i++) {
      const nuevoSalario = nuevosSalarios[nuevosSalarios.length - 1] * diferenciaPromedio
      nuevosSalarios.push(nuevoSalario)
    }

    return nuevosSalarios[nuevosSalarios.length - 1]
  };
}
const arrayEsPar = (array) => (array.length % 2 ? false : true);

export default RiveroSolve;