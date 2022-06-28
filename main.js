// Random Quiz

// Event Listener (Mark Quiz)
document.getElementById('mark-quiz').addEventListener('click', markQuiz);

// Event Function
function markQuiz() {
    // Initialize Score
    let score = 0;

    // Check Question 1
    let questionCorrect = document.getElementById('q1correct').checked;

    let result1El = document.getElementById('result1');
    if (questionCorrect) {
        result1El.innerHTML = 'Correct';
        result1El.style.color = 'green';
        score++;
    } else {
        result1El.innerHTML = 'Incorrect';
        result1El.style.color = 'red';
    }

    // Check Question 2
    questionCorrect = document.getElementById('q2correct').checked;

    let result2El = document.getElementById('result2');
    if (questionCorrect) {
        result2El.innerHTML = 'Correct';
        result2El.style.color = 'green';
        score++;
    } else {
        result2El.innerHTML = 'Incorrect';
        result2El.style.color = 'red';
    }

    // Check Question 3
    questionCorrect = document.getElementById('q3correct').checked;

    let result3El = document.getElementById('result3');
    if (questionCorrect) {
        result3El.innerHTML = 'Correct';
        result3El.style.color = 'green';
        score++;
    } else {
        result3El.innerHTML = 'Incorrect';
        result3El.style.color = 'red';
    }

    // Check Question 4
    questionCorrect = document.getElementById('q4correct').checked;

    let result4El = document.getElementById('result4');
    if (questionCorrect) {
        result4El.innerHTML = 'Correct';
        result4El.style.color = 'green';
        score++;
    } else {
        result4El.innerHTML = 'Incorrect';
        result4El.style.color = 'red';
    }

    // Display Quiz Results
    let percent = Math.round(score / 4 * 100);
    document.getElementById('quiz-score').innerHTML = score;
    document.getElementById('quiz-percent').innerHTML = percent;
}