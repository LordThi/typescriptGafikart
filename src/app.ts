const compteur = document.querySelector('#compteur');

let i = 0;

//Code sans typescript
// const increment = (e) => {
//     i++;
//     compteur.querySelector('span').innerText = i.toString();
// }

// compteur.addEventListener('click', increment);


// Code typé
const increment = (e: Event) => {
    i++;
    const span = compteur?.querySelector('span')
    if (span) {
        span.innerText = i.toString();
    }
}

compteur?.addEventListener('click', increment);