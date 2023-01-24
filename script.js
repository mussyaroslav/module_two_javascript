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
const profit = String(prompt("Перечислите источники дополнительного дохода", "Фриланс"));
let extraMoney = Number(prompt(`Перечислите возможный доход за ваши дополнительные работы: ${profit}?`, "5000"));

const getAccumulatedIncome = function() {
  return money - amount + extraMoney;
}

let accumulatedIncome = getAccumulatedIncome();

const getTargetMonth = function() {
  return Math.ceil(purpose / accumulatedIncome);
}

let budgetDay = Math.floor(accumulatedIncome / 30);

console.log('Ваш бюджет на месяц с учетом ваших расходов составляет: ', getAccumulatedIncome());
console.log(`Ваша цель накопить ${purpose} с учетом всех ваших расходов будет достигнута через`, getTargetMonth() + ' месяца');
console.log('Дневной бюджет', budgetDay);

// if (budgetDay > 100000) {
//   console.log("У вас высокий уровень дохода");
// } else if (budgetDay > 30000 && budgetDay < 60000) {
//   console.log("У вас средний уровень дохода");
// } else if (budgetDay < 30000 && budgetDay > 0) {
//   console.log("К сожалению у вас уровень дохода ниже среднего");
// } else if (budgetDay < 0) {
//   console.log("Что то пошло не так")
// }