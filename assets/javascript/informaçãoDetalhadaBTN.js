(function(){
    
    let season
    let jogadores
    async function carregarDados() {
        const resposta = await fetch("assets/data/season2.0.json")
        season = await resposta.json()

        const resposta2 = await fetch("assets/data/jogadores3.0.json")
        jogadores = await resposta2.json()
    }
    //o js para e espera pegar todos os dados no json
    async function iniciarApp() {
        await carregarDados()
        
    }
    iniciarApp()

    const dados = {
        start(trName,click) {
            
            const select = document.querySelector(".container_select").value
            

            // //quando seleciona o valor do select
            // select.addEventListener("change", () => {
            //     const seasonSelecionada = select.value

            //     //são as seasons que estão do json
            //     const seasonJson = season

            //     //pega todos os seasons um por um
            //     for (let seasons in seasonJson){

            //         //se as seasons do json for igual a que foi selecionada faz isso
            //         if (seasons == seasonSelecionada) {
            //             this.teste(seasonSelecionada, trName)
                        
            //         }

            //     }
            // })

            this.teste(select, trName, click)
        },
        teste(seasonSelecionada, trName, click) {
            
            let posição = season[seasonSelecionada].equipes
            posição.forEach(equipe => {
                const nomeEquipe = equipe.equipe
                
                if (click.id === trName.getAttribute("name")){
                    console.log(season[seasonSelecionada].equipe)
                }
                

                
            });
            




            let kills
            let quedas
        }
    }

    //criar uma estrutura de repetição para os dados

    const informaçãoDealhada = {
        start(posição, kills, ptsPosição, PtsKills, totalPartida, total){
            //aq ira pegar cada event de click na pagina
            document.addEventListener("click", (event) => {
                
                //aq cria um contador de 1 ate 12, para percorrer cada btn
                for(let i = 1; i<=12;i++){

                    //se o btn for igual o id do btn no tr, faz isso
                    if (event.target.id === `info${i}`) {
                        const tr = document.querySelector(`#tr${i}`)
                        // console.log(tr)
                        
                        dados.start(tr, event.target)
                        this.criarDivInfo(tr, i)
                        
                    }
                }
                
            });
        },
        criarDivInfo(tr, i) {
            //aq ira pode apertar todos os btns e ira aparecer
            const trInfo = tr.nextSibling
            
            if (trInfo && trInfo.id === `info${i}`) {
                trInfo.remove()
                return
            }
           
            //aq cria o tr e o td, que ira ser add
            const createTr = document.createElement("tr")
            const createTd = document.createElement("td")

            //colocar o colspan no td
            createTd.setAttribute("colspan", "7")
            //aq add a class no td e no tr
            createTr.setAttribute("id", `info${i}`)
            createTd.setAttribute("class", "td_infoPartida")
            createTr.appendChild(createTd)

            //aq cria a div que ira conter as infos
            const divPrincipal = document.createElement("div")
            //aq add a class na div principal
            divPrincipal.setAttribute("class", "desempenhoDetalhado")
            this.criarH2(divPrincipal)
            //aq coloca a div princial dentro do td
            createTd.appendChild(divPrincipal)
            //aq coloca o tr ao lado do tr que esta no site
            tr.after(createTr)
            


            const divQuedas = document.createElement("div")
            divQuedas.setAttribute("class", "desempenhoDetalhado_quedas")
            divPrincipal.appendChild(divQuedas)

            
            for (let i = 1; i <= 5; i++){
                this.criarDivCadaPartida(divQuedas)
                
            }
            
        },
        //colocar o nome do time aq==========
        criarH2(divPrincipal) {
            const h2 = document.createElement("h2")
            const span = document.createElement("span")
            span.textContent = "colocar time"
            h2.textContent = `📊 Desemprenho Detalhado - `
            h2.appendChild(span)
            divPrincipal.appendChild(h2)
        },

        criarDivCadaPartida(divPrincipal) {
            const divCadaPartida = document.createElement("div")
            divCadaPartida.setAttribute("class", "desempenhoDetalhado_quedas_partida")
            divPrincipal.appendChild(divCadaPartida)
            this.createH3(divCadaPartida)
            this.createPPosição(divCadaPartida)
            this.createPKills(divCadaPartida)
            this.createPPtsPosição(divCadaPartida)
            this.createPPtsKills(divCadaPartida)
            this.createPTolal(divCadaPartida)
        },
        createH3(divCadaPartida) {
            const h3 = document.createElement("h3")
            const span = document.createElement("span")
            span.textContent = "1"
            h3.textContent = "Partida"

            divCadaPartida.appendChild(h3)
        },
        createPPosição(divCadaPartida) {
            const p = document.createElement("p")
            p.setAttribute("class", "desempenhoDetalhado_quedas_partida_posição")
            const span = document.createElement("span")
            span.textContent = "2"
            p.textContent = "Posição:"
            p.appendChild(span)
            divCadaPartida.appendChild(p)
        },
        createPKills(divCadaPartida) {
            const p = document.createElement("p")
            p.setAttribute("class", "desempenhoDetalhado_quedas_partida_kills")
            const span = document.createElement("span")
            span.textContent = "2"
            p.textContent = "Kills:"
            p.appendChild(span)
            divCadaPartida.appendChild(p)
        },
        createPPtsPosição(divCadaPartida) {
            const p = document.createElement("p")
            p.setAttribute("class", "desempenhoDetalhado_quedas_ptsPosição")
            const span = document.createElement("span")
            span.textContent = "2"
            p.textContent = "Pts Posição:"
            p.appendChild(span)
            divCadaPartida.appendChild(p)
        },
        createPPtsKills(divCadaPartida) {
            const p = document.createElement("p")
            p.setAttribute("class", "desempenhoDetalhado_quedas_ptsKills")
            const span = document.createElement("span")
            span.textContent = "2"
            p.textContent = "Pts Kills:"
            p.appendChild(span)
            divCadaPartida.appendChild(p)
        },
        createPTolal(divCadaPartida) {
            const p = document.createElement("p")
            p.setAttribute("class", "desempenhoDetalhado_quedas_total")
            const span = document.createElement("span")
            span.textContent = "2"
            p.textContent = "Total:"
            p.appendChild(span)
            divCadaPartida.appendChild(p)
        },
        
    }

    informaçãoDealhada.start()
})()
































