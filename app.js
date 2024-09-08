function pesquisar() {
  const section = document.getElementById("resultados-pesquisa");
  const campoPesquisa = document
    .getElementById("campo-pesquisa")
    .value.toLowerCase();

  if (campoPesquisa === "") {
    section.innerHTML = "<p>Nada foi encontrado</p>";
    return;
  }

  const resultados = [];
  for (const dado of dados) {
    if (
      dado.titulo.toLowerCase().includes(campoPesquisa) ||
      dado.descricao.toLowerCase().includes(campoPesquisa)
    ) {
      resultados.push(`
        <div class="item-resultado">
          <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `);
    }
  }

  section.innerHTML = resultados.join("");
}
