let arr = [];

while (true) {
  let cmd = prompt("Введите команду:");

  if (cmd === "stop") {
    break; 
  }

  let parts = cmd.split(","); 
  let action = parts[0]; 
  let value = parts[1];

  if (action === "add") {
    arr.push(value); 
    console.log("Добавили:", value);
  }

  if (action === "del") {
    let index = arr.indexOf(value);
    arr.splice(index, 1);
    console.log("Удалили:", value);
  }
}

console.log("Конечный массив:", arr);


let array = [1,2,3,4,5,6,7,8,9,10,11];

let even = []; 
let odd = [];    

for (let i in array) {
  if (array[i] % 2 === 0) {
    even.push(array[i]);
  } else {
    odd.push(array[i]);
  }
}
console.log("Чётные числа:", even);
console.log("Нечётные числа:", odd);