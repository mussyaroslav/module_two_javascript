'use strict'

let money = prompt("Ваш месячный доход?", "30000");

while(isNaN(money)) {
  alert('Не число');
  money = prompt("Ваш месячный доход?", "30000");
}

let amount = prompt("Во сколько обойдуться обязательные статьи расходов?", "10000");

while(isNaN(amount)) {
  alert('Не число');
  amount = prompt("Во сколько обойдуться обязательные статьи расходов?", "10000");
}

let extraMoney = prompt(`Перечислите возможный доход за ваши дополнительные работы?`, "5000");

while(isNaN(extraMoney)) {
  alert('Не число');
  extraMoney = prompt(`Перечислите возможный доход за ваши дополнительные работы?`, "5000");
}

const expenses = String(prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "Питание, проезд, одежда"));
const purpose = Number(prompt("Сколько нужно накопить", "60000"));
const deposit = confirm("Есть ли у вас вклад в банке?");
const profit = String(prompt("Перечислите источники дополнительного дохода", "Фриланс"));

const getAccumulatedIncome = function() {
  return money - amount + extraMoney;
}

let accumulatedIncome = getAccumulatedIncome();

const getTargetMonth = function() {
  return Math.ceil(purpose / accumulatedIncome);
}

let budgetDay = Math.floor(accumulatedIncome / 30);

console.log('Ваш бюджет на месяц с учетом ваших расходов составляет: ', getAccumulatedIncome());
if(getTargetMonth() > 0) {
  console.log(`Ваша цель накопить ${purpose} с учетом всех ваших расходов будет достигнута через`, getTargetMonth() + ' месяца');
} else {
  console.log('Цель не будет достигнута');
}
console.log('Дневной бюджет', budgetDay);