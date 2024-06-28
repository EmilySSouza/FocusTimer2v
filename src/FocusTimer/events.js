import { controls, sounds } from "./elements.js";
import * as actions from "./actions.js";
import state from "./state.js";

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;

    if(actions[action]() != "function") {
      return;
    }

    actions[action]();
  })
}

export function registerSounds() {
  sounds.addEventListener("click", (event) => {
    const sound = event.target.dataset.sound;

    if(actions[sound]() != "function") {
      return;
    }
    
    actions[sound]();
  })
}