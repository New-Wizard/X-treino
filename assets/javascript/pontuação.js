(function () {
   

    //o js para e espera pegar todos os dados no json
    async function iniciarApp() {
        await carregarDados()
        tabela.start()
    }
    iniciarApp()

    //pega os dados do json
    let season
    async function carregarDados() {
        const resposta = await fetch("assets/data/season.json")
        season = await resposta.json()
        console.log(season)
        
    }
    


    const tabela = {
        start() {
            const select = document.querySelector(".container_select")
            select.addEventListener("change", (e) => {
                console.log(e)
            })
        }
    }

















    
})()