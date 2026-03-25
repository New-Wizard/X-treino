

    
    // { "jogador": "", "kill": , "equipe": "" },
    // { "equipe": "", "quedas": 5, "abates": , "booyah": , "pts": },
    let seasons
    let jogadores
    
    //pega os dados do json
    async function carregarDados(){
        const respostaSeasons = await fetch("assets/data/season.json")
        seasons = await respostaSeasons.json()

        const respostaJogadores = await fetch("assets/data/jogadores.json")
        jogadores = await respostaJogadores.json()
        
    }

    //o js para e espera pegar todos os dados no json
    async function iniciarApp(){
        await carregarDados()
        mudarSeason.start()
    }
    iniciarApp()



    //chama as fuções quando muda la no select e carrega a season1 automatico
    const mudarSeason = {
        start() {
            const select = document.querySelector(".container_select")
            
            mudarSeason.carregarAutomatico(select.value)


            select.addEventListener("change", function() {
                const seasonEscolhida = this.value
                mudarSeason.carregarSeason(seasonEscolhida)
                mudarSeason.carregarRankJogador(seasonEscolhida)
            })
        },
        carregarSeason(nomeSeason) {
            if (nomeSeason != "selecioneSeason") {
                const tbody = document.querySelector("#tbody")
                tbody.innerHTML = ""
            }

            for (let season in seasons) {
                if (nomeSeason == season) {
                    const equipes = seasons[nomeSeason].equipes
                    
                    const data = seasons[nomeSeason].data
                    
                    
                    equipes.forEach((valor, index) => {

                        new Equipe(index + 1, valor.equipe, valor.quedas, valor.abates, valor.booyah, valor.pts, data, nomeSeason)

                    });

                }
            }
        },
        carregarRankJogador(nomeSeason) {
            if (nomeSeason != "selecioneSeason") {
                
                const top_kills_grid = document.querySelector(".top_kills_grid")
                top_kills_grid.innerHTML = ""
                
            }

            for (let season in jogadores) {
                if (nomeSeason == season) {
                    const objJogadores = jogadores[nomeSeason].jogadores

                    const equipes = seasons[nomeSeason].equipes
                    const posicaoEquipe = {}
                    equipes.forEach((time, index) => {
                         posicaoEquipe[time.equipe] = index + 1
                    })

                    
                    //vai colocar em ordem decrescente nas kills
                    objJogadores.sort((a, b) => {
                        
                        
                    // critério 1 → kills (maior primeiro)
                    if (b.kill !== a.kill){
                        return b.kill - a.kill
                    }

                    // critério 2 → posição da equipe (menor primeiro)
                    return posicaoEquipe[a.equipe] - posicaoEquipe[b.equipe]
                    })
                        

                    objJogadores.forEach((valor, index) => {
                        // new Jogador(index + 1, valor.jogador, valor.kill, valor.equipe)
                        criarRankJogador.start(index + 1, valor.jogador, valor.kill, valor.equipe)
                    })
                    
                }
            }
        },
        carregarAutomatico(selecioneSeason) {
            const equipes = seasons.season1.equipes
            const data = seasons.season1.data
            equipes.forEach((valor, index) => {
                
                new Equipe(index + 1, valor.equipe, valor.quedas, valor.abates, valor.booyah, valor.pts, data, "season 1")

            });


            
                
                const objJogadores = jogadores.season1.jogadores
                objJogadores.sort((a, b) => b.kill - a.kill)
                objJogadores.forEach((valor, index) => {
                    // new Jogador(index + 1, valor.jogador, valor.kill, valor.equipe)
                    criarRankJogador.start(index + 1, valor.jogador, valor.kill, valor.equipe)
                })
                    
            
        }
        
    }
    
    
    export class Equipe{
            constructor(posição, equipe, quedas, abate, booyah, pts, data, season) {
                this.posição = posição
                this.equipe = equipe
                this.quedas = quedas
                this.abate = abate
                this.booyah = booyah
                this.pts = pts
                this.data = data
                this.season = season
                const tbody = document.querySelector("#tbody")
                this.criarTr(tbody)
                this.mudarData(data) 
                this.mudarNomeSeason(season)
            }
            criarTr(tbody) {
                const createTr = document.createElement("tr")
                const tr = tbody.appendChild(createTr)
                this.criarPosiçãoTd(tr)
                this.criarEquipeTd(tr)
                this.criarQuedasTd(tr)
                this.criarAbatesTd(tr)
                this.criarBooyahTd(tr)
                this.criarPtsTd(tr)
            }
            criarPosiçãoTd(tr) {
                const td = document.createElement("td")
                const p = document.createElement("p")
                td.setAttribute("class", "posicao")
                tr.appendChild(td)
                td.appendChild(p)
                p.innerHTML = `${this.posição}`
            }
            criarEquipeTd(tr) {
                const td = document.createElement("td")
                td.setAttribute("class", "equipe")
                tr.appendChild(td)
                td.innerHTML = `${this.equipe}`
            }
            criarQuedasTd(tr) {
                const td = document.createElement("td")
                td.setAttribute("class", "quedas")
                tr.appendChild(td)
                td.innerHTML = `${this.quedas}`
            }
            criarAbatesTd(tr) {
                const td = document.createElement("td")
                td.setAttribute("class", "abates")
                tr.appendChild(td)
                td.innerHTML = `${this.abate}`
            }
            criarBooyahTd(tr) {
                const td = document.createElement("td")
                const p = document.createElement("p")
                if (this.booyah > 0){
                    td.setAttribute("class", "vitoria booay")
                } else {
                    td.setAttribute("class", "vitoria")
                }
                tr.appendChild(td)
                td.appendChild(p)
                p.innerHTML = `${this.booyah}`
            }
            criarPtsTd(tr) {
                const td = document.createElement("td")
                const strong = document.createElement("strong")
                td.setAttribute("class", "pts")
                tr.appendChild(td)
                td.appendChild(strong)
                strong.innerHTML = `${this.pts}`
            }
            mudarData(data) {
                const spanData = document.querySelector("#data")
                spanData.innerHTML = `${data}`
            }
            mudarNomeSeason(nomeSeason) {
                const season = document.querySelector("#rankingSeason")
                season.innerHTML = `SEASON ${nomeSeason.slice(-1)}`
            }

    }   
    

    // class Jogador{
    //     constructor(posição, nomeJogador, equipe) {
    //         this.posição = posição
    //         this.nomeJogador = nomeJogador
    //         this.equipe = equipe
    //     }
    // }
    const criarRankJogador = {
        start(posicao, nomeJogador, kill, equipe) {
            this.criaContainerJogador(posicao, nomeJogador, kill, equipe)
        },
        criaContainerJogador(posicao, nomeJogador, kill, equipe) {
            const top_kills_grid = document.querySelector(".top_kills_grid")
            const containerJogador = document.createElement("div")
            containerJogador.setAttribute("class", "kill_card")
            if (posicao == 1) {
                containerJogador.setAttribute("class", "kill_card rank-1")
            } if (posicao == 2) {
                containerJogador.setAttribute("class", "kill_card rank-2")
            } if (posicao == 3) {
                containerJogador.setAttribute("class", "kill_card rank-3")
            }
            top_kills_grid.appendChild(containerJogador)
            this.criaPosição(containerJogador, posicao, nomeJogador, kill, equipe)
        },
        criaPosição(containerJogador, posicao, nomeJogador, kill, equipe) {
            const p = document.createElement("p")
            p.setAttribute("class", "badge")
            p.textContent = posicao
            containerJogador.appendChild(p)
            this.criarNomeEquipe(containerJogador, posicao, nomeJogador, kill, equipe)
        },
        criarNomeEquipe(containerJogador, posicao, nomeJogador, kill, equipe){
            const divPlayerInfo = document.createElement("div")
            divPlayerInfo.setAttribute("class", "player_info")
            containerJogador.appendChild(divPlayerInfo)


            const nick = document.createElement("h4")
            nick.textContent = nomeJogador
            divPlayerInfo.appendChild(nick)

            const nomeEquipe = document.createElement("p")
            nomeEquipe.textContent = equipe
            divPlayerInfo.appendChild(nomeEquipe)

            this.criarKill(containerJogador, posicao, nomeJogador, kill, equipe)
        },
        criarKill(containerJogador, posicao, nomeJogador, kill, equipe) {
            const divKill = document.createElement("div")
            divKill.setAttribute("class", "kill_stats")
            containerJogador.appendChild(divKill)


            const nomeKills = document.createElement("span")
            nomeKills.setAttribute("class", "lbl")
            nomeKills.textContent = "Kills"
            divKill.appendChild(nomeKills)

            const kills = document.createElement("span")
            kills.setAttribute("class", "num")
            kills.textContent = kill
            divKill.appendChild(kills)
        }
    }


    
   



