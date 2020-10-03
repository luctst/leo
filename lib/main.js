/**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 * Create a new lazy HTMLElement everytime you scroll on the last element.
 * @param {HTMLElement} container - The container where the HTML Element must be create.
 * @param {Array} ops - An array of object this will be the element that Leo will create on scroll.
 */
module.exports = class Leo {
<<<<<<< HEAD
  constructor(container, ops) {
    if (typeof container !== "string") {
      throw new Error("Container must be a string");
    }

    if (!document.querySelector(container)) {
      throw new Error("Container must be an HTML element");
    }

    if (!Array.isArray(ops)) {
      throw new Error("Leo only accept array");
    }

    ops.forEach((element) => {
      if (typeof element !== "object") {
        throw new Error("Options only accepts objects");
      }
    });

    this.data = [...ops];
    this.container = container;
    this.addSection();
  }

  addSection() {
    let i = 0;

    window.addEventListener(
      "scroll",
      function t() {
        if (i > this.data.length) return removeEventListener("scroll", t);

        if (
          window.scrollY >=
          document.querySelector(this.container).lastElementChild.offsetTop
        ) {
          const e = document.createElement(this.data[i].htmlContainer);

          if (this.data[i].class) {
            this.data[i].class.forEach((el) => e.classList.add(el));
          }

          if (this.data[i].template) {
            e.innerHTML = this.data[i].template;
          }

          document.querySelector(this.container).appendChild(e);

          i += 1;
        }

        return true;
      }.bind(this)
    );
  }
};
=======
 * 
=======
 *
>>>>>>> 441a6d9... Fix ci errors
=======
 * Create a new lazy HTMLElement everytime you scroll on the last element.
 * @param {HTMLElement} container - The container where the HTML Element must be create.
 * @param {Array} ops - An array of object this will be the element that Leo will create on scroll.
>>>>>>> 51d8183... ADd container props and documentation
 */
class Leo {
=======
>>>>>>> 1511d91... Fix CI errors
  constructor(container, ops) {
    if (typeof container !== "string") {
      throw new Error("Container must be a string");
    }

    if (!document.querySelector(container)) {
      throw new Error("Container must be an HTML element");
    }

    if (!Array.isArray(ops)) {
      throw new Error("Leo only accept array");
    }

    ops.forEach((element) => {
      if (typeof element !== "object") {
        throw new Error("Options only accepts objects");
      }
    });

    this.data = [...ops];
    this.container = container;
    this.addSection();
  }

  addSection() {
    let i = 0;

    window.addEventListener(
      "scroll",
      function t() {
        if (i > this.data.length) return removeEventListener("scroll", t);

        if (
          window.scrollY >=
          document.querySelector(this.container).lastElementChild.offsetTop
        ) {
          const e = document.createElement(this.data[i].htmlContainer);

          if (this.data[i].class) {
            this.data[i].class.forEach((el) => e.classList.add(el));
          }

          if (this.data[i].template) {
            e.innerHTML = this.data[i].template;
          }

          document.querySelector(this.container).appendChild(e);

<<<<<<< HEAD
                i++;
                return;
            }
        }.bind(this));
    }
}
>>>>>>> 0a32806... Leo class
=======
          i += 1;
        }

        return true;
      }.bind(this)
    );
  }
};
>>>>>>> 441a6d9... Fix ci errors
