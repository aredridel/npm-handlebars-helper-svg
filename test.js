const handlebars = require('handlebars');
const tap = require('tap');
const svg = require('./');
const ltx = require('ltx');
const resolve = require('resolve');

tap.test('register helper', function (t) {
	handlebars.registerHelper('svg', svg);
	t.ok(handlebars.helpers.svg, "helper registered");
	t.end();
});

tap.test('with attribute', function (t) {
	const template = handlebars.compile(`{{svg "./test.svg" width="55"}}`);
	t.equal(template(), `<svg viewBox="0 0 2 2" width="55"><circle r="1" x="1" y="1"/></svg>`);
	t.end();
});

tap.test('without attribute', function (t) {
	const template = handlebars.compile(`{{svg "./test.svg" }}`);
	t.equal(template(), `<svg viewBox="0 0 2 2"><circle r="1" x="1" y="1"/></svg>`);
	t.end();
});
