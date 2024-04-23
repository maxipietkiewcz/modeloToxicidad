// Seleccionar el elemento de entrada (input) del documento HTML mediante su ID.
const input = document.getElementById("input");

// Seleccionar el botón del documento HTML mediante su ID.
const btn = document.getElementById("btn");

// Seleccionar el elemento de salida (output) del documento HTML mediante su clase.
const output = document.querySelector(".output");

// Agregar un event listener al botón que se activará cuando se haga clic.
btn.addEventListener("click", async () => {
  // Obtener el valor del texto ingresado en el elemento de entrada.
  const text = [input.value];

  // Cargar el modelo de toxicidad con un umbral del 90% de confianza.
  const model = await toxicity.load(0.9);

  // Clasificar el texto ingresado utilizando el modelo de toxicidad.
  model.classify(text).then((results) => {
    // Limpiar el contenido del elemento de salida.
    output.innerHTML = "";

    // Iterar sobre los resultados de la clasificación.
    results.forEach((result) => {
      // Crear un elemento de párrafo (<p>) para mostrar cada resultado.
      const p = document.createElement("p");

      // Agregar el nombre de la etiqueta y si el texto coincide con la etiqueta.
      p.append(result.label, ": ", result.results[0].match);

      // Agregar el elemento de párrafo al elemento de salida.
      output.append(p);

      // Imprimir el resultado en la consola del navegador.
      console.log(result);
    });
  });
});
