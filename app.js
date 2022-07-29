import { renderGardenTools } from "./render-garden-tools.js";
import { gardenTools } from "./garden-tools-array.js";
import { renderCar } from "./render-cars.js";
import { cars } from "./cars-array.js";
const gardenToolListEl = document.getElementById('garden-tools-list');
const carsListEl = document.getElementById('cars-list');


let carCounter = 1;

for (let gardenTool of gardenTools) {
    const newToolEl = renderGardenTools(gardenTool);
    gardenToolListEl.append(newToolEl);
}

for (let car of cars) {
    const carHeader = document.createElement('h3');
    carHeader.textContent = `Car ${carCounter}`;
    carCounter++;
    carsListEl.append(carHeader);
    const newCarEl = renderCar(car);
    console.log(newCarEl);
    carsListEl.append(newCarEl);
}


// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
