export function renderBabies(baby) {
    const babyEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const hairEl = document.createElement('p');
    const toyEl = document.createElement('p');
    const objectEl = document.createElement('p');

    nameEl.textContent = `This cute little baby is named ${baby.name}.`;
    hairEl.textContent = `You can see ${baby.gender.possessiveAdjective} hair is ${baby.hairColor}, but it feels ${baby.hairTexture} to the touch.`;
    toyEl.textContent = `Poor thing, ${baby.gender.subject} lost ${baby.gender.possessiveAdjective} ${baby.object}, so if you see one around, it's probably ${baby.gender.possessivePronoun}.`;
    objectEl.textContent = `You'll be ${baby.gender.possessiveAdjective} favorite person if you get it back to ${baby.gender.object}.`;
    
    babyEl.append(nameEl);
    babyEl.append(hairEl);
    babyEl.append(toyEl);
    babyEl.append(objectEl);

    babyEl.classList.add('baby');
    
    return babyEl;
}