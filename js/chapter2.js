// // console に入力
// console.log('Hello');

// // dialog
// let test = prompt("名前を入力してください");
// confirm('名前は ' + test + ' でよろしいですか？');
// alert('hello ' + test);
  
// // BMI
// let weight = prompt("BMIを測定します。体重(kg)を入力してください。");
// let height = prompt("次に身長(m)を入力してください。");
// let bmi = weight / (height * height)

// alert('あなたのBMIは' + bmi + "です。")

// Humberger
let budget = prompt('所持金はいくらですか？');
budget = parseFloat(budget);

let flag = confirm('お腹は空いていますか？');

if(budget >= 1500 && flag){
  alert('ピザを注文しました。')
} else if(budget >= 500 && flag){
  alert('ポテトを注文しました。')
} else if(flag) {
  alert('節約しましょう。')
}