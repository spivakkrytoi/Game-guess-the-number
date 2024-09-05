// Отримуємо інпут за його id
var h1 = document.getElementById("h1");
var input = document.getElementById("input");

// Функція для збільшення значення
function func1() {
  // Отримуємо поточне значення, перетворюємо його на число і додаємо 1
  input.value = parseInt(input.value) + 1;
}

// Функція для зменшення значення
function func2() {
  // Отримуємо поточне значення, перетворюємо його на число і зменшуємо на 1
  input.value = parseInt(input.value) - 1;
}
function start() {
  var started = "The game started!";
  h1.innerHTML = started;
}
function chek() {
    var number = Math.floor(Math.random() * 10) + 1;
  
    // Виводимо загадане число в консоль
    console.log("Загадане число:", number);
    
    // Перетворюємо введене значення з інпуту на число
    var userInput = parseInt(input.value);
  
    var fail = "You  fail";
    var win = "You  win";
    
    // Перевірка введеного числа з випадковим числом
    if (userInput === number) {
      h1.innerHTML = win;
    } else {
      h1.innerHTML = fail;
    }
  }
  
  