// (function(){
//     let season;
//     let jogadores;

//     async function carregarDados() {
//         const resposta = await fetch("assets/data/season2.0.json");
//         season = await resposta.json();

//         const resposta2 = await fetch("assets/data/jogadores3.0.json");
//         jogadores = await resposta2.json();
//     }

//     async function iniciarApp() {
//         await carregarDados();
//         dados.start();
//     }
//     iniciarApp();

//     const dados = {
//         start() {
//             const select = document.querySelector(".container_select");

//             // Define a season inicial (caso o select já tenha um valor ao carregar a página)
//             if (select.value) {
//                 informaçãoDealhada.setSeasonAtual(select.value);
//             }

//             select.addEventListener("change", () => {
//                 const seasonSelecionada = select.value;
                
//                 // Atualiza a season para a lógica de exibição detalhada saber de onde puxar
//                 informaçãoDealhada.setSeasonAtual(seasonSelecionada);

//                 const seasonJson = season;
//                 for (let seasons in seasonJson){
//                     if (seasons == seasonSelecionada) {
//                         this.teste(seasonSelecionada);
//                     }
//                 }
//             });
            
//             informaçãoDealhada.start();
//         },
        
//         teste(seasonSelecionada) {
//             let posição = season[seasonSelecionada].equipes;
//             posição.forEach(element => {
//                 console.log(element);
//             });
//             console.log(posição);
//         }
//     }

