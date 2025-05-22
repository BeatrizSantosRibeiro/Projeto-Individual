const grid = document.querySelector('.grid');
const Spanplayer = document.querySelector('.player');
const timer = document.querySelector('.timer');


const caracterer = [
    'zelda',
    'yonobo',
    'urbosa',
    'teba',
    'sidon',
    'riju',
    'revali',
    'mipha',
    'link',
    'kohga',
    'impa',
    'daruk',
    'minichef',
    'Bokoblin',
    'zelda'
]



// para facilitar:
const createElement = (tag, className) => {




    const element = document.createElement(tag);
    element.className = className;
    return element;

}

// let porque mudam ao longo do script 
let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    // pega todos os elementos e salva em um array 
    const disableCards = document.querySelectorAll('.disabled-card');

    if (disableCards.lenght == 24) {

        clearInterval(this.loop);
        alert(`Parabens, ${Spanplayer} você conseguiu! \n Seu tempo foi:${timer.innerHTML}`);

    }
}

const checkCards = () => {
    // recuperando os valores atribuidos no let (lá em baixo) 
    const firstcaractere = firstCard.getAttribute('data-caracterer');
    const secondcaractere = secondCard.getAttribute('data-caracterer');

    if (firstcaractere === secondcaractere) {
        // para ficar com a class(css) so na frente, colocar a class na primeira filha da carta(firstChild); 
        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();
    }

    else {
        // reveal card vira a carta, se tirar ela volta ao normal (se a pessoa errou) 

        setTimeout(() => {
            // pra dar um tempo antes de virar 
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';

        }, 500);


    }
}


// criando a variavel do revelcard de baixo 
const revealCard = ({ target }) => {


    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    }

    else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }



}

const createCard = (caracterer) => {
    // criando elementos
    // const card = document.createElement('div');
    // const front = document.createElement('div');
    // const back = document.createElement('div');

    // forma facilitada de criar o elemento com a const criada acima
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    // mexe no css do front, para ficar com imagens diferentes nos cards sem precisar colocar um por um e ser uma forma aleatoria 
    front.style.backgroundImage = `url('../Imagens/imagem-jogomemoria/${caracterer}.png')`;

    card.appendChild(front);
    card.appendChild(back);
    // em cima estão StylePropertyMapReadOnly, aqui está juntando os divs

    card.addEventListener('click', revealCard) // colocar o evento de virar ao ser clicado(css)

    card.setAttribute('data-caracterer', caracterer)

    return card;

}

const loadGame = () => {

    //    duplicar os card: Poderia ser feita copiando os elementos do array, porém essa é uma forma mais eficiente, já que não fica repetindo código
    const duplicatecaracterer = [...caracterer, ...caracterer]  // espalhou os elementos do arrays em outro array 

    const shuffledArray = duplicatecaracterer.sort(() => Math.random() - 0.5); // ordena elementos em ordem alfabética. como match ele aliatoriza numero, subtraindo o 0.5 todo numero menor que isso vai ser negativo, que é o q precisa aqui , positivo e negativo


    // espera receber uma função como parametro
    // foreach vai percorrer os arrays que já está duplicado e embaralhado, ao invés do outro(caracterer)
    shuffledArray.forEach((caracterer) => {
        // forEach vai criar varias cartas
        const card = createCard(caracterer);
        grid.appendChild(card);
    });
}

const StartTimer = () => {
    //this é uma chave para conseguir acessar em outra função(endgame), como se fosse um id 
  this.loop  =  setInterval(() => {

        // tempo atual é o que está dentro do innerhtml 
        const currentTime = Number(timer.innerHTML);

        timer.innerHTML = currentTime + 1;


    }, 1000);
}

// executa alguma coisa quando a janela tiver carregada
window.onload = () => {



    // pegar o nome do localstorage que o usuario colocou 
    const playerName = localStorage.getItem('player');
    // getIten recupera valor 
    Spanplayer.innerHTML = playerName;
    // StartTimer();
    loadGame();
}



