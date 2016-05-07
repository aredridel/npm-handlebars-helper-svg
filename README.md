handlebars-helper-svg
======================

A helper to inline svg efficiently

Use
----

Register this module as a handlebars helper, and then you can load SVG files
from packages.

In your template:

```
<div class='thing'>
    {{svg "somepackage/test.svg" width="109"}}
</div>
<div class='someotherplace'>
    {{svg "somepackage/test.svg" width="22"}}
</div>
```

The SVG will be inlined, and attributes will be added to the root element.

This module only works for server-side rendering, though contributions to add
browser support are welcome.
