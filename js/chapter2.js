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

// // Humberger
// let budget = prompt('所持金はいくらですか？');
// budget = parseFloat(budget);

// let flag = confirm('お腹は空いていますか？');

// if(budget >= 1500 && flag){
//   alert('ピザを注文しました。')
// } else if(budget >= 500 && flag){
//   alert('ポテトを注文しました。')
// } else if(flag) {
//   alert('節約しましょう。')
// }

// janken
const GU    = 1;
const CHOKI = 2;
const PA    = 3;

let hum = prompt('1〜3の数値を入力してください。\n\n' + GU + ':グー\n' + CHOKI + ':チョキ\n' + PA + ':パー\n')
hum = parseInt(hum, 10)

if (hum != GU && hum != CHOKI && hum != PA){
  alert('入力値を上手く認識できませんでした。\nブラウザを再読み込みすると、もう一度挑戦できます。')
} else {
  
}