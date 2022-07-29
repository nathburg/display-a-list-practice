import { renderGardenTools } from "./render-garden-tools.js";
import { gardenTools } from "./garden-tools-array.js";
const gardenToolListEl = document.getElementById('garden-tools-list');

for (let gardenTool of gardenTools) {
    const newToolEl = renderGardenTools(gardenTool);
    gardenToolListEl.appendChild(newToolEl);
}

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
