// test
let n = prompt('名前を入力してください');
greet(n);
greet2(n);

function greet(name) {
  let message = 'こんにちは'
  alert(message + name);
  return;
}

function greet2(name) {
  let message = 'こんにちは'
  alert(name);
  return;
}