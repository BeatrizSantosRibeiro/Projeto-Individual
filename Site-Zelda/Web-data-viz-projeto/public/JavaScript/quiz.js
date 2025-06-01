
const questions = [
    {
        question: "Quem é o personagem principal ?",
        answers: [
            { id: 1, texto: "Link", correct: true },
            { id: 2, texto: "Mipha", correct: false },
            { id: 3, texto: "Urbosa", correct: false },
            { id: 4, texto: "Daruk", correct: false },
            { id: 5, texto: "Zelda", correct: false },
            { id: 6, texto: "Revali", correct: false }
        ]
    },

    {
        question: "O inimigo do jogo é?",
        answers: [
            { id: 1, texto: "Ganondorf", correct: false },
            { id: 2, texto: "Calamity Ganon", correct: true },
            { id: 3, texto: "Zant", correct: false },
            { id: 4, texto: "Os Guardiões", correct: false },
            { id: 5, texto: "Bestas divinas", correct: false }
        ]
    },

    {
        question: "Quantos reinos existem? ",
        answers: [
            { id: 1, texto: "2", correct: false },
            { id: 2, texto: "4", correct: false },
            { id: 3, texto: "1", correct: true },
            { id: 4, texto: "5", correct: false },
            { id: 5, texto: "Nenhum", correct: false },
        ]
    },
    

    {
        question: "Quantas Bestas divinas existem?",
        answers: [
            { id: 1, texto: "8", correct: false },
            { id: 2, texto: "1", correct: false },
            { id: 3, texto: "5", correct: false },
            { id: 4, texto: "4", correct: true },
        ]
    },

      {
        question: "No início do jogo, link acorda em um Santuário, porque?",
        answers: [
            { id: 1, texto: "Ele havia acampado lá no dia anterior", correct: false },
            { id: 2, texto: "Ele estava se escondendo de Ganon", correct: false },
            { id: 3, texto: "Porque foi onde Zelda o deixou para se recuperar de ferimentos da guerra", correct: true },
            { id: 4, texto: "Ele não acorda em um santuário", correct: false },
        ]
    },

        {
        question: "Link fica quanto tempo dormindo?",
        answers: [
            { id: 1, texto: "1000 anos", correct: false },
            { id: 2, texto: "2 meses", correct: false },
            { id: 3, texto: "100 anos", correct: true },
            { id: 4, texto: "7 dias", correct: false },
            { id: 5, texto: "1 dia", correct: false }
        ]
    },

        {
        question: "O que é um 'Guardião'?",
        answers: [
            { id: 1, texto: "Um inseto esquisito", correct: false },
            { id: 2, texto: "Uma aranha que lança teias", correct: false },
            { id: 3, texto: "Um automato que dispara laseres", correct: true },
            { id: 4, texto: "Um demonio", correct: false },
            { id: 5, texto: "Calamit Ganon", correct: false }
        ]
    },

    
        {
        question: "Para que serviam as Bestas Divinas e os Guardiões?",
        answers: [
            { id: 1, texto: "Para ajudar Calamit Ganon a tomar conta de tudo", correct: false },
            { id: 2, texto: "Para ajudar a derrotar Calamit Ganon", correct: true },
            { id: 3, texto: "Para atacar qualquer ser vivo", correct: false },
            { id: 4, texto: "Para ajudar zelda a despertar seu poder divino", correct: false },
        ]
    },

     {
        question: "O que é 'Sheikah Slate?'",
        answers: [
            { id: 1, texto: "Uma chave importante do castelo de Hyrule", correct: false },
            { id: 2, texto: "Um coração para a batalha final", correct: false },
            { id: 3, texto: "Um tablet misterioso, que dá a link uma espécie de poder", correct: true },
            { id: 4, texto: "Uma pintura", correct: false },
        ]
    },

      {
        question: "Afinal, o que foi a 'Grande calamidade'?",
        answers: [
            { id: 1, texto: "Foi quando o Ganondorf ficou rei de Hyrule", correct: false },
            { id: 2, texto: "Não existiu", correct: false },
            { id: 3, texto: "Foi quando Zelda desapareceu", correct: false },
            { id: 4, texto: "Foi quando Hyrule foi atacada e todos os campeões, com excesão de Link, morreram", correct: true },
        ]
    },

]
const questionElement = document.getElementById("question");
const answersButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let pontuacao = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    pontuacao = 0;
    nextButton.innerHTML = "Proximo";
    showQuestion();

}

function resetState() { // botão para proxima pergunta vai estar sempre escondido e remove todos os botões.
    nextButton.style.display = "none";
    // garante que a cada nova questão todos os elementos sejam excluidos
    while (answersButtons.firstChild) {
        answersButtons.removeChild(answersButtons.firstChild);
    }
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

    // para cada resposta vai criar os botões de forma dinamica
    currentQuestion.answers.forEach((answers) => {
        // answers da lista vai ser substituido por esses botões criados
        const button = document.createElement("button");
        button.innerHTML = answers.texto;
        button.dataset.id = answers.id;
        button.classList.add("btn");
        answersButtons.appendChild(button);

        // associa um evento de click na questão e se ela esá certa ou não
        button.addEventListener("click", selectAnswer);
    });
}
// função recebendo o evento e

function selectAnswer(e) {
    // pega as respostas da pergunta atual e le qual resposta está certa 
    const answers = questions[currentQuestionIndex].answers;

    const correctAnswer = answers.filter((answer) => answer.correct == true)[0];

    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.id == correctAnswer.id;

    if (isCorrect) {
        selectBtn.classList.add("correct");
        pontuacao++;
    }
    else {
        selectBtn.classList.add("incorrect");
    }

    // trava os botões e aparecer o botão para proxima questão
    Array.from(answersButtons.children).forEach((button) => {
        if (button.dataset.id == correctAnswer.id){
            button.classList.add("correct");
        }

        button.disabled = true;
    });

    // aparece o botão 
    nextButton.style.display = "block"

}

function showScore() {
    resetState();
    questionElement.innerHTML = `Voce acertou ${pontuacao} de ${questions.length}!`;
    nextButton.innerHTML = "Jogar novamente";
    nextButton.style.display = "block";


    sessionStorage.setItem("pontuação", pontuacao);
    sessionStorage.setItem("total", questions.length);

    atualizarGrafico(pontuacao, questions.length);
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}


// adicionar um evento no botão 
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        
        fetch("/quiz/salvarquiz", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                pontuacaoServer: pontuacao,
                fkUsuariosServer: sessionStorage.ID_USUARIO
                
            }),
        })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            startQuiz();
            
        })
        
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            
            startQuiz();
            
        });
        
 }})


startQuiz();

