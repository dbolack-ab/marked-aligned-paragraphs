# marked-justified-paragraphs

Add paragraph alignment attributes to paragraphs using HTML base left, right, and center.

## Left

Left-alignment is set by preceeding the paragraph with  `:- `

```
:- This is my parapgraph.
```

## Right

Right-alignment is set by preceeding the paragraph with  `-: `

```
-: This is my parapgraph.
```

## Center

Center-alignment is set by preceeding the paragraph with  `:-: `

```
:-: This is my parapgraph.
```

# Usage
<!-- Show most examples of how to use this extension -->

```js
const marked = require("marked");
const markedJustifiedParagraphs = require("marked-justified-paragraphs");

marked.use({ extensions: [markedJustifiedParagraphs] });

const html = marked.parse(":-: This is a center justified paragraph.");
console.log(html);
// <p>This is <sub>sub</sub> and this is <sup>super</sup>.</p>
```
