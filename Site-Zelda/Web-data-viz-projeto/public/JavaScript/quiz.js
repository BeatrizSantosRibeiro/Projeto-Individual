
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

//         {
//         question: "O que é um 'Guardião'?",
//         answers: [
//             { id: 1, texto: "Um inseto esquisito", correct: false },
//             { id: 2, texto: "Uma aranha que lança teias", correct: false },
//             { id: 3, texto: "Um automato que dispara laseres", correct: true },
//             { id: 4, texto: "Um demonio", correct: false },
//             { id: 5, texto: "Calamit Ganon", correct: false }
//         ]
//     },

    
//         {
//         question: "Para que serviam as Bestas Divinas e os Guardiões?",
//         answers: [
//             { id: 1, texto: "Para ajudar Calamit Ganon a tomar conta de tudo", correct: false },
//             { id: 2, texto: "Para ajudar a derrotar Calamit Ganon", correct: true },
//             { id: 3, texto: "Para atacar qualquer ser vivo", correct: false },
//             { id: 4, texto: "Para ajudar zelda a despertar seu poder divino", correct: false },
//         ]
//     },

//      {
//         question: "O que é 'Sheikah Slate?'",
//         answers: [
//             { id: 1, texto: "Uma chave importante do castelo de Hyrule", correct: false },
//             { id: 2, texto: "Um coração para a batalha final", correct: false },
//             { id: 3, texto: "Um tablet misterioso, que dá a link uma espécie de poder", correct: true },
//             { id: 4, texto: "Uma pintura", correct: false },
//         ]
//     },

//       {
//         question: "Afinal, o que foi a 'Grande calamidade'?",
//         answers: [
//             { id: 1, texto: "Foi quando o Ganondorf ficou rei de Hyrule", correct: false },
//             { id: 2, texto: "Não existiu", correct: false },
//             { id: 3, texto: "Foi quando Zelda desapareceu", correct: false },
//             { id: 4, texto: "Foi quando Hyrule foi atacada e todos os campeões, morreram", correct: true },
//         ]
//     },
//   {

//         question: "Qual é o nome do reino principal em The Legend of Zelda?",
//         answers: [
//             { id: 1, texto: "Lorule", correct: false },
//             { id: 2, texto: "Kakariko", correct: false },
//             { id: 3, texto: "Hyrule", correct: true },
//             { id: 4, texto: "Gerundo", correct: false },
//         ]
//     },


//       {
//         question: "Qual é o nome da espada lendária empunhada por Link?",
//         answers: [
//             { id: 1, texto: "Dark Sword", correct: false },
//             { id: 2, texto: "Hero's Blade", correct: false },
//             { id: 3, texto: "Shadow Saber", correct: false },
//             { id: 4, texto: "Master Sword", correct: true },
//         ]
//     },

    
//     {
//       question: "Qual é o objetivo principal do Clã Yiga em Breath of the Wild?",
//       answers: [
//           { id: 1, texto: "Ajudar Link na missão", correct: false },
//           { id: 2, texto: "Proteger Hyrule", correct: false },
//           { id: 3, texto: "Servir Calamity Ganon", correct: true },
//           { id: 4, texto: "Coletar rupees", correct: false },
//       ]
//   },

//       {
//         question: "Em Breath of the Wild, o que Link pode usar para planear (voar)?",
//         answers: [
//             { id: 1, texto: "Pégaso", correct: false },
//             { id: 2, texto: "Paravento", correct: false },
//             { id: 3, texto: "Planador", correct: true },
//             { id: 4, texto: "Asas Sheikah", correct: false },
//         ]
//     },


//       {
//         question: "O que a Triforce representa?",
//         answers: [
//             { id: 1, texto: "Coragem, sabedoria e força", correct: true },
//             { id: 2, texto: "Força, magia e paz", correct: false },
//             { id: 3, texto: "Terra, fogo e água", correct: false },
//             { id: 4, texto: "Vida, morte e tempo", correct: false },
//         ]
//     },
    
//         {
//         question: "Qual povo vive na Montanha da Morte?",
//         answers: [
//             { id: 1, texto: "Zora", correct: false },
//             { id: 2, texto: "Sheikah", correct: false },
//             { id: 3, texto: "Gerudo", correct: false },
//             { id: 4, texto: "Goron", correct: true },
//         ]
//     },

