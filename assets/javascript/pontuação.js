(function () {
   

    

    //pega os dados do json
    let season
    async function carregarDados() {
        const resposta = await fetch("assets/data/season.json")
        season = await resposta.json()
        
    }


    //o js para e espera pegar todos os dados no json
    async function iniciarApp() {
        await carregarDados()
        tabela.start()

    }
    iniciarApp()
    
    const pegarDados = {
        start(seasonSelecionada) {
            const b = seasonSelecionada
            const a = season.b
            console.log(a)
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
                        pegarDados.start(seasonSelecionada)
                        this.carregarTabela()
                    }

                }
            })
        },
        carregarTabela() {
            
        }
    }

















    
})()