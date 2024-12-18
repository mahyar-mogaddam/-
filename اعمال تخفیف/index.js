let num1 = +prompt("قیمت اولیه را وارد کنید");
let num2 = +prompt("درصد تخفیف را وارد کنید");

let final = num1 - (num1 / 100) * num2;

alert(final);