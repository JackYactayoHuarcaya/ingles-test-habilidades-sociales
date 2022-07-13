let Suma = () => {
  const d = document;
  let arregloNumerosValor = [];
  for (let i = 0; i < 42; i++) {
    arregloNumerosValor[i] = 0;
  }
  let sumaTotal = 0;
  let sumaAsertividad;
  // console.log(sumaAsertividad)
  let sumaComunicacion;
  let sumaAutoestima;
  let sumaDecisiones;
  let comunicacion, asertividad, autoestima, decisiones;
  //variables de bloques
  d.addEventListener("click", (e) => {
    console.log(e.target);
    for (let i = 1; i <= 42; i++) {
      if (e.target.name === `res-${i}`) {
        for (let j = 1; j <= 5; j++) {
          if (e.target.matches(`.res-${j}`)) {
            arregloNumerosValor[i - 1] = j;
            //suma Asertividad
            asertividad = arregloNumerosValor.filter((el, i) => i <= 11);
            sumaAsertividad = asertividad.reduce((el, i) => el + i);
            console.log(asertividad, sumaAsertividad);
            //suma comunicacion
            comunicacion = arregloNumerosValor.filter(
              (el, i) => i >= 12 && i <= 20
            );
            sumaComunicacion = comunicacion.reduce((el, i) => el + i);
            console.log(comunicacion, sumaComunicacion);
            //suma Autoestima
            autoestima = arregloNumerosValor.filter(
              (el, i) => i >= 21 && i <= 32
            );
            sumaAutoestima = autoestima.reduce((el, i) => el + i);
            console.log(autoestima, sumaAutoestima);
            //suma Decisiones
            decisiones = arregloNumerosValor.filter(
              (el, i) => i >= 33 && i <= 41
            );
            sumaDecisiones = decisiones.reduce((el, i) => el + i);
            console.log(decisiones, sumaDecisiones);
            //suma total
            sumaTotal = arregloNumerosValor.reduce((el, i) => el + i);
            console.log(sumaTotal);
            let textRes = d.querySelector(".text-res");
              textRes.textContent = `
              Asertividad: ${sumaAsertividad} 
              Comunicación: ${sumaComunicacion}  
              Autoestima: ${sumaAutoestima} 
              Decisiones: ${sumaDecisiones} 
              Total: ${sumaTotal}
              `;
          }
        }
      }
    }
  });
  return {
    sumaAsertividad,
    sumaAutoestima,
    sumaComunicacion,
    sumaDecisiones,
    sumaTotal,
  };
};
export default Suma;
