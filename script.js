function pesquisar() {

let section = document.getElementById("resultados-pesquisa")

let campoPesquisa = document.getElementById("campo-pesquisa").value

if (!campoPesquisa) {
  section.innerHTML = "<p>Nada foi Encontrado</p>"
  return
}
 
campoPesquisa = campoPesquisa.toLowerCase()
  
let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";
  
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
  
    resultados += `
    <div class="item-resultado">
        <h2>
            <a href="###"target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais Informações</a>
    </div> 
    `;
    }
  }
  
  if (!resultados) {
    resultados = "<p>Nada foi Encontrado</p>"
  }
  
  section.innerHTML = resultados
}






  
  
  
  







let dados = [
  {
  titulo : "RPG",
  descricao : "RPG, sigla para Role-Playing Game ou Jogo de Interpretação de Papéis, é uma experiência colaborativa onde os jogadores assumem o papel de personagens em um mundo imaginário.",
  link : "https://pt.m.wikipedia.org/wiki/Role-playing_game",
  tags:"rpg role"
  },
  {
  titulo : "Sobrevivência",
  descricao : "Jogos de sobrevivência desafiam os jogadores a permanecerem vivos em ambientes hostis, coletando recursos, construindo abrigos e enfrentando perigos.",
  link : "https://pt.m.wikipedia.org/wiki/Jogo_eletr%C3%B4nico_de_sobreviv%C3%AAncia",
  tags: "survivor sobrevivencia sobrevivencia"
  },
  {
  titulo : "Plataforma",
  descricao : "Jogos de plataforma exigem habilidade e precisão para guiar um personagem através de níveis, pulando obstáculos e derrotando inimigos.",
  link : "https://pt.m.wikipedia.org/wiki/Jogo_eletr%C3%B4nico_de_plataforma",
  tags: "pular obstáculo obstaculo"
  }
]