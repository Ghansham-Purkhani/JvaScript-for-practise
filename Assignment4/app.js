
let randomColor = Math.floor(Math.random() * 16777215).toString(16);
randomColor = `#${randomColor.padStart(6, '0')}`;
document.body.style.backgroundColor = randomColor;
document.body.innerHTML = `<h1 style="color: white; text-align: center; margin-top: 20%;">Random Color: ${randomColor}</h1>`;