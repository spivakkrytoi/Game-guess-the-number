// Отримуємо елементи за їх id
var attempsElement = document.getElementById("attempsElement");
var h1 = document.getElementById("h1");
var input = document.getElementById("input");

// Оголошуємо змінну правильних спроб
var correct_attempts = 0;
var attemps = 3;

// Функція для збільшення значення
function func1() {
  input.value = parseInt(input.value) + 1;
  if (input.value > 10) {
    input.value = 10;
  }
}

// Функція для зменшення значення
function func2() {
  input.value = parseInt(input.value) - 1;
  if (input.value < 0) {
    input.value = 0;
  }
}

// Функція для початку гри
function start() {
  var started = "The game started!";
  h1.innerHTML = started;

  // Встановлюємо початкові значення спроб і правильних спроб
  attemps = 3;
  correct_attempts = 0;

  // Оновлюємо кількість спроб на сторінці
  attempsElement.innerHTML = attemps;
}

// Функція для перевірки відповіді
function chek() {
  // Генеруємо випадкове число від 1 до 10
  var number;
  if (attemps === 3){
    number = Math.floor(Math.random() * 3) + 1;
  }
  if (attemps === 2){
    number = Math.floor(Math.random() * 5) + 1;
  }
  if (attemps === 1){
    number = Math.floor(Math.random() * 10) + 1;
  }
  // Виводимо загадане число в консоль (для перевірки)
  console.log("Загадане число:", number);

  // Перетворюємо введене значення з інпуту на число
  var userInput = parseInt(input.value);

  var fail = "You fail";
  var win = "You win";

  // Перевірка введеного числа з випадковим числом
  if (userInput === number) {
    h1.innerHTML = win;
    correct_attempts++; // Збільшуємо кількість правильних спроб
  } else {
    h1.innerHTML = fail;
  }

  // Зменшуємо кількість спроб і оновлюємо відображення
  attemps--;
  attempsElement.innerHTML = attemps;

  // Якщо спроб більше немає
  if (attemps == 0) {
    if (correct_attempts >= 1) {
      h1.innerHTML = `You Have ${correct_attempts} correct attempts!!!`;
      attempsElement.innerHTML = "There is something to strive for!"
      if (correct_attempts === 3) {
        h1.innerHTML = `You Have ${correct_attempts} correct attempts!!!`;
        attempsElement.innerHTML = "You win !!!";
      }
    } else {
      h1.innerHTML = "You lost!!!";
    }
  }
}
