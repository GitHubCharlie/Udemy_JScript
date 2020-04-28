

let money=prompt ("Ваш бюджет на месяц?", "");
let time=prompt ("Введите дату в формате YYYY-MM-DD", "");




let appData = {
  budget:money,
  timeData:time,
  expenses : {}, // Объект с обязательными расходами
  optionalExpenses: {}, // Объект с необязательными расходами
  income : [], // массив с дополнительными расходами
  savings:false
 }; 

 let artikel1= prompt("Введите обязательную статью расходов в этом месяце"," "),
     price1= prompt("Во сколько обойдется?", ""),
     artikel2= prompt("Введите обязательную статью расходов в этом месяце", " "),
     price2= prompt("Во сколько обойдется?", "");

 appData.expenses[artikel1]=price1; 
 appData.expenses[artikel2]=price2;
  

  alert ("Бюджет на один день обойдется в : "+appData.budget/30 + " рублей");