//     {
//        question: "Como os membros do Clã Yiga costumam se disfarçar?",
//        answers: [
//            { id: 1, texto: "Como animais selvagens", correct: false },
//            { id: 2, texto: "Como viajantes comuns", correct: true },
//            { id: 3, texto: "Como guardiões", correct: false },
//            { id: 4, texto: "Como Sheikahs", correct: false },
//        ]
//    },
    
//      {
//         question: "Os Zora vivem em qual ambiente?",
//         answers: [
//             { id: 1, texto: "Montanhas", correct: false },
//             { id: 2, texto: "Vulcões", correct: false },
//             { id: 3, texto: "Regiões aquáticas", correct: true },
//             { id: 4, texto: "Florestas", correct: false },
//         ]
//     },

//     {
//         question: "Quem é o criador original da franquia The Legend of Zelda?",
//         answers: [
//             { id: 1, texto: "Hideo Kojima", correct: false },
//             { id: 2, texto: "Shigeru Miyamoto", correct: true },
//             { id: 3, texto: "Satoru Iwata", correct: false },
//             { id: 4, texto: "Masahiro Sakurai", correct: false },
//         ]
//     },

//      {
//         question: "Qual desses personagens NÃO é um campeão em Breath of the Wild?",
//         answers: [
//             { id: 1, texto: "Rauru", correct: true },
//             { id: 2, texto: "Revali", correct: false },
//             { id: 3, texto: "Daruk", correct: false },
//             { id: 4, texto: "Urbosa", correct: false },
//         ]
//     },

//      {
//         question: "O que são as Koroks em Breath of the Wild?",
//         answers: [
//             { id: 1, texto: "Espíritos malignos", correct: false },
//             { id: 2, texto: "Criaturas que protegem Ganon", correct: false },
//             { id: 3, texto: "Inimigos secretos", correct: false },
//             { id: 4, texto: "Seres da floresta que recompensam Link", correct: true },
//         ]
//     },


//      {
//         question: "Quem é o líder do Clã Yiga?",
//         answers: [
//             { id: 1, texto: "Master Kohga", correct: true },
//             { id: 2, texto: "Impa", correct: false },
//             { id: 3, texto: "Ganon", correct: false },
//             { id: 4, texto: "Revali", correct: false },
//         ]
//     },

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

function resetState() {
    nextButton.style.display = "none";
   
    while (answersButtons.firstChild) {
        answersButtons.removeChild(answersButtons.firstChild);
    }
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

   
    currentQuestion.answers.forEach((answers) => {
        
        const button = document.createElement("button");
        button.innerHTML = answers.texto;
        button.dataset.id = answers.id;
        button.classList.add("btn");
        answersButtons.appendChild(button);

      
        button.addEventListener("click", selectAnswer);
    });
}


function selectAnswer(e) {
   
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

  
    Array.from(answersButtons.children).forEach((button) => {
        if (button.dataset.id == correctAnswer.id){
            button.classList.add("correct");
        }

        button.disabled = true;
    });

    nextButton.style.display = "block"

}



function showScore() {
    resetState();

    if(pontuacao <= 5){
        questionElement.innerHTML = `nãããão.... <br>Voce acertou ${pontuacao} de ${questions.length}!<Br>
        Precisa melhorar!`;
    }
    
    else if(pontuacao < 7){
        questionElement.innerHTML = `<br>Voce acertou ${pontuacao} de ${questions.length}!<br>
        ! Está no caminho certo.`;
    }

    // else if(pontuacao < 10){
    //     questionElement.innerHTML = `<br>Voce acertou ${pontuacao} de ${questions.length}!<br>
    //     metade! Está no caminho certo.`;
    // }

    // else if(pontuacao <= 16){
    //     questionElement.innerHTML = `Parabéns! <br>Voce acertou ${pontuacao} de ${questions.length}!`;
    // }

    else{
         questionElement.innerHTML = `Voce acertou ${pontuacao} de ${questions.length}!<br>Parabéns você realmente sabe bastante sobre o jogo`;
    }

    nextButton.innerHTML = "Finalizar e salvar";
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

