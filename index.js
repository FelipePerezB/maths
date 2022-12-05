// // const ladoCuadrado = 3
// // const perimetroCuadrado = ladoCuadrado * 4
// // const areaCuadrado = ladoCuadrado ** 2

// // console.log({
// //     ladoCuadrado,
// //     perimetroCuadrado,
// //     areaCuadrado
// // });

// const calcularTriangulo = (base, lado2, lado3, altura) => {
//     const lados = [base, lado2, lado3]
//     const perimetro = lados.reduce((i, iA)=>(iA+i))
//     const area = (base * altura) / 2
//     return {
//         altura,
//         lados,
//         perimetro,
//         area
//     }

// }

// console.log(calcularTriangulo(3,4,5,2))

// const calcularCuadrado = (lado) => {
//     const perimetro = lado * 4
//     const area = lado ** 2
//     return {
//         lado,
//         perimetro,
//         area
//     }

// }

// console.log(calcularCuadrado(3))

// const calcularCirculo = (radio) => {
//     const PI = Math.PI
//     const diametro = radio * 2
//     const perimetro = PI * diametro
//     const area = PI * radio ** 2
//     return {
//         radio,
//         diametro,
//         perimetro,
//         area
//     }

// }

const calcularIsoceles = (lados) => {
  let i = 0;
  const ladosClasificados = {};

  lados.sort((a, b) => a - b);
  lados.forEach((e) => {
    if(e === lados[i+2]){
        return undefined
    } else if(e === lados[i+1]){
        ladosClasificados.lado = e
    } else if(e !== ladosClasificados.lado){
        ladosClasificados.base = e
    }
    i++
  });

  if (ladosClasificados.lado) {
    const lado = ladosClasificados.lado;
    const base = ladosClasificados.base;
    const altura = Math.sqrt(lado ** 2 - base ** 2 / 4);
    const area = (altura * base) / 2;
    const perimetro = lado * 2 + base;

    return {
      lado,
      base,
      altura,
      area,
      perimetro,
    };
  } else {
    return calcularEscaleno(lados);
  }
};


const calcularEscaleno = (lados) => {
    return lados
}

console.log(calcularIsoceles([3, 6, 4]));
