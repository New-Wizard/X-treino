// (function(){
    
//     let season
//     let jogadores
//     async function carregarDados() {
//         const resposta = await fetch("assets/data/season2.0.json")
//         season = await resposta.json()

//         const resposta2 = await fetch("assets/data/jogadores3.0.json")
//         jogadores = await resposta2.json()
//     }
//     //o js para e espera pegar todos os dados no json
//     async function iniciarApp() {
//         await carregarDados()
        
//     }
//     iniciarApp()

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
//         { posição: 12, pts: 0 }
//     ]


//     document.addEventListener("click", (event) => {
                
//                 //aq cria um contador de 1 ate 12, para percorrer cada btn
//                 for(let i = 1; i<=12;i++){
                    
//                     //se o btn for igual o id do btn no tr, faz isso
//                     if (event.target.id === `info${i}`) {
//                         const tr = document.querySelector(`#tr${i}`)
//                         // console.log(tr)
//                         dados.start(tr, event.target)
                        
                        
//                     }
//                 }
                
//             });







//     const dados = {
//         start(tr,click) {
            
//             const select = document.querySelector(".container_select").value
//             this.teste(select, tr, click)
//         },
//         teste(seasonSelecionada, tr, click) {
//             let posição = season[seasonSelecionada].equipes
            
//             posição.forEach(equipe => {
//                 // const nomeEquipe = equipe.equipe
                
//                 if (click.id === tr.getAttribute("name")){
//                     const nomeEquipe = equipe.equipe
//                     if(tr.className === nomeEquipe){
//                         const detalhes = equipe.detalhes
//                         let total = 0
//                         for(let i = 0; i <detalhes.length; i++){
//                             let posição = equipe.detalhes[i].posicao
//                             let kill = equipe.detalhes[i].kills
//                             let ptsPosição = this.ptsPosição(posição)
//                             let ptsKill = kill
//                             let totalPartida = kill + ptsPosição
//                             total += totalPartida
//                             let queda = equipe.detalhes[i].queda
                            
//                             informaçãoDealhada.start(posição, kill, ptsPosição, ptsKill, totalPartida, queda, nomeEquipe, click)
//                         }
                        
                        
//                     }
//                 }
                

                
//             });
            
//         }, 
//         ptsPosição(posição){
//             for(let i = 0; i < classificação.length; i++){
//                 if(classificação[i].posição === posição){
//                     return classificação[i].pts
//                 }
//             }
//         },
//         totalPartida(totalpartida){
//             let totalPartida = totalpartida

//         }
//     }

//     //criar uma estrutura de repetição para os dados

//     const informaçãoDealhada = {
//         start(posição, kills, ptsPosição, PtsKills, totalPartida, queda, nomeEquipe, click) {
            
            
//             //aq cria um contador de 1 ate 12, para percorrer cada btn
//             for(let i = 1; i<=12;i++){

//                 //se o btn for igual o id do btn no tr, faz isso
//                 if (click.id === `info${i}`) {
                        
//                     const tr = document.querySelector(`#tr${i}`)
                    
//                     this.criarDivInfo(tr, i, posição, kills, ptsPosição, PtsKills, totalPartida, queda, nomeEquipe)
                        
//                 }
//             }
                
            
//         },
//         criarDivInfo(tr, i, posição, kills, ptsPosição, PtsKills, totalPartida, queda, nomeEquipe) {
//             //aq ira pode apertar todos os btns e ira aparecer
//             const trInfo = tr.nextSibling
//              console.log(trInfo)
//             if (trInfo && trInfo.id === `info${i}`) {
//                 trInfo.remove()
//                 return
//             }
           
//             //aq cria o tr e o td, que ira ser add
//             const createTr = document.createElement("tr")
//             const createTd = document.createElement("td")

//             //colocar o colspan no td
//             createTd.setAttribute("colspan", "7")
//             //aq add a class no td e no tr
//             createTr.setAttribute("id", `info${i}`)
//             createTd.setAttribute("class", "td_infoPartida")
//             createTr.appendChild(createTd)

//             //aq cria a div que ira conter as infos
//             const divPrincipal = document.createElement("div")
//             //aq add a class na div principal
//             divPrincipal.setAttribute("class", "desempenhoDetalhado")
//             this.criarH2(divPrincipal, nomeEquipe)
//             //aq coloca a div princial dentro do td
//             createTd.appendChild(divPrincipal)
//             //aq coloca o tr ao lado do tr que esta no site
//             tr.after(createTr)
            


