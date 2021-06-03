export default class Form {
  constructor(forms) {
    this.forms = document.querySelectorAll(forms);
    this.inputs = document.querySelectorAll('input');
    this.message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с вами свяжемся!',
      failure: 'Что-то пошло не так...'
    };
    this.path = 'assets/question.php';
    this.statusMessage
  }

  clearInputs() {
    this.inputs.forEach(item => {
      item.value = '';
    });
  }

  checkMailInputs() {
    const mailInputs = document.querySelectorAll('[type="email"]');

    mailInputs.forEach(input => {
      input.addEventListener('keypress', function (e) {
        if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
          e.preventDefault();
        }
      });
    });
  }

  initMask() {

    let setCursorPosition = (pos, elem) => {
      elem.focus();

      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        let range = elem.createTextRange();

        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    };

    function createMask(event) {
      let matrix = '+1 (___) ___-____',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');

      if (def.length >= val.length) {
        val = def;
      }

      this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      });

      if (event.type === 'blur') {
        if (this.value.length == 2) {
          this.value = '';
        }
      } else {
        setCursorPosition(this.value.length, this);
      }
    }

    let inputs = document.querySelectorAll('[name="phone"]');

    inputs.forEach(input => {
      input.addEventListener('input', createMask);
      input.addEventListener('focus', createMask);
      input.addEventListener('blur', createMask);
    });
  }

  async postData(url, data) {
    let res = await fetch(url, {
      method: "POST",
      body: data
    });

    return await res.text();
  }
  createMessage(item) {
    this.statusMessage = document.createElement('div');
    this.statusMessage.style.cssText = `
        margin-top: 15px;
        font-size: 18px;
        color: grey;
    `;
    item.parentNode.appendChild(this.statusMessage);

    this.statusMessage.textContent = this.message.loading;
  }

  init() {
    this.checkMailInputs();
    this.initMask();

    this.forms.forEach(item => {
      item.addEventListener('submit', (e) => {
        e.preventDefault();

        this.createMessage(item)

        const formData = new FormData(item);

        try {
          this.postData(this.path, formData)
          console.log(res);
          this.statusMessage.textContent = this.message.success;
        } catch {
          this.statusMessage.textContent = this.message.failure;
        } finally {
          this.clearInputs();
          setTimeout(() => {
            this.statusMessage.remove();
          }, 6000);
        }
      });
    });
  }
}
