// Crie um objeto que possuirá 2 propriedades, 
//ambas do tipo array: receitas e despesas. 
//Agora, crie uma função que irá calcular o total de 
//receitas e despesas e irá mostrar uma mensagem se 
//a família está com saldo positivo ou negativo, 
//seguido do valor do saldo.

 let familyMoney = {
   incomes: [5000],
   expenses: [40, 50, 150, 360, 500, 1600, 45],
 }

 const sumMoney = (array) => {
   let total = 0;
   for (let value of array) {
    total += value;
   }
   return total;
 }

 const calculateFamilyMoney = () => {
  const calculateIncomes = sumMoney(familyMoney.incomes);
  const calculateExpenses = sumMoney(familyMoney.expenses);
  const total = calculateIncomes - calculateExpenses;
  if (total <= 0) {
    console.log(`Saldo negativo: ${total}`)
  } else {
    console.log(`Saldo positivo: ${total}`)
  }
};

 //testing function
 calculateFamilyMoney(familyMoney);