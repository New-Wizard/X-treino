// (function () {
    

   
//     // import { Equipe } from './script.js';
    

//     //pega os dados do json
//     let season
//     async function carregarDados() {
//         const resposta = await fetch("assets/data/season2.0.json")
//         season = await resposta.json()
        
//     }
//     //o js para e espera pegar todos os dados no json
//     async function iniciarApp() {
//         await carregarDados()
//         tabela.start()

//     }
//     iniciarApp()
    

//     //aq ele pega e armazena todos os dados do json
//     const pegarDados = {
//         start(seasonSelecionada) {
//             //aq da um return nessa função com os dados
//             return this.pegarDadosDasEquipes(season[seasonSelecionada], seasonSelecionada)
//         },
//         pegarDadosDasEquipes(seasonSelecionada, nomeDaSeason) {
            
//             //aq ira pegar o arrays dos objs equipes
//             const arrayEquipes = seasonSelecionada.equipes
//             const resultadoFinal = []
//             const data = seasonSelecionada.data
//             const nomeSeason = nomeDaSeason
    

//             arrayEquipes.forEach(infoEquipes => {
//                 //serve para ajudar ao somatorio
//                 let equipePts = 0
//                 let kill = 0
//                 let posição = 0
//                 let booyah = 0

//                 //aq mostra os nomes das equipes
//                 const nomeEquipe = infoEquipes.equipe
            
//                 const arrayQuedas = infoEquipes.detalhes
//                 arrayQuedas.forEach(objQuedas => {
//                     //aq pega todos os dados das quedas,kills,posição
//                     const numeroDaQueda = objQuedas.queda
//                     const numeroDaKills = objQuedas.kills
//                     const numeroDaPosição = objQuedas.posicao
//                     //seria aq os dados individuais
//                     if (numeroDaPosição == 1) {
//                         booyah++
//                     }
//                     //aq soma todas as kills e os pts de posição e armazena
//                     kill = this.somarPontosKill(kill, numeroDaKills)
//                     posição = this.somaPontosPosição(posição, numeroDaPosição)
//                 })
//                 equipePts = kill + posição
                
//                 resultadoFinal.push({
//                     equipe: nomeEquipe,
//                     quedas: 5,
//                     abate: kill,
//                     booyah: booyah,
//                     pts: equipePts,
//                     data: data,
//                     nomeSeason: nomeSeason
//                 })
                
//             });
            
//             return resultadoFinal
            
            
//         },
//         //aq soma as kills
//         somarPontosKill(kill, numeroDaKills) {
//             let pontuaçãoKill = kill + numeroDaKills
//             return pontuaçãoKill
//         },
//         //ira somar os pontos de posição
//         somaPontosPosição(posição, numeroDaPosição) {
//             //essa variavel ir armazenar os pts por queda
//             let pontoGanhoPorPartida = 0
            
//             //ira percorrer os objs dentro do array classificação
//             classificação.forEach(objClassificaçãoPosição => {
//                 //se o numero da posição na queda for igual ao numero de posição da lista faça
//                 if (objClassificaçãoPosição.posição == numeroDaPosição) {
//                     //ira somar os pts feito na partida
//                     pontoGanhoPorPartida = objClassificaçãoPosição.pts
//                 }
//             })
//             return pontoGanhoPorPartida + posição
            
//         }

//     }

//     const classificação = [
//         {posição: 1, pts: 12},
//         {posição: 2, pts: 9 },
//         {posição: 3, pts: 8 },
//         {posição: 4, pts: 7 },
//         {posição: 5, pts: 6},
//         {posição: 6, pts: 5},
//         {posição: 7, pts: 4},
//         {posição: 8, pts: 3},
//         {posição: 9, pts: 2},
//         {posição: 10, pts: 1},
//         {posição: 11, pts: 0},
//         { posição: 12, pts: 0 },
//         {kill: 1},
//     ]
        
        
//     const tabela = {
//         start() {
//             const select = document.querySelector(".container_select")

//             //quando seleciona o valor do select
//             select.addEventListener("change", () => {
//                 const seasonSelecionada = select.value

//                 //são as seasons que estão do json
//                 const seasonJson = season
//                 //pega todos os seasons um por um
//                 for (let seasons in seasonJson){
//                     //se as seasons do json for igual a que foi selecionada faz isso
//                     if (seasons == seasonSelecionada) {
                        
//                         const dados = pegarDados.start(seasonSelecionada)
//                         this.carregarTabela(dados)
//                     }

//                 }
//             })
//         },
//         carregarTabela(arrayEquipes) {
//             const tbody = document.querySelector("#tbody")
//             tbody.innerHTML = ""
//             arrayEquipes.sort((a, b) => b.pts - a.pts)
//             arrayEquipes.forEach((equipe, index) => {
//                 equipe.posicao = index + 1

