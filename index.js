

var Leonardo = window.document.getElementById("cardLeonardo")
var Bruna = window.document.getElementById("cardBruna")
var Samantha = window.document.getElementById("cardSamantha")
var SetaDireita = window.document.getElementById("setaDireita")
var SetaEsquerda = window.document.getElementById("setaEsquerda")

function RolarCarrosselDireita() {
    window.document.getElementById("cardBruna").style.display = "none";
    window.document.getElementById("cardLeonardo").style.display= "flex" ;
    window.document.getElementById("setaEsquerda").style.display = "flex";
    window.document.getElementById("setaDireita").style.display="none" ;   
}
function RolarCarrosselEsquerda(){
    window.document.getElementById("cardBruna").style = "display: flex"
    window.document.getElementById("cardLeonardo").style = "display: none" 
    window.document.getElementById("setaEsquerda").style =  "display: none"
    window.document.getElementById("setaDireita").style = "display: flex; margin-top: 55px"
}

/*
function RolarCarrosselDireita() {
    Bruna.style.display = "none";
    Leonardo.style.display= "flex" ;
    SetaEsquerda.style.display = "flex";
    SetaDireita.style.display="none" ;   
}
function RolarCarrosselEsquerda(){
    Bruna.style = "display: flex"
    Leonardo.style = "display: none" 
    SetaEsquerda.style =  "display: none"
    SetaDireita.style = "display: flex; margin-top: 55px"
}
*/