//     const informaçãoDealhada = {
//         seasonAtual: null,

//         setSeasonAtual(novaSeason) {
//             this.seasonAtual = novaSeason;
//         },

//         start() {
//             document.addEventListener("click", (event) => {
//                 if (!this.seasonAtual) return; // Evita erro se nenhuma season estiver carregada

//                 for(let i = 1; i <= 12; i++){
//                     if (event.target.id === `info${i}`) {
//                         const tr = document.querySelector(`#tr${i}`);
                        
//                         // Puxa o time baseado no ID do botão (Ex: info1 -> índice 0 do JSON)
//                         const equipeData = season[this.seasonAtual].equipes[i - 1];
                        
//                         // Verifica se existe dado de jogadores para essa equipe na season
//                         const equipeNome = equipeData.equipe;
//                         const jogadoresData = jogadores[this.seasonAtual].equipes[equipeNome];

//                         this.criarDivInfo(tr, i, equipeData, jogadoresData);
//                     }
//                 }
//             });
//         },

//         criarDivInfo(tr, i, equipeData, jogadoresData) {
//             const trInfo = tr.nextSibling;
//             if (trInfo && trInfo.id === `info${i}`) {
//                  trInfo.remove();
//                  return;
//             }
           
//             const createTr = document.createElement("tr");
//             const createTd = document.createElement("td");

//             createTd.setAttribute("colspan", "7");
//             createTr.setAttribute("id", `info${i}`);
//             createTd.setAttribute("class", "td_infoPartida");
//             createTr.appendChild(createTd);

//             const divPrincipal = document.createElement("div");
//             divPrincipal.setAttribute("class", "desempenhoDetalhado");
            
//             // Passa o nome da equipe para o H2
//             this.criarH2(divPrincipal, equipeData.equipe);
            
//             createTd.appendChild(divPrincipal);
//             tr.after(createTr);
            
//             const divQuedas = document.createElement("div");
//             divQuedas.setAttribute("class", "desempenhoDetalhado_quedas");
//             divPrincipal.appendChild(divQuedas);
            
//             // Aqui iteramos exatamente as 5 quedas que estão no JSON da Equipe
//             equipeData.detalhes.forEach((quedaDetail, index) => {
//                 // index vai de 0 a 4 (referente as quedas 1 a 5)
//                 this.criarDivCadaPartida(divQuedas, quedaDetail, index, jogadoresData);
//             });
//         },

//         criarH2(divPrincipal, nomeEquipe) {
//             const h2 = document.createElement("h2");
//             const span = document.createElement("span");
//             span.textContent = nomeEquipe;
//             h2.textContent = `📊 Desempenho Detalhado - `;
//             h2.appendChild(span);
//             divPrincipal.appendChild(h2);
//         },

//         criarDivCadaPartida(divPrincipal, quedaDetail, indexQueda, jogadoresData) {
//             const divCadaPartida = document.createElement("div");
//             divCadaPartida.setAttribute("class", "desempenhoDetalhado_quedas_partida");
//             divPrincipal.appendChild(divCadaPartida);

//             this.createH3(divCadaPartida, quedaDetail.queda);
//             this.createPPosição(divCadaPartida, quedaDetail.posicao);
//             this.createPKills(divCadaPartida, quedaDetail.kills);
            
//             // Lógica de cálculo de pontos (você pode alterar a pontuação por posição depois)
//             let ptsPosicao = this.calcularPtsPosicao(quedaDetail.posicao);
//             let ptsKills = quedaDetail.kills; // Assumindo 1 ponto por Kill
//             let total = ptsPosicao + ptsKills;

//             this.createPPtsPosição(divCadaPartida, ptsPosicao);
//             this.createPPtsKills(divCadaPartida, ptsKills);
//             this.createPTolal(divCadaPartida, total);

