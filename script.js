const cards = document.getElementsByClassName('card');

for (let i = 0; i < cards.length; i++) {
    const iconsContainer = document.createElement('div');
    iconsContainer.setAttribute('class', 'icons');

    const favIcon = document.createElement('img');
    favIcon.setAttribute('src', './assets/star-plus-outline.png');
    const observeIcon = document.createElement('img');
    observeIcon.setAttribute('src', './assets/eye-plus-outline.png');

    const forkIcon = document.createElement('img');
    forkIcon.setAttribute('src', './assets/source-fork.png');

    iconsContainer.appendChild(favIcon);
    iconsContainer.appendChild(observeIcon);
    iconsContainer.appendChild(forkIcon);

    const element = cards[i];
    element.appendChild(iconsContainer);
}

