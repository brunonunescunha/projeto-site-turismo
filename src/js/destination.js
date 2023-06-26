const menuPlanetas = document.querySelectorAll(".universo")
const infoPlanetas  = document.querySelectorAll(".informacao")


menuPlanetas.forEach((planeta, info) => {
    planeta.addEventListener("click", ()  => {
        const removerOPlanetaAtiva = document.querySelector(".ativa")
        removerOPlanetaAtiva.classList.remove("ativa")

        planeta.classList.add("ativa")

        const removerOSelecionadoDaInformacao = document.querySelector(".selecionado")
        removerOSelecionadoDaInformacao.classList.remove("selecionado")

        infoPlanetas[info].classList.add("selecionado")

        const idDosPlanetas = planeta.attributes.id.value

        const imagemDoPlaneta = document.querySelector(".imagem-planeta")
        imagemDoPlaneta.src = `src/assets/destination/image-${idDosPlanetas}.png`
    })
})