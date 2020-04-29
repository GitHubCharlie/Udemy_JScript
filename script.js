  let money= +prompt ("Ваш бюджет на месяц?", "");
  let time=prompt ("Введите дату в формате YYYY-MM-DD", "");
 
  let appData = {
  budget:money,
  timeData:time,
  expenses : {}, // Объект с обязательными расходами
  optionalExpenses: {}, // Объект с необязательными расходами
  income : [], // массив с дополнительными расходами
  savings:false
  }; 
  

  for (let i=0; i<2; i++) {
  let artikel= prompt("Введите обязательную статью расходов в этом месяце"," "),
      price= prompt("Во сколько обойдется?", "");

    if ( (typeof(artikel))==='string' && (typeof(artikel))!=null && (typeof(price))!==null
    && artikel!=null && price!=null)  {
        appData.expenses[artikel] = price; // присвоение нового свойства/метода объекту: Objekt[a]=b
        }
  }

  appData.moneyPerDay = appData.budget/30;
  alert ("Бюджет на один день обойдется в : " + appData.moneyPerDay + " рублей"); 
  

  if (appData.moneyPerDay<1000) {
    console.log ("Минимальный уровень достатка");
    } else if (appData.moneyPerDay>1000 && appData.moneyPerDay<10000) {
    console.log ("Уровень достатка средний");
  } else if (appData.moneyPerDay>10000){
    console.log ("Уровень достатка выше среднего");
  } else {
  console.log ("Непонятная ситуация");
  }

// DO-WHILE

/*let i=0;
do {
  let artikel = prompt("Введите обязательную статью расходов в этом месяце"," "),
      price = prompt("Во сколько обойдется?", "");
     
      if ( (typeof(artikel))==='string' && (typeof(artikel))!=null && (typeof(price))!==null
      && artikel!=null && price!=null ) {
        appData.expenses[artikel]=price;
      } else {
        console.log ("Попробуйте ввести заново");
        i--;
        }
      i++;
   }
   
 while (i<2);
 alert (" Ende");*/

 // WHILE
 /*let i=0;
 while (i<2) {
  let artikel = prompt("Введите обязательную статью расходов в этом месяце"," "),
      price = prompt("Во сколько обойдется?", "");
      if ( (typeof(artikel))==='string' && (typeof(artikel))!=null && (typeof(price))!==null
      && artikel!=null && price!=null ) {
      appData.expenses[artikel]=price;
    } else {
      console.log ("Попробуйте ввести заново");
      i--;
    }
    i++;
  }
  alert (" Ende");*/

