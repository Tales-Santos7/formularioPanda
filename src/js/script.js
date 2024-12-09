let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let olhol = document.querySelector(".bolaOlho-l");
let olhor = document.querySelector(".bolaOlho-r");
let maoL = document.querySelector(".mao-l");
let maoR = document.querySelector(".mao-r");

let normalOlhoStyle = () => {
    olhol.style.cssText = `
    left: 10px;
    top: 10px;
    `;
    olhor.style.cssText = `
    right: 10px;
    top: 10px;
    `;
};

let normalMaoStyle = () => {
    maoL.style.cssText = `
    height: 45px;
    top: 134px;
    left: 120px;
    transform: rotate(0deg);
      transition: 0.4s;
    `;
    maoR.style.cssText = `
    height: 45px;
    top: 134px;
    right: 120px;
    transform: rotate(0deg);
      transition: 0.4s;
    `;
};

usernameRef.addEventListener("focus", () => {
    olhol.style.cssText = `
    left: 12px;
    top: 18px;
    `;
    olhor.style.cssText = `
    right: 12px;
    top: 18px;
    `;
    normalMaoStyle();
});

// Quando clicado no campo senha
passwordRef.addEventListener("focus", () => {
    maoL.style.cssText = `
    height: 105px;
    top: 62px;
    left: 188px;
    transform: rotate(-155deg);
      transition: 0.4s;
    `;
    maoR.style.cssText = `
    height: 105px;
    top: 62px;
    right: 188px;
    transform: rotate(155deg);
      transition: 0.4s;
    `;
    normalOlhoStyle();
});

// Quando clicado fora do nome de usuário e/ou campo da senha
document.addEventListener("click", (e) => {
    let clickedElem = e.target;
    if (clickedElem != usernameRef && clickedElem != passwordRef) {
        normalOlhoStyle();
        normalMaoStyle();
    }
});
