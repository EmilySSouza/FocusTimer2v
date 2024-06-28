import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import { updateDisplay } from "./timer.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
  sounds.minecraftClick.play();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");

  timer.updateDisplay();
  sounds.minecraftClick.play();
}

export function addMinutes() {
  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  minutes = minutes + 5;
  if(minutes > 60) {
    return;
  }

  seconds = seconds;

  updateDisplay(minutes, seconds);
  sounds.minecraftClick.play();
}

export function removeMinutes() {
  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  minutes = minutes - 5;
  if(minutes < 0) {
    return;
  }

  seconds = seconds;

  updateDisplay(minutes, seconds);
  sounds.minecraftClick.play();
}

export function florestOn() {
  
  state.florestOn = document.documentElement.classList.toggle("florestOn");

  if(state.rainOn) {
    document.documentElement.classList.remove("rainOn");
    sounds.buttonRain.pause();
  }
  if(state.cafeteriaOn) {
    document.documentElement.classList.remove("cafeteriaOn");
    sounds.buttonShopping.pause();
  }
  if(state.fireOn) {
    document.documentElement.classList.remove("fireOn");
    sounds.buttonBonfire.pause();
  }

  if(state.florestOn) {
    sounds.buttonTree.play();
    return;
  }

  sounds.buttonTree.pause();
}

export function rainOn() {
  state.rainOn = document.documentElement.classList.toggle("rainOn");

  if(state.cafeteriaOn) {
    document.documentElement.classList.remove("cafeteriaOn");
    sounds.buttonShopping.pause();
  }
  if(state.fireOn) {
    document.documentElement.classList.remove("fireOn");
    sounds.buttonBonfire.pause();
  }
  if(state.florestOn) {
    document.documentElement.classList.remove("florestOn");
    sounds.buttonTree.pause();
  }

  if(state.rainOn) {
    sounds.buttonRain.play();
    return;
  }

  sounds.buttonRain.pause();
}

export function cafeteriaOn() {
  state.cafeteriaOn = document.documentElement.classList.toggle("cafeteriaOn");

  if(state.rainOn) {
    document.documentElement.classList.remove("rainOn");
    sounds.buttonRain.pause();
  }
  if(state.fireOn) {
    document.documentElement.classList.remove("fireOn");
    sounds.buttonBonfire.pause();
  }
  if(state.florestOn) {
    document.documentElement.classList.remove("florestOn");
    sounds.buttonTree.pause();
  }

  if(state.cafeteriaOn) {
    sounds.buttonShopping.play();
    return;
  }

  sounds.buttonShopping.pause()
}

export function fireOn() {
  state.fireOn = document.documentElement.classList.toggle("fireOn");

  if(state.rainOn) {
    document.documentElement.classList.remove("rainOn");
    sounds.buttonRain.pause();
  }
  if(state.cafeteriaOn) {
    document.documentElement.classList.remove("cafeteriaOn");
    sounds.buttonShopping.pause();
  }
  if(state.florestOn) {
    document.documentElement.classList.remove("florestOn");
    sounds.buttonTree.pause();
  }

  if(state.fireOn) {
    sounds.buttonBonfire.play();
    return;
  }

  sounds.buttonBonfire.pause();
}
