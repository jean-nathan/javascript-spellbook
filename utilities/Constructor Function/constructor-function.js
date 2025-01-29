function ApplyClass(selector) {
  this.elements = document.querySelectorAll(selector);

  this.addClass = function () {
    this.elements.forEach((element) => {
        element.classList.add('active');
    });
    return this;
  };

  this.removeClass = function () {
    this.elements.forEach((element) => {
        element.classList.remove('active');
    });
    return this;
  };
}

const ElementLi = new ApplyClass("ul");

ElementLi.addClass().removeClass();
