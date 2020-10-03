const test = require("ava");
const browserEnv = require("browser-env");
let Leo;

browserEnv(['window', 'document']);

test.before(function () {
    Leo = require("../lib/main");

    document.querySelector("body").appendChild(document.createElement("main"));
})

test('Options should be an array', function (t) {
    const error = t.throws(() => new Leo("main", {}), {
        instanceOf: Error,
    });

    t.is(error.message, 'Leo only accept array');
});

test('Options data should be objects', function (t) {
    const e = t.throws(() => new Leo("main", [""]), {
        instanceOf: Error
    });

    t.is(e.message, 'Options only accepts objects');
});