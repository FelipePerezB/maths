import RiveroSolve from "./rivero-solve.mjs";
import salarios from "./salarios.js";

const analisisPersonal = (nombre) => {
  const persona = salarios.find((persona) => persona.name === nombre);
  const salariosPersona = persona.trabajos.map((trabajo) => trabajo.salario);
  const empresas = persona.trabajos.map((trabajo) => trabajo.empresa);

  const modaSalarios = RiveroSolve.calcularModa(salariosPersona);
  const mediaSalarios = RiveroSolve.calcularMediana(salariosPersona);
  const promedioSalarios = RiveroSolve.calcularPromedio(salariosPersona);

  const modaEmpresa = RiveroSolve.calcularModa(empresas);

  const proyeccionSalario = RiveroSolve.proyeccion(salariosPersona, 10);

  return {
    persona,
    promedioSalarios,
    modaSalarios,
    mediaSalarios,
    modaEmpresa,
    proyeccionSalario,
  };
};

const obtenerEmpresas = (salarios) => {
  const empresas = {};
  salarios.forEach((e) => {
    const trabajos = e.trabajos;
    trabajos.forEach((trabajo) => {
      if (!empresas[trabajo.empresa]) {
        empresas[trabajo.empresa] = {};
      }
      if (!empresas[trabajo.empresa][trabajo.year]) {
        empresas[trabajo.empresa][trabajo.year] = [];
      }
      empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    });
  });

  const empresasArray = Object.entries(empresas);
  empresasArray.forEach((empresa) => {
    const salariosPorAño = [];
    const nombre = empresa[0];
    const years = empresa[1];
    const yearsArray = Object.entries(years);
    yearsArray.forEach((year) => {
      const salarios = year[1];
      const promedioAño = RiveroSolve.calcularMediana(salarios);
      salariosPorAño.push(promedioAño);
    });
    const proyeccion = RiveroSolve.proyeccion(salariosPorAño, 30);
    empresas[nombre].proyeccion = Number(proyeccion.toFixed(2));
  });
  return empresas;
};

const medianaGeneral = (salarios) => {
  const salariosArray = [];
  salarios.forEach((persona) => {
    const salario = persona.trabajos.map((trabajo) => trabajo.salario);
    const medianaSalario = RiveroSolve.calcularMediana(salario);
    salariosArray.push(medianaSalario);
  });
  const medianaGeneral = RiveroSolve.calcularMediana(salariosArray);
  const top10 = RiveroSolve.calcularPercentil90(salariosArray)
  console.log({ 
    medianaGeneral,
    top10,
    salariosArray
   });
};

