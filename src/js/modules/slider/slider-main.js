import Slider from './slider'

export default class MainSlider extends Slider {
  constructor(triggersNextSelector, triggersPrevSelector) {
    super(triggersNextSelector, triggersPrevSelector)
  }
  showSlides(n) {

    try {
      this.showPopup('.hanson', n)
    } catch (e) {}

    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    this.slides.forEach(slide => {
      slide.style.display = 'none'
    })

    this.slides[this.slideIndex - 1].style.display = 'block'
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n)
  }
  bindTriggers() {
    this.triggersNext.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault()
        this.plusSlides(1);
      })

      trigger.parentNode.previousElementSibling.addEventListener('click', (e) => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      })
    });
    this.triggersPrev.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault()
        this.plusSlides(-1)
      })
    })
  }

  render() {
    if (this.block) {
      this.bindTriggers();
      this.showSlides(this.slideIndex);
    }
  }

  showPopup(blockSelector, n) {
    this.popup = document.querySelector(blockSelector);
    this.popup.style.opacity = '0';

    if (n === 3) {
      this.popup.classList.add('animated')
      setTimeout(() => {
        this.popup.style.opacity = '1';
        this.popup.classList.add('slideInUp')
      }, 3000)
    } else {
      this.popup.classList.remove('slideInUp')
    }
  }
}
