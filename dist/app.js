"use strict";
const compteur = document.querySelector('#compteur');
let i = 0;
//Code sans typescript
// const increment = (e) => {
//     i++;
//     compteur.querySelector('span').innerText = i.toString();
// }
// compteur.addEventListener('click', increment);
// Code typé
const increment = (e) => {
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
