/**
 * Create a new lazy HTMLElement everytime you scroll on the last element.
 * @param {HTMLElement} container - The container where the HTML Element must be create.
 * @param {Array} ops - An array of object this will be the element that Leo will create on scroll.
 * @param {Object} [options] - Object of options
 * @param {Boolean} [options.infinite=false] - If true Leo will infinite and append all elements in ops when last child in container is scroll, default false
 * @param {String} [options.scroll=horizontal] - Define the position to scroll by default it is horizontal can be vertical or horizontal.
 */
module.exports = class Leo {
  constructor(container, ops, options) {
    if (typeof container !== "string") {
      throw new Error("Container must be a string");
    }

    if (!document.querySelector(container)) {
      throw new Error("Container must be an HTML element");
    }

    if (!Array.isArray(ops)) {
      throw new Error("Leo only accept array");
    }

    if (options) {
      if (typeof options !== "object") throw new Error("options params must be object");
      if (options.infinite) {
        if (typeof options.infinite !== "boolean")
          throw new Error("infinite params must be Boolean");
      }
    }

    ops.forEach((element) => {
      if (typeof element !== "object") {
        throw new Error("Options only accepts objects");
      }
    });

    const opss = {
      scroll: "horizontal",
      infinite: false,
    };

    this.data = [...ops];
    this.container = container;
    this.options = options ? { ...opss, ...options } : { ...opss };

    if (this.options.scroll === "horizontal") {
      document.querySelector(this.container).style = "overflow-x:scroll;";
    }

    this.addSection();
  }

  addSection() {
    let i = 0;

    window.addEventListener(
      "scroll",
      function t() {
        if (i > this.data.length - 1) {
          if (this.options.infinite) {
            i = 0;
            return true;
          }

          return removeEventListener("scroll", t);
        }

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
