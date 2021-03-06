const SelectorContainer = document.querySelector('.WordChooser')
const Selector = document.querySelector('#ChooseWord');
const SelectorBtn = document.querySelector('#ForcaBTN');
const Game = document.querySelector('.charSelector');
const WordShow = document.querySelector('#WordChoosed');
const chars = document.querySelectorAll('.characters button');
const restart = document.querySelector(".ForcaRestart");
const Warning = document.querySelector('.WarningContainer');
let Lifes = document.querySelector('.acount');
const LifesParent = document.querySelector('.Lifes');

let actualword='';
let char = '';
let replaced='';
let palavra = '';

SelectorBtn.addEventListener('click', ()=>{
  palavra = Selector.value;
  actualword = palavra.toUpperCase();
  replaced = palavra.replace(/\S/g,'_')
  SelectorContainer.classList.add('choosed');
  Warning.classList.add('choosed');
  Game.classList.remove('unactive');
  WordShow.innerHTML = replaced;
})

chars.forEach(btn => btn.addEventListener('click',SelectLetter))

function SelectLetter(e){
e.target.classList.add('clicked');
if(actualword.includes(e.target.innerHTML))
char+=e.target.innerHTML;
else{
Lifes.innerHTML = Number(Lifes.innerHTML-1)
if (Lifes.innerHTML==0){
  Lifes.parentNode.innerHTML = `Você perdeu! A palavra era: ${actualword}`;
  replaced = actualword
  WordShow.innerHTML = replaced;
  return;
  }
}
replaced = palavra;
replaced = replaced.split('');
replaced.forEach((chara,index) => {
  if(!char.includes(chara.toUpperCase()) && chara!=' '){
    replaced[index] = '_';
  }
})
replaced = replaced.join('')
WordShow.innerHTML = replaced;
}
restart.addEventListener('click',()=>{
SelectorContainer.classList.remove('choosed');
char = '';
Warning.classList.remove('choosed');
Game.classList.add('unactive');
LifesParent.innerHTML = 'Tentativas restantes: <span class="acount">5</span>';
Lifes = document.querySelector('.acount');
chars.forEach(char => char.classList.remove('clicked'))
})