//                 criarTabela.start(equipe.posicao, equipe.equipe, equipe.quedas, equipe.abate, equipe.booyah, equipe.pts, equipe.data, equipe.nomeSeason)
//             })
//             // new Equipe("1", "detonadores", 1,2,3,4, "01/01/2000", "season6")
//         }
//     }



//     const criarTabela = {
//             start(posição, equipe, quedas, abate, booyah, pts, data, season){
//                 this.posição = posição
//                 this.equipe = equipe
//                 this.quedas = quedas
//                 this.abate = abate
//                 this.booyah = booyah
//                 this.pts = pts
//                 this.data = data
//                 this.season = season
//                 const tbody = document.querySelector("#tbody")
//                 this.criarTr(tbody)
//                 this.mudarData(data)
//                 this.mudarNomeSeason(season)
//             },
//             criarTr(tbody) {
//                 const createTr = document.createElement("tr")
//                 const tr = tbody.appendChild(createTr)
            
//                 this.criarPosiçãoTd(tr)
//                 this.criarEquipeTd(tr)
//                 this.criarQuedasTd(tr)
//                 this.criarAbatesTd(tr)
//                 this.criarBooyahTd(tr)
//                 this.criarPtsTd(tr)
//             },
//             criarPosiçãoTd(tr) {
//                 const td = document.createElement("td")
//                 const p = document.createElement("p")
//                 td.setAttribute("class", "posicao")
//                 tr.appendChild(td)
//                 td.appendChild(p)
//                 p.innerHTML = `${this.posição}`
//             },
//             criarEquipeTd(tr) {
//                 const td = document.createElement("td")
//                 td.setAttribute("class", "equipe")
//                 tr.appendChild(td)
//                 td.innerHTML = `${this.equipe}`
//             },
//             criarQuedasTd(tr) {
//                 const td = document.createElement("td")
//                 td.setAttribute("class", "quedas")
//                 tr.appendChild(td)
//                 td.innerHTML = `${this.quedas}`
//             },
//             criarAbatesTd(tr) {
//                 const td = document.createElement("td")
//                 td.setAttribute("class", "abates")
//                 tr.appendChild(td)
//                 td.innerHTML = `${this.abate}`
//             },
//             criarBooyahTd(tr) {
//                 const td = document.createElement("td")
//                 const p = document.createElement("p")
//                 if (this.booyah > 0){
//                     td.setAttribute("class", "vitoria booay")
//                 } else {
//                     td.setAttribute("class", "vitoria")
//                 }
//                 tr.appendChild(td)
//                 td.appendChild(p)
//                 p.innerHTML = `${this.booyah}`
//             },
//             criarPtsTd(tr) {
//                 const td = document.createElement("td")
//                 const strong = document.createElement("strong")
//                 td.setAttribute("class", "pts")
//                 tr.appendChild(td)
//                 td.appendChild(strong)
//                 strong.innerHTML = `${this.pts}`
//             },
//             mudarData(data) {
//                 const spanData = document.querySelector("#data")
//                 spanData.innerHTML = `${data}`
//             },
//             mudarNomeSeason(nomeSeason) {
//                 const season = document.querySelector("#rankingSeason")
//                 season.innerHTML = `SEASON ${nomeSeason.slice(-1)}`
//             }

//     }
// })()



(function () {
    let seasonData;
    let jogadoresData;

    // Carrega os dois arquivos JSON necessários
    async function carregarDados() {
        // Ajuste os caminhos se necessário
        const respostaSeason = await fetch("assets/data/season2.0.json");
        seasonData = await respostaSeason.json();

        // Aqui você carrega o JSON de jogadores que você me enviou
        // Vou assumir que o nome do arquivo é jogadores6.json ou similar
        const respostaJogadores = await fetch("assets/data/jogadores2.0.json");
        jogadoresData = await respostaJogadores.json();
    }

    async function iniciarApp() {
        await carregarDados();
        tabela.start();
    }
    iniciarApp();

    const pegarDados = {
        start(seasonSelecionada) {
            const dadosEquipes = this.pegarDadosDasEquipes(seasonData[seasonSelecionada], seasonSelecionada);
            const dadosJogadores = jogadoresData[seasonSelecionada] ? jogadoresData[seasonSelecionada].jogadores : [];
            
            return { equipes: dadosEquipes, jogadores: dadosJogadores };
        },

        pegarDadosDasEquipes(seasonSelecionada, nomeDaSeason) {
            if (!seasonSelecionada) return [];
            
            const arrayEquipes = seasonSelecionada.equipes;
            const resultadoFinal = [];
            const data = seasonSelecionada.data;

            arrayEquipes.forEach(infoEquipes => {
                let kill = 0;
                let posicaoPts = 0;
                let booyah = 0;
                const nomeEquipe = infoEquipes.equipe;
                const arrayQuedas = infoEquipes.detalhes;

                arrayQuedas.forEach(objQuedas => {
                    if (objQuedas.posicao == 1) booyah++;
                    kill += objQuedas.kills;
                    posicaoPts = this.somaPontosPosição(posicaoPts, objQuedas.posicao);
                });

                resultadoFinal.push({
                    equipe: nomeEquipe,
                    quedas: arrayQuedas.length,
                    abate: kill,
                    booyah: booyah,
                    pts: kill + posicaoPts,
                    data: data,
                    nomeSeason: nomeDaSeason
                });
            });
            return resultadoFinal;
        },

        somaPontosPosição(totalAtual, numeroDaPosição) {
            const ptsMapa = { 1: 12, 2: 9, 3: 8, 4: 7, 5: 6, 6: 5, 7: 4, 8: 3, 9: 2, 10: 1 };
            return totalAtual + (ptsMapa[numeroDaPosição] || 0);
        }
    };

    const tabela = {
        start() {
            const select = document.querySelector(".container_select");
            select.addEventListener("change", () => {
                const seasonSelecionada = select.value;
                
                // Só executa se a season existir no nosso novo JSON
                if (seasonData[seasonSelecionada]) {
                    const todosOsDados = pegarDados.start(seasonSelecionada);
                    this.carregarTabela(todosOsDados.equipes);
                    this.carregarRankJogador(todosOsDados.jogadores, todosOsDados.equipes);
                }
            });
        },

        carregarTabela(arrayEquipes) {
            const tbody = document.querySelector("#tbody");
            tbody.innerHTML = "";
            arrayEquipes.sort((a, b) => b.pts - a.pts);
            
            arrayEquipes.forEach((equipe, index) => {
                new Eequipe(index + 1, equipe.equipe, equipe.quedas, equipe.abate, equipe.booyah, equipe.pts, equipe.data, equipe.nomeSeason);
            });
        },

        carregarRankJogador(listaJogadores, equipesOrdenadas) {
            const grid = document.querySelector(".top_kills_grid");
            grid.innerHTML = "";

            if (!listaJogadores) return;

            // Criar mapa de posições para desempate
            const mapaPosicao = {};
            equipesOrdenadas.forEach((time, index) => {
                mapaPosicao[time.equipe] = index + 1;
            });

            // Ordenar jogadores: 1º Kills, 2º Posição da Equipe
            listaJogadores.sort((a, b) => {
                if (b.kill !== a.kill) return b.kill - a.kill;
                return mapaPosicao[a.equipe] - mapaPosicao[b.equipe];
            });

            listaJogadores.forEach((valor, index) => {
                this.renderizarCardJogador(index + 1, valor.jogador, valor.kill, valor.equipe);
            });
        },

        renderizarCardJogador(posicao, nome, kill, equipe) {
            const grid = document.querySelector(".top_kills_grid");
            const card = document.createElement("div");
            
            let classeRank = "kill_card";
            if (posicao <= 3) classeRank += ` rank-${posicao}`;
            card.className = classeRank;

            card.innerHTML = `
                <p class="badge">${posicao}</p>
                <div class="player_info">
                    <h4>${nome}</h4>
                    <p>${equipe}</p>
                </div>
                <div class="kill_stats">
                    <span class="lbl">Kills</span>
                    <span class="num">${kill}</span>
                </div>
            `;
            grid.appendChild(card);
        }
    };

    class Eequipe {
        constructor(posição, equipe, quedas, abate, booyah, pts, data, season) {
            this.posição = posição;
            this.equipe = equipe;
            this.quedas = quedas;
            this.abate = abate;
            this.booyah = booyah;
            this.pts = pts;
            this.data = data;
            this.season = season;
            this.render();
        }

        render() {
            const tbody = document.querySelector("#tbody");
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td class="posicao"><p>${this.posição}</p></td>
                <td class="equipe">${this.equipe}</td>
                <td class="quedas">${this.quedas}</td>
                <td class="abates">${this.abate}</td>
                <td class="vitoria ${this.booyah > 0 ? 'booay' : ''}"><p>${this.booyah}</p></td>
                <td class="pts"><strong>${this.pts}</strong></td>
            `;
            tbody.appendChild(tr);

            document.querySelector("#data").innerHTML = this.data;
            document.querySelector("#rankingSeason").innerHTML = `SEASON ${this.season.slice(-1)}`;
        }
    }
})();




