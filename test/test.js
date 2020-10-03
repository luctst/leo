<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5e076af... Start writing tests
const test = require("ava");
const browserEnv = require("browser-env");
let Leo;

browserEnv(['window', 'document']);

test.before(function () {
    Leo = require("../lib/main");
<<<<<<< HEAD
<<<<<<< HEAD

    document.querySelector("body").appendChild(document.createElement("main"));
})

test('Options should be an array', function (t) {
    const error = t.throws(() => new Leo("main", {}), {
=======
})

test('Options should be an array', function (t) {
    const error = t.throws(() => new Leo({}), {
>>>>>>> 5e076af... Start writing tests
=======

    document.querySelector("body").appendChild(document.createElement("main"));
})

test('Options should be an array', function (t) {
    const error = t.throws(() => new Leo("main", {}), {
>>>>>>> 1511d91... Fix CI errors
        instanceOf: Error,
    });

    t.is(error.message, 'Leo only accept array');
});

test('Options data should be objects', function (t) {
<<<<<<< HEAD
<<<<<<< HEAD
    const e = t.throws(() => new Leo("main", [""]), {
=======
    const e = t.throws(() => new Leo([""]), {
>>>>>>> 5e076af... Start writing tests
=======
    const e = t.throws(() => new Leo("main", [""]), {
>>>>>>> 1511d91... Fix CI errors
        instanceOf: Error
    });

    t.is(e.message, 'Options only accepts objects');
<<<<<<< HEAD
});
=======
const ava = require("ava");
ava.todo("Implement test");
>>>>>>> 448f9eb... Make test script passed
=======
});
>>>>>>> 5e076af... Start writing tests
