function selectLanguage(language) {
    document.getElementById('languageSelection').style.display = 'none';
    document.getElementById('backToSelection').style.display = 'block';
    const allLessons = document.querySelectorAll('.lesson-card');
    allLessons.forEach(lesson => {
        if (lesson.classList.contains(language)) {
            lesson.style.display = 'block'; 
        } else {
            lesson.style.display = 'none'; 
        }
    });
}

function resetSelection() {
    document.getElementById('languageSelection').style.display = 'block';
    document.getElementById('backToSelection').style.display = 'none';
    const allLessons = document.querySelectorAll('.lesson-card');
    allLessons.forEach(lesson => {
        lesson.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const allLessons = document.querySelectorAll('.lesson-card');
    allLessons.forEach(lesson => {
        lesson.style.display = 'none';
    });
});
