
   
    import { Equipe } from './script.js';
    

    //pega os dados do json
    let season
    async function carregarDados() {
        const resposta = await fetch("assets/data/season2.0.json")
        season = await resposta.json()
        
    }
    //o js para e espera pegar todos os dados no json
    async function iniciarApp() {
        await carregarDados()
        tabela.start()

    }
    iniciarApp()
    

    //aq ele pega e armazena todos os dados do json
    const pegarDados = {
        start(seasonSelecionada) {
            //aq da um return nessa função com os dados
            return this.pegarDadosDasEquipes(season[seasonSelecionada], seasonSelecionada)
        },
        pegarDadosDasEquipes(seasonSelecionada, nomeDaSeason) {
            
            //aq ira pegar o arrays dos objs equipes
            const arrayEquipes = seasonSelecionada.equipes
            const resultadoFinal = []
            const data = seasonSelecionada.data
            const nomeSeason = nomeDaSeason
    

            arrayEquipes.forEach(infoEquipes => {
                //serve para ajudar ao somatorio 
                let equipePts = 0
                let kill = 0
                let posição = 0
                let booyah = 0

                //aq mostra os nomes das equipes
                const nomeEquipe = infoEquipes.equipe
            
                const arrayQuedas = infoEquipes.detalhes
                arrayQuedas.forEach(objQuedas => {
                    //aq pega todos os dados das quedas,kills,posição
                    const numeroDaQueda = objQuedas.queda
                    const numeroDaKills = objQuedas.kills
                    const numeroDaPosição = objQuedas.posicao 
                    //seria aq os dados individuais
                    if (numeroDaPosição == 1) {
                        booyah++
                    }
                    //aq soma todas as kills e os pts de posição e armazena
                    kill = this.somarPontosKill(kill, numeroDaKills)
                    posição = this.somaPontosPosição(posição, numeroDaPosição)
                })
                equipePts = kill + posição
                
                resultadoFinal.push({
                    equipe: nomeEquipe,
                    quedas: 5,
                    abate: kill,
                    booyah: booyah,
                    pts: equipePts,
                    data: data,
                    nomeSeason: nomeSeason
                })
                
            });
            
            return resultadoFinal
            
            
        },
        //aq soma as kills
        somarPontosKill(kill, numeroDaKills) {
            let pontuaçãoKill = kill + numeroDaKills
            return pontuaçãoKill
        },
        //ira somar os pontos de posição
        somaPontosPosição(posição, numeroDaPosição) {
            //essa variavel ir armazenar os pts por queda
            let pontoGanhoPorPartida = 0
            
            //ira percorrer os objs dentro do array classificação
            classificação.forEach(objClassificaçãoPosição => {
                //se o numero da posição na queda for igual ao numero de posição da lista faça
                if (objClassificaçãoPosição.posição == numeroDaPosição) {
                    //ira somar os pts feito na partida
                    pontoGanhoPorPartida = objClassificaçãoPosição.pts
                }
            })
            return pontoGanhoPorPartida + posição
            
        }

    }

    const classificação = [
        {posição: 1, pts: 12},
        {posição: 2, pts: 9 },
        {posição: 3, pts: 8 },
        {posição: 4, pts: 7 },
        {posição: 5, pts: 6},
        {posição: 6, pts: 5},
        {posição: 7, pts: 4},
        {posição: 8, pts: 3},
        {posição: 9, pts: 2},
        {posição: 10, pts: 1},
        {posição: 11, pts: 0},
        { posição: 12, pts: 0 },
        {kill: 1},
    ]
        
        
    const tabela = {
        start() {
            const select = document.querySelector(".container_select")

            //quando seleciona o valor do select
            select.addEventListener("change", () => {
                const seasonSelecionada = select.value 

                //são as seasons que estão do json
                const seasonJson = season
                //pega todos os seasons um por um
                for (let seasons in seasonJson){
                    //se as seasons do json for igual a que foi selecionada faz isso
                    if (seasons == seasonSelecionada) {
                        
                        const dados = pegarDados.start(seasonSelecionada)
                        this.carregarTabela(dados)
                    }

                }
            })
        },
        carregarTabela(arrayEquipes) {
            // const tbody = document.querySelector("#tbody")
            // tbody.innerHTML = "" 
            arrayEquipes.sort((a, b) => b.pts - a.pts)
            arrayEquipes.forEach((equipe, index) => {
                equipe.posicao = index + 1

                new Equipe(equipe.posicao, equipe.equipe, equipe.quedas, equipe.abate, equipe.booyah, equipe.pts, equipe.data, equipe.nomeSeason)
            })
            // new Equipe("1", "detonadores", 1,2,3,4, "01/01/2000", "season6")
        }
    }



    
