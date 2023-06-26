const botoes = document.querySelectorAll(".btn")
const informacoes = document.querySelectorAll(".informacao")

botoes.forEach((btn, info) => {
    btn.addEventListener("click", () => {
        const removerObotaoSelecionado  =  document.querySelector(".selecionado")
        removerObotaoSelecionado.classList.remove("selecionado")

        btn.classList.add("selecionado")

        const esconderinfomacao = document.querySelector(".mostra")
        esconderinfomacao.classList.remove("mostra")

        informacoes[info].classList.add("mostra")

        const idDoBotao = btn.attributes.id.value

        const foto = document.querySelector(".foto")
        foto.src = `src/assets/crew/image-${idDoBotao}.png`
    })
})