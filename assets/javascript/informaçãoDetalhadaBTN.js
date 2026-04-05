(function(){
    

    const informaçãoDealhada = {
        start(){
            //aq ira pegar cada event de click na pagina
            document.addEventListener("click", (event) => {

                //aq cria um contador de 1 ate 12, para percorrer cada btn
                for(let i = 1; i<=12;i++){

                    //se o btn for igual o id do btn no tr, faz isso
                    if (event.target.id === `info${i}`) {
                        const tr = document.querySelector(`#tr${i}`)
                        this.criarInfo(tr)
                    }
                }
                
            });
        },
        criarInfo(tr){
            console.log(tr)
            //pegar os dados, e or tr ta pronto
            
        }
    }

    informaçãoDealhada.start()
})()