function cadastrarDemanda() {
  const titulo = document.getElementById("titulo").value;
  const descricao = document.getElementById("descricao").value;
  const status = document.getElementById("status").value;

  if (titulo === "" || descricao === "") {
    alert("Preencha o título e a descrição da demanda.");
    return;
  }

  alert("Demanda cadastrada com sucesso!");

  console.log("Título:", titulo);
  console.log("Descrição:", descricao);
  console.log("Status:", status);
}
