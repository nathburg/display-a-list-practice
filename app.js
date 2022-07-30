import { renderGardenTools } from "./render-garden-tools.js";
import { gardenTools } from "./garden-tools-array.js";
import { renderCar } from "./render-cars.js";
import { cars } from "./cars-array.js";
import { renderApartments } from "./render-apartments.js";
import { apartments } from "./apartments-array.js";
import { renderBabies } from "./render-babies.js";
import { babies } from "./babies-array.js";

const gardenToolListEl = document.getElementById('garden-tools-list');
const carsListEl = document.getElementById('cars-list');
const apartmentsListEl = document.getElementById('apartments-list');
const babiesListEl = document.getElementById('babies-list');


let carCounter = 1;
let apartmentCounter = 1;
let babyCounter = 1;

for (let gardenTool of gardenTools) {
    gardenToolListEl.append(renderGardenTools(gardenTool));
}

for (let car of cars) {
    const carHeader = document.createElement('h3');
    carHeader.textContent = `Car ${carCounter}`;
    carCounter++;
    carsListEl.append(carHeader);
    carsListEl.append(renderCar(car));
}

for (let apartment of apartments) {
    const apartmentHeader = document.createElement('h3');
    apartmentHeader.textContent = `Apartment ${apartmentCounter}`;
    apartmentCounter++;
    apartmentsListEl.append(apartmentHeader);
    apartmentsListEl.append(renderApartments(apartment));
};

for (let baby of babies) {
    const newBaby = document.createElement('h1');
    babiesListEl.append(newBaby);
    newBaby.textContent = `Baby ${babyCounter}`;
    babyCounter++;
    babiesListEl.append(renderBabies(baby));
};