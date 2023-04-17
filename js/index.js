var countLeft = 0;
var countRight = 0;
function result() {
  // Генерация случайных чисел
  function roll() {
    return Math.floor(Math.random() * 6);
  }
  let dice = [roll(), roll()];
  // Смена изображения
  function image(number) {
    if (number === 0) {
      return "img/dice1.png";
    } else if (number === 1) {
      return "img/dice2.png";
    } else if (number === 2) {
      return "img/dice3.png";
    } else if (number === 3) {
      return "img/dice4.png";
    } else if (number === 4) {
      return "img/dice5.png";
    } else {
      return "img/dice6.png";
    }
  }
  document.querySelector(".dice-left").setAttribute("src", image(dice[0]));
  document.querySelector(".dice-right").setAttribute("src", image(dice[1]));
  // Сравнение результатов
  if (dice[0] > dice[1]) {
    document.querySelector("h1").innerText = "Саша выиграл!";
    countLeft++;
    document.querySelector(".countLeft").innerText = countLeft;
  } else if (dice[0] < dice[1]) {
    document.querySelector("h1").innerText = "Аня выиграла!";
    countRight++;
    document.querySelector(".countRight").innerText = countRight;
  } else {
    document.querySelector("h1").innerText = "Ничья!";
  }
}
