let n = prompt('名前を入力してください');
greet(n);

function greet(name) {
  let message = 'こんにちは'
  alert(message + name);
  return;
}