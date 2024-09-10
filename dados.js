let definicao = {
    titulo: "Distrofia Muscular de Duchenne (DMD)",
    descricao: "É uma doença neuromuscular genética, que se caracteriza como um distúrbio degenerativo progressivo e irreversível no tecido muscular, em especial a musculatura esquelética, que recobre totalmente o esqueleto e está presa aos ossos. A doença também afeta a musculatura cardíaca e o sistema nervoso",
    link: "https://www.pfizer.com.br/sua-saude/doencas-raras/distrofia-muscular-de-duchenne",
};
var sintomasDuchenne = {
  titulo: "Sintomas da Distrofia muscular de Duchenne",
  descricao: [
    {
      faixaEtaria: "0-4 anos",
      sintomas: [
        "Inflamação logo após o nascimento;",
        "Fibrose muscular (cicatrização) observada a partir de 1 ano de idade;",
        "Atrasos motores;",
        "Outros atrasos, por exemplo, fala."
      ]
    },
    {
      faixaEtaria: "5-7 anos",
      sintomas: [
        "Fraqueza muscular progressiva;",
        "Aumento de panturrilhas;",
        "Andar na ponta dos pés;",
        "Dificuldade em pé de supino;",
        "Acúmulo de gordura no músculo." 
      ]
    },
    {
      faixaEtaria: "8-11 anos",
      sintomas: [
          "Atrasos de marcos motores;",
          "Diminuição da capacidade de caminhada;",
          "Uso de cadeira de rodas em meio período."
      ]
    },
    {
      faixaEtaria: "12-19 anos",
      sintomas: [
          "Redução da função do membro superior, pulmão e coração;",
          "Perda de deambulação;",
          "Suporte ventilatório muitas vezes necessário;",
          "Incapaz de realizar atividades de vida diária."
      ]
    },
    {
      faixaEtaria: "Adultos",
      sintomas: [
          "Aumento do problema cardíaco;",
          "Insuficiência cardíaca;",
          "Expectativa de vida severamente reduzida."
      ],
    },
  ],
  link: "https://www.neurologica.com.br/blog/quais-sao-os-sinais-e-sintomas-da-distrofia-muscular-de-duchenne/"
};
let causas = {
  titulo: "Causas da Distrofia Muscular de Duchenne",
  descricao: "A distrofia muscular de Duchenne é causada por mutações no gene DMD, que está presente no cromossomo X e codifica a proteína citoesquelética distrofina, responsável por estabilizar o sarcolema (membrana da célula muscular).  Quando essa proteína está ausente ou alterada, o sarcolema torna-se mais frágil e rompe-se mais facilmente. A distrofia muscular de Duchenne tem padrão de herança recessiva ligada ao X e afeta principalmente meninos.",
  link: "https://blog.mendelics.com.br/distrofia-muscular-de-duchenne/#:~:text=A%20distrofia%20muscular%20de%20Duchenne%20tem%20padr%C3%A3o%20de%20heran%C3%A7a%20recessiva,ocorre%20principalmente%20muta%C3%A7%C3%B5es%20de%20ponto."
};
let distrofina = new Image();
  imagem.src = "C:\Users\Maria\gemini\distrofina mapa.png"
  imagem.alt = "Proteina da distrofina";
  function mostrarDefinicao() {
    let definicao = document.getElementById('conteudo');
    conteudo.innerHTML = `
        <h2>${definicao.titulo}</h2>
        <p>${definicao.descricao}</p>
        <a href="${definicao.link}" target="_blank">Saiba mais</a>
    `;  
}
function mostrarSintomas() {
    let conteudo = document.getElementById('conteudo');
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
    let conteudo = document.getElementById('conteudo');
    conteudo.innerHTML = `
        <h2>${causas.titulo}</h2>
        <p>${causas.descricao}</p>
        <a href="${causas.link}" target="_blank">Saiba mais</a>
    `;
}