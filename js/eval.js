let currentQuestionIndex = 0;
let score = 0;
let questions = [];

function startQuiz(language) {
    questions = getQuestionsByLanguage(language);
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById('quiz_selection').style.display = 'none';
    document.getElementById('quiz_area').style.display = 'block';

    showQuestion();
}

function getQuestionsByLanguage(language) {
    if (language === 'quechua') {
        return [
            { question: "¿Cómo se dice 'hola' en Quechua?", options: ["Kamisaraki", "Allinllachu", "P'unchay"], answer: 1 },
            { question: "¿Qué significa 'Tinku'?", options: ["Encuentro", "Saludo", "Adiós"], answer: 0 }
        ];
    } else if (language === 'aimara') {
        return [
            { question: "¿Cómo se dice 'gracias' en Aimara?", options: ["Aski", "Nayra", "Jilata"], answer: 0 }
        ];
    } else if (language === 'shipibo') {
        return [
            { question: "¿Cómo se dice 'casa' en Shipibo?", options: ["Jono", "Pishin", "Tio"], answer: 0 }
        ];
    }
    return [];
}


function showQuestion() {
    const questionContainer = document.getElementById('quiz_question');
    const optionsContainer = document.getElementById('quiz_options');
    const nextButton = document.getElementById('next_question');

    const question = questions[currentQuestionIndex];
    questionContainer.textContent = question.question;

    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'quiz_option_button';
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    nextButton.style.display = 'none';
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const nextButton = document.getElementById('next_question');

    if (selectedIndex === question.answer) {
        score++;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        nextButton.style.display = 'block';
        nextButton.onclick = showQuestion;
    } else {
        document.getElementById('quiz_question').textContent = `¡Has terminado! Puntuación final: ${score}/${questions.length}`;
        document.getElementById('quiz_options').innerHTML = '';
        document.getElementById('next_question').style.display = 'none';
        document.getElementById('back_to_selection').style.display = 'block';
    }

    document.getElementById('score').textContent = score;
}

function returnToSelection() {
    document.getElementById('quiz_selection').style.display = 'block';
    document.getElementById('quiz_area').style.display = 'none';
}
