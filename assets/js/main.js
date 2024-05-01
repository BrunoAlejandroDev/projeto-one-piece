/* 
    O que precisamos fazer? - quando clicar no botão do personagem na lista, temos que marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele 

	OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele 
*/

const botaoPersonagem = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botaoPersonagem.forEach((btnPersonagem, indice) => {
    
    btnPersonagem.addEventListener('click', () => {
        desselecionarPersonagem();
        desselecionarBotao();

        btnPersonagem.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");

        console.log(btnPersonagem);
        console.log(personagens);
    })
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const btnSelecionado = document.querySelector(".botao.selecionado");
    btnSelecionado.classList.remove("selecionado")
}