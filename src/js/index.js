const botoesSetas = document.querySelectorAll(".seta");
const respostas = document.querySelectorAll(".resposta");

botoesSetas.forEach(function(botaoSetaAtual, index){
    botaoSetaAtual.addEventListener("click", function(){
        const respostaAbertaAnterior = document.querySelector('.mostrar-resposta');
        const respostaAbertaAtual = respostas[index];
        const botaoSetaAbertoAnterior = document.querySelector("[src='../src/imagens/seta aberta.png']");

        if(respostaAbertaAnterior === null){
            respostaAbertaAtual.classList.remove('ocultar-resposta');
            respostaAbertaAtual.classList.add('mostrar-resposta');
            botaoSetaAtual.src = '../src/imagens/seta aberta.png';
            return
        }
        if(respostaAbertaAnterior === respostaAbertaAtual){
            respostaAbertaAtual.classList.remove('mostrar-resposta');
            respostaAbertaAtual.classList.add('ocultar-resposta')
            botaoSetaAtual.src = '../src/imagens/seta fechada.png';
            return;
        }

        respostaAbertaAnterior.classList.remove('mostrar-resposta');
        respostaAbertaAnterior.classList.add('ocultar-resposta');
        botaoSetaAbertoAnterior.src = '../src/imagens/seta fechada.png';
        
        respostaAbertaAtual.classList.remove('ocultar-resposta');
        respostaAbertaAtual.classList.add('mostrar-resposta')
        botaoSetaAtual.src = '../src/imagens/seta aberta.png';
    });
});