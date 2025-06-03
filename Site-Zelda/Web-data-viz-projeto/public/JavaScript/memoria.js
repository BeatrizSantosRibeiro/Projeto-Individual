const grid = document.querySelector('.grid');
const Spanplayer = document.querySelector('.player');
const timer = document.querySelector('.timer');


const caracterer = [
    'darukpixelart',
    'impapixelart',
    'linkpixeart',
    'miphapixelart',
    'revalipixelart',
    'rijupixelart',
    'sidonpixelart',
    'tebapixelart',
    'tulinpixelart',
    'urbosapixelart',
    'yunobopixelart',
    'zeldapixelart',
]


const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

 
let firstCard = '';
let secondCard = '';


const checkEndGame = () => {

    const disableCards = document.querySelectorAll('.face.disable-card');

    if (disableCards.length == 24) {

        setInterval(
            alert(`Parabens, ${Spanplayer.innerHTML} você conseguiu! \n Seu tempo foi:${timer.innerHTML} Segundos`),
            alert(`Reiniciando jogo`),
            500);
        location.reload();
        clearInterval(this.loop);


        fetch("/memoria/salvarmemoria", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({

                timerServer: timer.innerHTML,
                fkUsuariosServer: sessionStorage.ID_USUARIO

            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

            })

            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);

                loadGame();

            });

    }
}

const checkCards = () => {

    const firstcaractere = firstCard.getAttribute('data-caracterer');
    const secondcaractere = secondCard.getAttribute('data-caracterer');

    if (firstcaractere === secondcaractere) {

        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();
    }

    else {

        setTimeout(() => {

            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';

        }, 500);

    }
}


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

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');


    front.style.backgroundImage = `url('../Imagens/imagem-jogomemoria/${caracterer}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard)

    card.setAttribute('data-caracterer', caracterer);

    return card;

}

const loadGame = () => {

    const duplicatecaracterer = [...caracterer, ...caracterer] 

    const shuffledArray = duplicatecaracterer.sort(() => Math.random() - 0.5); 

 
    shuffledArray.forEach((caracterer) => {
        // forEach vai criar varias cartas
        const card = createCard(caracterer);
        grid.appendChild(card);
    });

    const allCards = document.querySelectorAll('.card');

    setTimeout(() => {
        allCards.forEach((card) => card.classList.add('reveal-card'));
    }, 300);

    setTimeout(() => {
        allCards.forEach((card) => card.classList.remove('reveal-card'));
    }, 3000);

}

const StartTimer = () => {

    this.loop = setInterval(() => {

        const currentTime = Number(timer.innerHTML);

        timer.innerHTML = currentTime + 1;

    }, 1000);
}


window.onload = () => {

    const playerName = localStorage.getItem('player');

    Spanplayer.innerHTML = sessionStorage.NOME_USUARIO;
    StartTimer();
    loadGame();
}





