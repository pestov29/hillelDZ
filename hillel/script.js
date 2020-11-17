
// Вывести в консоль произвольные значения 5 разными методами

let myConditionalNumber = 700; // обьявил переменную и придал ей значение 700

myConditionalNumber = myConditionalNumber + 5; // Прибавил к переменной 5 

console.log(myConditionalNumber);

// 2) 

let price; // создаем переменную но не придаем ей значение чтобы получить undefined;

console.log(price); // выводим переменную price без какого либо присвоенного значения после чего получаем undefined

// 3) 

let empty = null; // создаем переменную empty и присваиваем ей значение null 

console.log(empty); // выводим null через переменную empty 

// 4) 

let boolean = true; // создаем переменную boolean и присваимаем ей значение true

console.log(boolean); // выводим булевое значение true, тоже самое работает и с false

// 5) 

let obj = {} // создаем переменную obj и придаем ей значения обьекта

console.log(obj); // выводим обьект 

let askFirstNumber = prompt('Введите любое число'); // создаю переменную придаю ей prompt

askFirstNumber = Number(askFirstNumber);

console.log(askFirstNumber); // пользователь вводит 1-ое число

let askSecondNumber = prompt('А теперь давайте введем второе число', []); // тоже самое

askSecondNumber = Number(askSecondNumber); // преобразовываю строку в число 

console.log(askSecondNumber); // вывожу через консоль второй запрос

let askThirdNumber = prompt('Ну и напоследок третье'); // создаю новую переменную и запрашиваю третью цифру

askThirdNumber = Number(askThirdNumber); // преобразовываю в число

console.log(askThirdNumber); // вывожу в консоль 

let average = ( askFirstNumber + askSecondNumber + askThirdNumber ) / 3 ; // создаю переменную которая считает среднее арифметическое

alert(`Ваше среднеареметическое число - ${average}`); // вывожу всплывающее окно с результатом 


































