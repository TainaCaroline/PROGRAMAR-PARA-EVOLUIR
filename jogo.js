const main           = document.getElementById('main');
const placarTag      = document.getElementById('placar');
const roundTag       = document.getElementById('round');
const buttonJogar    = document.getElementById('buttonJogar');
const buttonEncerrar = document.getElementById('buttonEncerrar');
let click01          = null;
let click02          = null;
let encontrados      = 0;
let placar           = 0;
let round            = 1;

buttonJogar.addEventListener('click', () =>{
  window.location.assign('./jogar.html')
})

cardInicial();


function cardInicial(){

    const arrDuplicado       = [...cardJogo, ...cardJogo];
    const cartasEmbaralhadas = shuffleArray(arrDuplicado);

    for (let i = 0; i < cartasEmbaralhadas.length; i++){
        let carta = document.createElement('img');

        carta.id  = cartasEmbaralhadas[i].id;
        carta.addEventListener('click', clickCarta);
        carta.src = './img/QuestionBlock.png';

        main.appendChild(carta);
        
    }
    
};


function clickCarta(event){

  const imgClicada      = event.target;
  let idClicado         = event.target.id;
  let personagemClicado = cardJogo.find((elemento)=> elemento.id == idClicado);
  imgClicada.src        = personagemClicado.img;

  if(click01 == null){
    click01 = imgClicada;
  } else {
    click02 = imgClicada; 
    testPar();
  }

}

function testPar(){
  if(click01.id == click02.id){
    encontrados++    
    click01 = null;
    click02 = null;

    if(encontrados == 4){
      placar++
      round++
      placarTag.innerHTML = placar;
      roundTag.innerHTML  = round;
      encontrados = 0;

      setTimeout(() => {
        main.innerHTML = "";
        cardInicial();  
      }, 1000);
    }

  } else {

    setTimeout(() => {
      click01.src = './img/QuestionBlock.png';
      click02.src = './img/QuestionBlock.png';
      click01 = null;
      click02 = null;
    },2000);

  }
}


function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }