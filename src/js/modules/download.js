export default class DownloadBtn {
  constructor(triggerSelector, pathFile) {
    this.triggers = [...document.querySelectorAll(triggerSelector)]
    this.pathFile = pathFile
  }

  createLink(path) {
    const elem = document.createElement('a')
    elem.setAttribute('href', path)
    elem.setAttribute('download', 'nice_picture');

    elem.style.display = 'none';
    document.body.appendChild(elem);
    elem.click();

    document.body.removeChild(elem);
  }

  init() {
    this.triggers.forEach(btn => {
      btn.addEventListener('click', () => {
        console.log('dfdf')
        this.createLink(this.pathFile)
      })
    });
  }
}
