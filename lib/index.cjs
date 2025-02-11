'use strict';

function index() {
  return {
    extensions: [
      {
        name  : 'justifiedParagraphs',
        level : 'block',
        start(src) {
          return src.match(/(?:-:|:-|-:) {1}/m)?.index;
        }, // Hint to Marked.js to stop and check for a match
        tokenizer(src, tokens) {
          const justifiedParagraphClasses = [];
          justifiedParagraphClasses[2] = 'Left';
          justifiedParagraphClasses[4] = 'Right';
          justifiedParagraphClasses[6] = 'Center';
          const regex = /^(((:-))|((-:))|((:-:))) .+(\n(([^\n].*\n)*(\n|$))|$)/ygm;
          const match = regex.exec(src);
          if (match?.length) {
            let whichJustify;
            if (match[2]?.length) whichJustify = 2;
            if (match[4]?.length) whichJustify = 4;
            if (match[6]?.length) whichJustify = 6;
            return {
              type    : 'justifiedParagraphs', // Should match "name" above
              raw     : match[0], // Text to consume from the source
              length  : match[whichJustify].length,
              text    : match[0].slice(match[whichJustify].length),
              justify : justifiedParagraphClasses[whichJustify],
              tokens  : this.lexer.inlineTokens(match[0].slice(match[whichJustify].length + 1))
            };
          }
        },
        renderer(token) {
          return `<p align="${token.justify}">${this.parser.parseInline(token.tokens)}</p>`;
        }
      }
    ]
  };
}

module.exports = index;
