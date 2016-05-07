const fs = require('fs');
const handlebars = require('handlebars');
const ltx = require('ltx');
const resolve = require('resolve');

const nameToModule = {};

module.exports = function(name, opts) {

  const mod = nameToModule[name] || (nameToModule[name] = resolve.sync(name, {
    extensions: ['.svg']
  }));

  const content = require.cache[mod] || (require.cache[mod] = fs.readFileSync(mod, 'utf-8'));

  const svg = parse(content);

  Object.assign(svg.attrs, opts.hash);

  return new handlebars.SafeString(svg.root().toString());
}

function parse(xml, mod) {
  const svg = ltx.parse(xml);
  if (svg.name != 'svg') {
    throw new TypeError("Input must be an SVG");
  }

  delete svg.attrs.xmlns;
  delete svg.attrs['xmlns:xlink'];

  return svg;
}
