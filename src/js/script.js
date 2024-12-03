let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let eyel = document.querySelector(".eyeball-l");
let eyer = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");


let normalEyeStyle = () => {
    eyel.style.cssText = `
    left: 0.6em;
    top: 0.6em;
    `;
    eyer.style.cssText = `
    right: 0.6em;
    top: 0.6em;
    `;
};

let normalHandStyle = () => {
    handL.style.cssText = `
    height: 2.81em;
    top: 8.4em;
    left: 7.5em;
    transform: rotate(0deg);
      transition: 0.4s;
    `;
    handR.style.cssText = `
    height: 2.81em;
    top: 8.4em;
    right: 7.5em;
    transform: rotate(0deg);
      transition: 0.4s;
    `;
};


usernameRef.addEventListener("focus", () => {
    eyel.style.cssText = `
    left: 0.75em;
    top: 1.12em;
    `;
    eyer.style.cssText = `
    right: 0.75em;
    top: 1.12em;
    `;
    normalHandStyle();
});
//When clicked on password input
passwordRef.addEventListener("focus", () => {
    handL.style.cssText = `
    height: 6.56em;
    top: 3.87em;
    left: 11.75em;
    transform: rotate(-155deg);
      transition: 0.4s;
    `;
    handR.style.cssText = `
    height: 6.56em;
    top: 3.87em;
    right: 11.75em;
    transform: rotate(155deg);
      transition: 0.4s;
    `;
    normalEyeStyle();
});
//When clicked outside username and password input
document.addEventListener("click", (e) => {
    let clickedElem = e.target;
    if (clickedElem != usernameRef && clickedElem != passwordRef) {
        normalEyeStyle();
        normalHandStyle();
    }
});