const botoes = document.querySelectorAll(".btn")
const informacoes = document.querySelectorAll(".informacao")
const foto = document.querySelector(".foto")

botoes.forEach((btn, info) => {
    btn.addEventListener("click", () => {
        const esconderBotao = document.querySelector(".selecionado")
        esconderBotao.classList.remove("selecionado")

        btn.classList.add("selecionado")

        const escunderInformacao = document.querySelector(".mostra")
        escunderInformacao.classList.remove("mostra")

        informacoes[info].classList.add("mostra")

        const idDoBotao = btn.attributes.id.value

        const foto = document.querySelector(".foto")
        foto.src = `src/assets/technology/image-${idDoBotao}-portrait.jpg`

    })
})