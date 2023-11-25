const botoesSetas = document.querySelectorAll(".seta");
const respostas = document.querySelectorAll(".resposta");
let respostaAberta = 0;
botoesSetas.forEach(function(elemento, index){
    
    elemento.addEventListener("click", function(){
        let estaAberto = respostas[index].className.indexOf("mostrar-resposta") > -1;
        console.log("a resposta está aberta na div: "+respostaAberta);
        console.log("voce clicou no botao"+index);
        if (estaAberto) {
            console.log("tem a classe mostrar-resposta");
            respostas[respostaAberta].classList.remove("mostrar-resposta");
            respostas[respostaAberta].classList.add("ocultar-resposta");
        }else{
            console.log("não tem a classe mostrar-resposta");
            respostas[respostaAberta].classList.remove("mostrar-resposta");
            respostas[respostaAberta].classList.add("ocultar-resposta");
            respostas[index].classList.remove("ocultar-resposta");
            respostas[index].classList.add("mostrar-resposta"); 
            respostaAberta = index;
        }
    } )
});
// botoesSetas[0].addEventListener("click", function () {
//     console.log("voce clicou no botao");
//     console.log(respostas);
//     if (respostas[0].className.indexOf("mostrar-resposta") > -1) {
//         console.log("tem a classe mostrar-resposta");
//         respostas[0].classList.remove("mostrar-resposta");
//         respostas[0].classList.add("ocultar-resposta");
//     }else{
//         respostas[0].classList.remove("ocultar-resposta");
//         respostas[0].classList.add("mostrar-resposta"); 
//     }
// });