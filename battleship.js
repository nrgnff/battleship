var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt('Будем стрелять! Введите число от 0 до 6');   
    if (guess < 0 || guess > 6) {
        alert('Введите корректное значение')
    } else {
        guesses += 1;               
            if (guess == location1 || guess == location2 || guess == location3) {
                alert('Попал');
                hits += 1;
                if (hits == 3) {
                    isSunk = true;
                    alert('Корабль потоплен!')
                }
            } else {
                alert('Мимо!');
            }
    }
}
var stats = "Ты использовал: " + guesses + ' попыток, твоя меткость составила ' + (3/guesses);
alert(stats)