//             const divQuedas = document.createElement("div")
//             divQuedas.setAttribute("class", "desempenhoDetalhado_quedas")
//             divPrincipal.appendChild(divQuedas)

            
//             // for (let i = 1; i <= 5; i++){
           
//                 this.criarDivCadaPartida(divQuedas, posição, kills, ptsPosição, PtsKills, totalPartida, queda,)
                
//             // }
            
//         },
//         //colocar o nome do time aq==========
//         criarH2(divPrincipal, nomeEquipe) {
//             const h2 = document.createElement("h2")
//             const span = document.createElement("span")
//             span.textContent = nomeEquipe
//             h2.textContent = `📊 Desemprenho Detalhado - `
//             h2.appendChild(span)
//             divPrincipal.appendChild(h2)
//         },

//         criarDivCadaPartida(divPrincipal, posição, kills, ptsPosição, PtsKills, totalPartida, queda,) {
            
//             const divCadaPartida = document.createElement("div")
//             divCadaPartida.setAttribute("class", "desempenhoDetalhado_quedas_partida")
//             divPrincipal.appendChild(divCadaPartida)
//             this.createH3(divCadaPartida, queda)
//             this.createPPosição(divCadaPartida, posição)
//             this.createPKills(divCadaPartida)
//             this.createPPtsPosição(divCadaPartida)
//             this.createPPtsKills(divCadaPartida)
//             this.createPTolal(divCadaPartida)
//         },
//         createH3(divCadaPartida, queda) {
//             const h3 = document.createElement("h3")
//             const span = document.createElement("span")
            
//             span.textContent = queda
//             h3.textContent = "Partida"
//             h3.appendChild(span)

//             divCadaPartida.appendChild(h3)
//         },
//         createPPosição(divCadaPartida, posição) {
//             const p = document.createElement("p")
//             p.setAttribute("class", "desempenhoDetalhado_quedas_partida_posição")
//             const span = document.createElement("span")
//             span.textContent = posição
//             p.textContent = "Posição:"
//             p.appendChild(span)
//             divCadaPartida.appendChild(p)
//         },
//         createPKills(divCadaPartida) {
//             const p = document.createElement("p")
//             p.setAttribute("class", "desempenhoDetalhado_quedas_partida_kills")
//             const span = document.createElement("span")
//             span.textContent = "2"
//             p.textContent = "Kills:"
//             p.appendChild(span)
//             divCadaPartida.appendChild(p)
//         },
//         createPPtsPosição(divCadaPartida) {
//             const p = document.createElement("p")
//             p.setAttribute("class", "desempenhoDetalhado_quedas_ptsPosição")
//             const span = document.createElement("span")
//             span.textContent = "2"
//             p.textContent = "Pts Posição:"
//             p.appendChild(span)
//             divCadaPartida.appendChild(p)
//         },
//         createPPtsKills(divCadaPartida) {
//             const p = document.createElement("p")
//             p.setAttribute("class", "desempenhoDetalhado_quedas_ptsKills")
//             const span = document.createElement("span")
//             span.textContent = "2"
//             p.textContent = "Pts Kills:"
//             p.appendChild(span)
//             divCadaPartida.appendChild(p)
//         },
//         createPTolal(divCadaPartida) {
//             const p = document.createElement("p")
//             p.setAttribute("class", "desempenhoDetalhado_quedas_total")
//             const span = document.createElement("span")
//             span.textContent = "2"
//             p.textContent = "Total:"
//             p.appendChild(span)
//             divCadaPartida.appendChild(p)
//         },
        
//     }

    
// })()