//             // Se os dados dos jogadores desta equipe existirem, cria a listagem
//             if(jogadoresData) {
//                 this.criarDivJogadores(divCadaPartida, jogadoresData, indexQueda);
//             }
//         },

//         calcularPtsPosicao(posicao) {
//             // Tabela fictícia de exemplo (Ajuste para as regras do seu campeonato)
//             const tabela = { 1: 12, 2: 9, 3: 8, 4: 7, 5: 6, 6: 5, 7: 4, 8: 3, 9: 2, 10: 1, 11: 0, 12: 0 };
//             return tabela[posicao] || 0;
//         },

//         createH3(divCadaPartida, numeroQueda) {
//             const h3 = document.createElement("h3");
//             const span = document.createElement("span");
//             span.textContent = numeroQueda;
//             h3.textContent = "Partida "; // Espaço após Partida para não colar no span
//             h3.appendChild(span);
//             divCadaPartida.appendChild(h3);
//         },

//         createPPosição(divCadaPartida, posicao) {
//             const p = document.createElement("p");
//             p.setAttribute("class", "desempenhoDetalhado_quedas_partida_posição");
//             const span = document.createElement("span");
//             span.textContent = posicao;
//             p.textContent = "Posição: ";
//             p.appendChild(span);
//             divCadaPartida.appendChild(p);
//         },

//         createPKills(divCadaPartida, kills) {
//             const p = document.createElement("p");
//             p.setAttribute("class", "desempenhoDetalhado_quedas_partida_kills");
//             const span = document.createElement("span");
//             span.textContent = kills;
//             p.textContent = "Kills: ";
//             p.appendChild(span);
//             divCadaPartida.appendChild(p);
//         },

//         createPPtsPosição(divCadaPartida, ptsPosicao) {
//             const p = document.createElement("p");
//             p.setAttribute("class", "desempenhoDetalhado_quedas_ptsPosição");
//             const span = document.createElement("span");
//             span.textContent = ptsPosicao;
//             p.textContent = "Pts Posição: ";
//             p.appendChild(span);
//             divCadaPartida.appendChild(p);
//         },

//         createPPtsKills(divCadaPartida, ptsKills) {
//             const p = document.createElement("p");
//             p.setAttribute("class", "desempenhoDetalhado_quedas_ptsKills");
//             const span = document.createElement("span");
//             span.textContent = ptsKills;
//             p.textContent = "Pts Kills: ";
//             p.appendChild(span);
//             divCadaPartida.appendChild(p);
//         },

//         createPTolal(divCadaPartida, total) {
//             const p = document.createElement("p");
//             p.setAttribute("class", "desempenhoDetalhado_quedas_total");
//             const span = document.createElement("span");
//             span.textContent = total;
//             p.textContent = "Total: ";
//             p.appendChild(span);
//             divCadaPartida.appendChild(p);
//         },

//         // Nova função para renderizar os dados do JSON de jogadores em cada partida
//         criarDivJogadores(divCadaPartida, jogadoresData, indexQueda) {
//             const divJogadores = document.createElement("div");
//             divJogadores.setAttribute("class", "desempenhoDetalhado_jogadores"); // Adicione um estilo para essa classe no CSS

//             for (const [nomeJogador, arrayKills] of Object.entries(jogadoresData)) {
//                 // Acessa o índice correto de Kills do array [Queda1, Queda2, Queda3, Queda4, Queda5]
//                 const killsNestaQueda = arrayKills[indexQueda]; 
                
//                 // Só exibe se não for null (null geralmente significa que o jogador não jogou a queda)
//                 if (killsNestaQueda !== null) {
//                     const p = document.createElement("p");
//                     p.style.fontSize = "12px"; // Tamanho menor sugerido (ajuste no CSS depois)
//                     p.textContent = `👤 ${nomeJogador}: ${killsNestaQueda} abates`;
//                     divJogadores.appendChild(p);
//                 }
//             }
//             divCadaPartida.appendChild(divJogadores);
//         }
//     }
// })();










