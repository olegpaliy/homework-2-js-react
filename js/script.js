//завдання 1/2
let hrivna = +prompt("скікі бабосиків у тебе є?");
let usd;
let eur;
let oil;
let gold;
if (
  hrivna &&
  !isNaN(hrivna) &&
  typeof hrivna !== null &&
  typeof hrivna !== undefined
) {
  eur = 0.03 * hrivna;
  oil = 0.000896 * hrivna;
  usd = 0.036 * hrivna;
  gold = 0.00057 * hrivna;
  alert(
    `${hrivna} гривень це ${usd.toFixed(2)} $, ${eur.toFixed(
      2
    )} €, ${oil.toFixed(1)} барелів, ${gold.toFixed(1)} грамів золота.`
  );
} else {
  alert("ви ввели 0, введіть норм число");
}

//завдання 3
let sum = +prompt("введіть суму замовлення?");
let saleResult;
if (sum && !isNaN(sum)) {
  if (sum < 500) {
    saleResult = sum - sum * 0.01;
    alert(`сумма з урахуванням знижки ${saleResult}`);
  } else if (sum == 500 && sum < 1000) {
    saleResult = sum - sum * 0.05;
    alert(`сумма з урахуванням знижки ${saleResult}`);
  } else if (sum >= 1000) {
    saleResult = sum - (sum * 0.1 + 200);
    alert(
      `сумма з урахуванням знижки ${saleResult} з урахуванням подарункового сертифікату`
    );
  }
} else {
  alert("ви ввели 0");
}

//завдання 4
let test1 = prompt(
  "чи потрібно на день випивати мінімум 2 л води? так, або ні"
);
let test2 = prompt(
  "чи потрібно в день ходити мінімум 8 тис кроків? так, або ні"
);
let test3 = prompt(
  "чи потрібно іти хоча б раз на тиждень іти в паб :)? так, або ні"
);
let test4 = prompt("у році 367 дні? так, або ні");
let test5 = prompt("всесвіту 2 млрд роки? так, або ні");
let resultTest = 0;

if (test1 === "так") {
  resultTest = resultTest + 1;
}
if (test2 === "так") {
  resultTest = resultTest + 1;
}
if (test3 === "так") {
  resultTest = resultTest + 1;
}
if (test4 === "ні") {
  resultTest = resultTest + 1;
}
if (test5 === "ні") {
  resultTest = resultTest + 1;
}
if (resultTest === 5) {
  resultTest = resultTest + 1;
}
alert(`твій результат ${resultTest}`);

//завдання 5
let numb = prompt("Введіть 3-х значне число");
let NumOfStr = numb.split("");
let firstNum = NumOfStr[0];
let secNum = NumOfStr[1];
let thirdNum = NumOfStr[2];
if (firstNum == secNum || firstNum == thirdNum || secNum == thirdNum) {
  alert(`У числі ${numb} є однакові числа`);
} else {
  alert(`У числі ${numb} немає однакових чисел`);
}

//завдання 6
let key = prompt("введіть клавішу від 1 до =");
if (key == "1") {
  alert(`якщо натиснути ${key} з shift, то отримаємо !`);
} else if (key == "2") {
  alert(`якщо натиснути ${key} з shift, то отримаємо @`);
} else if (key == "3") {
  alert(`якщо натиснути ${key} з shift, то отримаємо #`);
} else if (key == "4") {
  alert(`якщо натиснути ${key} з shift, то отримаємо $`);
} else if (key == "5") {
  alert(`якщо натиснути ${key} з shift, то отримаємо %`);
} else if (key == "6") {
  alert(`якщо натиснути ${key} з shift, то отримаємо ^`);
} else if (key == "7") {
  alert(`якщо натиснути ${key} з shift, то отримаємо &`);
} else if (key == "8") {
  alert(`якщо натиснути ${key} з shift, то отримаємо *`);
} else if (key == "9") {
  alert(`якщо натиснути ${key} з shift, то отримаємо ()`);
}
