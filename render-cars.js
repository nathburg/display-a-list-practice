export function renderCar(car) {
    const carEl = document.createElement('div');
    const makeEl = document.createElement('p');
    const modelEl = document.createElement('p');
    const colorEl = document.createElement('p');
    const mileageEl = document.createElement('p');
    const previousOwnersEl = document.createElement('ul');

    makeEl.textContent = `Make: ${car.make}`
    modelEl.textContent = `Model: ${car.model}`
    colorEl.textContent = `It is a beautiful ${car.color} color!`
    mileageEl.textContent = `With only ${car.mileage} miles on it!`
    previousOwnersEl.textContent = "The previous owners are:"

    carEl.append(makeEl);
    carEl.append(modelEl);
    carEl.append(colorEl);
    carEl.append(mileageEl);
    carEl.append(previousOwnersEl);

    for (let previousOwner of car.previousOwners) {
        const newPreviousOwner = document.createElement('li');
        newPreviousOwner.textContent = previousOwner;
        previousOwnersEl.append(newPreviousOwner);
    }

    carEl.classList.add('car');

    return carEl;
}