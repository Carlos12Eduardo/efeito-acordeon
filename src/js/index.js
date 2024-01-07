const botoesSetas = document.querySelectorAll(".seta");
const respostas = document.querySelectorAll(".resposta");

botoesSetas.forEach(function(botaoSeta, index){
    botaoSeta.addEventListener("click", function(){
        const respostaAbertaAnterior = document.querySelector('.mostrar-resposta');

        if(respostaAbertaAnterior !== null){
            respostaAbertaAnterior.classList.remove('mostrar-resposta');
            respostaAbertaAnterior.classList.add('ocultar-resposta');
        }
        respostas[index].classList.remove('ocultar-resposta');
        respostas[index].classList.add('mostrar-resposta');
    });
});