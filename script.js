'use strict'

// const money = 30000;
// const profit = 'Фриланс';
// const expenses = 'Питание, проезд, одежда';
// const purpose = 60000;
// const period = 3;
// const budgetDay = money / 30;

// console.log('Money тип данных: ', typeof money);
// console.log('Profit тип данных: ', typeof profit);
// console.log('Expenses длина строки: ', expenses.length);
// console.log(`Период равен ${period} месяца`);
// console.log(`Цельзаработать ${purpose} рублей`);
// console.log(`Дневной бюджет равен ${budgetDay}`);

const money = Number(prompt("Ваш месячный доход?", "30000"));
const expenses = String(prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "Питание, проезд, одежда"));
const amount = Number(prompt("Во сколько обойдуться обязательные статьи расходов?", "10000"));
const purpose = Number(prompt("Сколько нужно накопить", "60000"));
const deposit = confirm("Есть ли у вас вклад в банке?");
const budgetMonth = money - amount;
let period = Math.ceil(purpose / budgetMonth);
let budgetDay = Math.floor(budgetMonth / 30);

console.log(`Бюджет на месяц ${budgetMonth}`);
console.log(`За сколько месяцев будет достигнута цель ${period}`);
console.log(`Бюджет на день ${budgetDay}`);

if (budgetDay > 100000) {
  console.log("У вас высокий уровень дохода");
} else if (budgetDay > 30000 && budgetDay < 60000) {
  console.log("У вас средний уровень дохода");
} else if (budgetDay < 30000 && budgetDay > 0) {
  console.log("К сожалению у вас уровень дохода ниже среднего");
} else if (budgetDay < 0) {
  console.log("Что то пошло не так")
}