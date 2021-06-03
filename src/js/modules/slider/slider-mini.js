import Slider from './slider';

export default class MiniSlider extends Slider {
  constructor(blockSelector, nextSelector, prevSelector, activeClass, animate, autoplay) {
    super(blockSelector, nextSelector, prevSelector, activeClass, animate, autoplay)
  }

  decorizeSlides() {
    this.slides.forEach(slide => {
      slide.classList.remove(this.activeClass)
      if (this.animate) {
        slide.querySelector('.card__title').style.opacity = '0.4'
        slide.querySelector('.card__controls-arrow').style.opacity = '0'
      }
    })
    this.slides[0].classList.add(this.activeClass)

    if (this.animate) {
      this.slides[0].querySelector('.card__title').style.opacity = '1'
      this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1'
    }
  }

  bindTriggers() {
    this.next.addEventListener('click', () => {
      this.block.appendChild(this.slides[0])
      this.decorizeSlides()
    })

    this.prev.addEventListener('click', () => {
      let active = this.slides[this.slides.length - 1]
      this.block.insertBefore(active, this.slides[0])
      this.decorizeSlides()
    })
  }

  init() {
    this.block.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      align-items: flex-start; `

    this.bindTriggers()
    this.decorizeSlides()

    if (this.autoplay) {
      setInterval(() => {
        this.next.click()
      }, 5000);
    }
  }

}
