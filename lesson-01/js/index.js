const age = 10; //числовой литерал
const totalPrice = 200.74; //
const userName = 'Mango'; //строчный литерал
const message = 'Добро пожаловать!'; //
const isOpen = true; //буливое значение
const shouldConfirm = false;

console.log('Цена:', totalPrice);

const shouldRenew = confirm('Хотите продлить подписку?');
console.log(shouldRenew);

// const quantity = prompt('Введите количество товаров');
// console.log(quantity);

let quantity = prompt('Введите количество товаров');
quantity = Number(quantity);
console.log(quantity);

// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);
// console.log(result);

let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth);
console.log('elementWidh: ', elementWidth);

let elementHeight = 200.75;
elementHeight = Number.parseFloat(elementHeight);
console.log('elementHeight: ', elementHeight);

let salary = 1300.1647;
salary = Number(salary.toFixed(2));
console.log(salary);

const base = 2;
const power = 5;
console.log(base ** power);

const max = 80;
const min = 10;
const result = Math.round(Math.random() * (max - min) + min);
console.log(result);

const firstName = 'Chelsy';
const lastName = 'Emerald';
const room = 716;
const type = 'VIP';
const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}.`;
console.log(welcomeMsg);
