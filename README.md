# marked-aligned-paragraphs

Add paragraph alignment attributes to paragraphs using HTML base left, right, and center.

## Left Alignment / Ragged Right

Left-alignment is set by preceeding the paragraph with  `:- `

```
:- This is my parapgraph.
```

## Right Alignment / Ragged Left

Right-alignment is set by preceeding the paragraph with  `-: `

```
-: This is my parapgraph.
```

## Center Alignment

Center-alignment is set by preceeding the paragraph with  `:-: `

```
:-: This is my parapgraph.
```

# Usage
<!-- Show most examples of how to use this extension -->

```js
const marked = require("marked");
const markedAlignedParagraphs = require("marked-justified-paragraphs");

marked.use({ extensions: [markedAlignedParagraphs] });

const html = marked.parse(":-: This is a center justified paragraph.");
console.log(html);
// <p align="center">This is a center justified paragraph.</p>
```
