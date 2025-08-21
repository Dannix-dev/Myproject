// const menuPop = document.getElementById("burger-botton");
// menuPop.addEventListener("click", function () {
//     document.querySelector("body").classList.toggle("open");
//     document.body.style.overflowY = 'hidden';
// });

// const menuPopDown = document.getElementById("burger-botton");
// menuPopDown.addEventListener("click", function () {
//     document.querySelector("body").classList.toggle("close");
//     document.body.style.overflowY = 'visible';
// });

// const hamburgerButton = document.querySelector("#burger-botton");
// const body = document.body;

// hamburgerButton.addEventListener("click", () => {
//     document.querySelector("body").classList.toggle("open");
//     if (body.style.overflowY === 'hidden') {
//         body.style.overflowY = 'visible'; // Or 'auto'
//     } else {
//         body.style.overflowY = 'hidden'
//     }
// });


const hamburgerButton = document.querySelector("#burger-botton"); // Select your hamburger button
const body = document.body;

hamburgerButton.addEventListener('click', () => {
    document.querySelector("body").classList.toggle("open");
    body.classList.toggle("no-scroll");
});