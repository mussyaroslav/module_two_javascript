'use strict'

const money = 30000;
const profit = 'Фриланс';
const expenses = 'Питание, проезд, одежда';
const purpose = 60000;
const period = 3;
const budgetDay = money / 30;

console.log('Money тип данных: ', typeof money);
console.log('Profit тип данных: ', typeof profit);
console.log('Expenses длина строки: ', expenses.length);
console.log(`Период равен ${period} месяца`);
console.log(`Цельзаработать ${purpose} рублей`);
console.log(`Дневной бюджет равен ${budgetDay}`);