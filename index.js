const cardLeonardo = document.getElementById("card-leonardo");
const cardBruna = document.getElementById("card-bruna");
const cardSamantha = document.getElementById("card-samantha");
const setaDireita = document.getElementById("seta-direita");
const setaEsquerda = document.getElementById("seta-esquerda");

const cards = ["bruna", "samantha", "leonardo"];
let current = cards[0];

setaDireita.addEventListener("click", function(){
  if(current === cards[0]){
    cardSamantha.style.display = "flex";
    cardBruna.style.display = "none";
    cardLeonardo.style.display = "none";

    current = cards[1];
  }else if(current === cards[1]){
    cardSamantha.style.display = "none";
    cardBruna.style.display = "none";
    cardLeonardo.style.display = "flex";
    
    current = cards[2];
  }else if(current === cards[2]){
    cardSamantha.style.display = "none";
    cardBruna.style.display = "flex";
    cardLeonardo.style.display = "none";

    current = cards[0];
  }
});

setaEsquerda.addEventListener("click", function(){
  if(current === cards[0]){
    cardSamantha.style.display = "none";
    cardBruna.style.display = "none";
    cardLeonardo.style.display = "flex";

    current = cards[2];
  }else if(current === cards[1]){
    cardSamantha.style.display = "none";
    cardBruna.style.display = "flex";
    cardLeonardo.style.display = "none";
    
    current = cards[0];
  }else if(current === cards[2]){
    cardSamantha.style.display = "flex";
    cardBruna.style.display = "none";
    cardLeonardo.style.display = "none";

    current = cards[1];
  }
});
