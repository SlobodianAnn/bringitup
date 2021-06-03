export default class Slider {
  constructor({
    blockSelector = null,
    triggersNextSelector = null,
    triggersPrevSelector = null,
    nextSelector = null,
    prevSelector = null,
    activeClass = '',
    animate,
    autoplay
  } = {}) {
    this.block = document.querySelector(blockSelector);
    try {
      this.slides = this.block.children;
    } catch (e) {}

    this.triggersNext = [...document.querySelectorAll(triggersNextSelector)];
    this.triggersPrev = [...document.querySelectorAll(triggersPrevSelector)];
    this.prev = document.querySelector(prevSelector)
    this.next = document.querySelector(nextSelector)
    this.slideIndex = 1;
    this.activeClass = activeClass
    this.animate = animate
    this.autoplay = autoplay
  }

}
