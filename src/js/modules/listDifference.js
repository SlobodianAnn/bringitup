export default class ListDifference {
  constructor(columnSelector, cardsSelector) {
    this.column = document.querySelector(columnSelector)
    this.columnCards = this.column.querySelectorAll(cardsSelector)
    this.columnCounter = 0
  }

  bindTriggers() {
    this.column.querySelector('.plus').addEventListener('click', () => {
      if (this.columnCounter !== this.columnCards.length - 2) {
        this.columnCards[this.columnCounter].style.display = 'flex'
        this.columnCounter++
      } else {
        this.columnCards[this.columnCounter].style.display = 'flex'
        this.columnCards[this.columnCards.length - 1].remove();
      }
    })
  }

  hideItems() {
    this.columnCards.forEach((item, i, arr) => {
      if (i !== arr.length - 1) {
        item.style.display = 'none'
      }
    });
  }

  init() {
    this.hideItems()
    this.bindTriggers()
  }
}