(function() {

    let season;
    let jogadores;

    async function carregarDados() {
        try {
            const resposta = await fetch("assets/data/season2.0.json");
            season = await resposta.json();

            const resposta2 = await fetch("assets/data/jogadores3.0.json");
            jogadores = await resposta2.json();
            
            console.log("Dados carregados com sucesso!");
        } catch (error) {
            console.error("Erro ao carregar JSON:", error);
        }
    }

    async function iniciarApp() {
        await carregarDados();
    }
    
    iniciarApp();

    const classificação = [
        { posição: 1, pts: 12 },
        { posição: 2, pts: 9 },
        { posição: 3, pts: 8 },
        { posição: 4, pts: 7 },
        { posição: 5, pts: 6 },
        { posição: 6, pts: 5 },
        { posição: 7, pts: 4 },
        { posição: 8, pts: 3 },
        { posição: 9, pts: 2 },
        { posição: 10, pts: 1 },
        { posição: 11, pts: 0 },
        { posição: 12, pts: 0 },
        { posição: 13, pts: 0 }
    ];

    // ESCUTADOR DE EVENTOS ÚNICO
    document.addEventListener("click", (event) => {
        for (let i = 1; i <= 12; i++) {
            if (event.target.id === `info${i}`) {
                const tr = document.querySelector(`#tr${i}`);
                if (tr) {
                    dados.start(tr, event.target, i);
                }
            }
        }
    });

    const dados = {
        start(tr, click, index) {
            const select = document.querySelector(".container_select").value;
            this.processarEquipe(select, tr, click, index);
        },

        processarEquipe(seasonSelecionada, tr, click, index) {
            const equipes = season[seasonSelecionada].equipes;

            equipes.forEach(equipe => {
                // Verifica se o nome da equipe bate com a classe da linha clicada
                if (tr.className === equipe.equipe) {
                    // ENVIAMOS OS DETALHES COMPLETOS (O ARRAY)
                    informaçãoDealhada.exibir(tr, index, equipe.detalhes, equipe.equipe);
                    
                    
                }
            });
        },

        ptsPosição(pos) {
            const dado = classificação.find(item => item.posição === pos);
            return dado ? dado.pts : 0;
        }
    };

    const informaçãoDealhada = {
        exibir(tr, i, listaDetalhes, nomeEquipe) {
            // Verifica se a linha de detalhes já existe para fechar (Toggle)
            const idLinhaInfo = `detalhe_linha_${i}`;
            const linhaExistente = document.getElementById(idLinhaInfo);
            if (linhaExistente) {
                linhaExistente.remove();
                return;
            }

            // Cria a estrutura principal uma única vez
            const createTr = document.createElement("tr");
            createTr.id = idLinhaInfo;
            
            const createTd = document.createElement("td");
            createTd.setAttribute("colspan", "7");
            createTd.className = "td_infoPartida";

            const divPrincipal = document.createElement("div");
            divPrincipal.className = "desempenhoDetalhado";

            // Cria o Cabeçalho (H2)
            const h2 = document.createElement("h2");
            h2.innerHTML = `📊 Desempenho Detalhado - <span>${nomeEquipe}</span>`;
            divPrincipal.appendChild(h2);

            // Container para os cards das quedas
            const divQuedas = document.createElement("div");
            divQuedas.className = "desempenhoDetalhado_quedas";

            // LOOP INTERNO: Cria os 5 cards dentro do container
            listaDetalhes.forEach(partida => {
                const ptsPos = dados.ptsPosição(partida.posicao);
                const totalPartida = partida.kills + ptsPos;
                
                const card = this.criarCardPartida(partida, ptsPos, totalPartida);
                divQuedas.appendChild(card);
            });

            divPrincipal.appendChild(divQuedas);
            createTd.appendChild(divPrincipal);
            createTr.appendChild(createTd);
            
            // Adiciona a linha detalhada logo após a linha do time
            tr.after(createTr);
        },

        criarCardPartida(partida, ptsPos, total) {
            const divCadaPartida = document.createElement("div");
            divCadaPartida.className = "desempenhoDetalhado_quedas_partida";

            console.log(divCadaPartida)
            if (partida.posicao === 13) {
                divCadaPartida.innerHTML = `
                <h3>Partida <span>${partida.queda}</span></h3>
                <p class="desempenhoDetalhado_quedas_partida_posição">Posição: <span>Não jogou</span></p>
                <p class="desempenhoDetalhado_quedas_partida_kills">Kills: <span>Não jogou</span></p>
                <p class="desempenhoDetalhado_quedas_ptsPosição">Pts Posição: <span>${ptsPos}</span></p>
                <p class="desempenhoDetalhado_quedas_ptsKills">Pts Kills: <span>${partida.kills}</span></p>
                <hr>
                <p class="desempenhoDetalhado_quedas_total">Total: <span>${total}</span></p>
            `;
            } else {
                // Usando Template String para o HTML ficar limpo e fácil de ler
                divCadaPartida.innerHTML = `
                    <h3>Partida <span>${partida.queda}</span></h3>
                    <p class="desempenhoDetalhado_quedas_partida_posição">Posição: <span>${partida.posicao}º</span></p>
                    <p class="desempenhoDetalhado_quedas_partida_kills">Kills: <span>${partida.kills}</span></p>
                    <p class="desempenhoDetalhado_quedas_ptsPosição">Pts Posição: <span>${ptsPos}</span></p>
                    <p class="desempenhoDetalhado_quedas_ptsKills">Pts Kills: <span>${partida.kills}</span></p>
                    <hr>
                    <p class="desempenhoDetalhado_quedas_total">Total: <span>${total}</span></p>`;
            }

            

            return divCadaPartida;
        }
    };

})();