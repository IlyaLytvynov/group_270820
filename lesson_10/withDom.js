function greet() {
  const name = prompt('Enter name:');
  let greetPhrase;
  if (name === 'admin') { // ===
    greetPhrase = 'Hello admin!!! Good to see you🥰😘😘!!';// конкатинируем строки
  } else {
    greetPhrase = 'Hello ' + name + '!!!🧐🤨';// конкатинируем строки
  }
  document.write(greetPhrase);
}

function welcome() {
  alert('Welcome to my cool site!!😀😃😍')
}