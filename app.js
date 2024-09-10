
function mostrarDefinicao() {
    let definicao = document.getElementById('conteudo');
    conteudo.innerHTML = `
        <h2>${definicao.titulo}</h2>
        <p>${definicao.descricao}</p>
        <a href="${definicao.link}" target="_blank">Saiba mais</a>
    `;  
}
function mostrarSintomas() {
    let sintomasDuchenne = document.getElementById('conteudo');
    let sintomasHTML = '';

    sintomasDuchenne.descricao.forEach(faixa => {
        sintomasHTML += `
            <h3>${faixa.faixaEtaria}</h3>
            <ul>
                ${faixa.sintomas.map(sintoma => `<li>${sintoma}</li>`).join('')}
            </ul>
        `;
    });

    conteudo.innerHTML = `
        <h2>${sintomasDuchenne.titulo}</h2>
        ${sintomasHTML}
        <a href="${sintomasDuchenne.link}" target="_blank">Saiba mais</a>
    `;
}

function mostrarCausas() {
    let causas = document.getElementById('conteudo');
    conteudo.innerHTML = `
        <h2>${causas.titulo}</h2>
        <p>${causas.descricao}</p>
        <a href="${causas.link}" target="_blank">Saiba mais</a>
    `;
}

function pesquisar() {
    const pesquisaInput = document.getElementById('pesquisa').value.toLowerCase();
    const resultados = dados.filter(dado => {
      // Lógica de filtragem: ajuste de acordo com seus dados
      if (typeof dado === 'string') {
        return dado.toLowerCase().includes(pesquisaInput);
      } else if (typeof dado === 'object') {
        return dado.nome.toLowerCase().includes(pesquisaInput);
      }
    });
  
    // Exibir os resultados (ajuste de acordo com sua estrutura HTML)
    const listaResultados = document.getElementById('listaResultados');
    listaResultados.innerHTML = '';
    resultados.forEach(resultado => {
      const li = document.createElement('li');
      li.textContent = resultado.nome || resultado; // Ajuste para seus dados
      listaResultados.appendChild(li);
    });
  }

  function pesquisar() {
    const pesquisaInput = document.getElementById('pesquisa').value.toLowerCase();
    const resultados = dados.filter(dado => {
      // Lógica de filtragem: ajuste de acordo com seus dados
      if (typeof dado === 'string') {
        return dado.toLowerCase().includes(pesquisaInput);
      } else if (typeof dado === 'object') {
        return dado.nome.toLowerCase().includes(pesquisaInput);
      }
    })
const listaResultados = document.getElementById('listaResultados');
  listaResultados.innerHTML = '';
  resultados.forEach(resultado => {
    const li = document.createElement('li');
    li.textContent = resultado.nome || resultado; // Ajuste para seus dados
    listaResultados.appendChild(li);
  });
};

const pesquisaInput = document.getElementById('pesquisa');
pesquisaInput.addEventListener('input', pesquisar);