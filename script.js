const btnNovaDemanda = document.getElementById("btnNovaDemanda");
const formulario = document.getElementById("formulario");
const btnSalvar = document.getElementById("btnSalvar");
const listaDemandas = document.getElementById("listaDemandas");

btnNovaDemanda.addEventListener("click", function () {
  formulario.style.display = "block";
});

btnSalvar.addEventListener("click", function () {

  const titulo = document.getElementById("titulo").value;
  const descricao = document.getElementById("descricao").value;
  const status = document.getElementById("status").value;

  if (titulo === "" || descricao === "") {
    alert("Preencha o título e a descrição.");
    return;
  }

  const demanda = document.createElement("div");

  demanda.innerHTML = `
    <h3>${titulo}</h3>
    <p>${descricao}</p>

    <label>Status:</label>

    <select>
      <option value="Aberta" ${status === "Aberta" ? "selected" : ""}>
        Aberta
      </option>

      <option value="Em andamento" ${status === "Em andamento" ? "selected" : ""}>
        Em andamento
      </option>

      <option value="Concluída" ${status === "Concluída" ? "selected" : ""}>
        Concluída
      </option>
    </select>

    <hr>
  `;

  listaDemandas.appendChild(demanda);

  document.getElementById("titulo").value = "";
  document.getElementById("descricao").value = "";

  formulario.style.display = "none";
});
