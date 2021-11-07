<div align="center">
  <a href="#">
  	<img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy-downsized.gif" alt="Logo project" height="160" />
  </a>
  <br>
  <br>
  <p>
    <b>Leo</b>
  </p>
  <p>
     <i>Create elements when you scroll</i>
  </p>
  <p>

[![Build Status](https://travis-ci.com/luctst/leo.svg?branch=master)](https://travis-ci.com/luctst/leo)
[![NPM version](https://img.shields.io/npm/v/leo?style=flat-square)](https://img.shields.io/npm/v/leo?style=flat-square)
[![Package size](https://img.shields.io/bundlephobia/min/leo)](https://img.shields.io/bundlephobia/min/leo)
[![Dependencies](https://img.shields.io/david/luctst/leo.svg?style=popout-square)](https://david-dm.org/luctst/leo)
[![devDependencies Status](https://david-dm.org/luctst/leo/dev-status.svg?style=flat-square)](https://david-dm.org/luctst/leo?type=dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Twitter](https://img.shields.io/twitter/follow/luctstt.svg?label=Follow&style=social)](https://twitter.com/luctstt)

  </p>
</div>

---

**Content**

* [Features](##features)
* [Install](##install)
* [Exemples](##exemples)
* [Usage](##usage)
* [Exemples](##exemples)
* [Documentation](##documentation)
* [Exemples](##exemples)
* [API](##Api)
* [Contributing](##contributing)
* [Maintainers](##maintainers)

## Features ✨
* Create a lazy element when you scroll.
* Create a beautiful HTML page.

## Install 🐙
Add this script in your HTML to access Leo.
```
<script crossorigin src="https://unpkg.com/leoo@1.0.0/umd/leo.client.min.js"></script>
```

## Exemples 🖍
```js
new Leo("main", [
        {
            htmlContainer: 'section',
            class: ["t"]
        },
        {
            htmlContainer: "section",
            class: ["l"],
            template: `
              <h1>You can use backticks with multiples lines</h1>
              <p>An other html element</p>
            `
        },
        {
            htmlContainer: "div",
            class: ["test", "m"],
            template: `<h1>Test Leo</h1>`
        }
    ]);
```

> Let's try this script it will create three elements in the `<main></main>` HTML element.

## API 👩‍💻
Once you include the script you can access the Leo class.

### Class `new Leo(container, ops, [options])`.
The leo class allow you to create lazy HTML elements.

* `container` [<string>](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) - The container where the elements would be create, can be an HTML tag, class or id.
* `ops` [<array>](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) - An array of objects.
  * `class` [<array>](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) - An array of class to add to your new HTML element.
  * `template` [<string>](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) - The inner html of your html.
  * `htmlContainer` [<string>](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) - The HTML tag of your new element.
* `[options]` - Object option
  * `[options.infinite]` **default -> false** - If true recreate infinitely elements.

## License ⚖️
@MIT

---
<div align="center">
	<b>
		<a href="https://www.npmjs.com/package/get-good-readme">File generated with get-good-readme module</a>
	</b>
</div>
