var body = document.getElementById('body');
var button = document.getElementById('button');

button.onclick = function () {
  if (body.className == 'bgColor') {
    body.className = 'bgColor2';
    button.className = 'white';
  } else {
    body.className = 'bgColor';
    button.className = 'black';
  }
};

document.getElementById('img1').addEventListener('mouseover', function () {
  this.style.filter = 'grayscale(0%)';
});
document.getElementById('img1').addEventListener('mouseout', function () {
  this.style.filter = 'grayscale(100%)';
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 400) {
    this.document.body.style.background = 'green';
  } else {
    this.document.body.style.background = 'gray';
  }
});

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) document.write(i + '<br>');
// }

// let i = 1;
// while (i <= 100) {
//   document.write(i + '<br>');
//   i++;
// }

// let i = 10;
// do {
//   document.write(i + '<br>');
//   i++;
// } while (i <= 5);

// {
//   let password;
//   do {
//     password = prompt('What Is The PassCode?');
//   } while (password !== 'rakit');
// }

let subject = ['Math ', 'physics ', 'Chemistry ', 'Biology'];

subject.splice(1, 2);

document.write(subject + '<br>');
document.write(subject.length);
