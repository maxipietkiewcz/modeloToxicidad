const input = document.getElementById("input");
const btn = document.getElementById("btn");
const output = document.querySelector(".output");

btn.addEventListener("click", async () => {
  const text = [input.value];
  const model = await toxicity.load(0.9);
  model.classify(text).then((results) => {
    output.innerHTML = "";
    results.forEach((result) => {
      const p = document.createElement("p");
      p.append(result.label, ": ", result.results[0].match);
      output.append(p);
      console.log(result);
    });
  });
});
