// Создаем пустой массив и добавляем случайные оценки для 12 студентов
let grades = [];
for (let i = 0; i < 12; i++) {
    grades.push(Math.floor(Math.random() * 100) + 1);
}

// Рассчитываем средний балл
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;

// Находим максимальный и минимальный балл
let maxGrade = Math.max(...grades);
let minGrade = Math.min(...grades);

// Фильтруем положительные и отрицательные оценки
let positiveGrades = grades.filter(grade => grade >= 60);
let negativeGrades = grades.filter(grade => grade < 60);

// Функция для преобразования числовых оценок в буквенный формат
function convertToLetterGrade(grade) {
    if (grade >= 80) {
        return 'A';
    } else if (grade >= 60) {
        return 'B';
    } else if (grade >= 40) {
        return 'C';
    } else if (grade >= 20) {
        return 'D';
    } else {
        return 'E';
    }
}

// Преобразуем оценки в буквенный формат
let letterGrades = grades.map(grade => convertToLetterGrade(grade));

// Выводим результат на экран
console.log("Средний балл студентов: " + averageGrade.toFixed(2));
console.log("Максимальный балл: " + maxGrade);
console.log("Минимальный балл: " + minGrade);
console.log("Количество студентов с оценками выше или равными 60: " + positiveGrades.length);
console.log("Количество студентов с оценками ниже 60: " + negativeGrades.length);
console.log("Оценки в буквенном формате: " + letterGrades.join(", "));
