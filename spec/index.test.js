import { marked } from 'marked';
import alignedParagraphs from '../src/index.js';

function trimLines(s) {
  return s.split('\n').map(l => l.trim()).join('\n');
}

describe('Aligned Text', () => {
  beforeEach(() => {
    marked.setOptions(marked.getDefaults());
  });

  test('Left Aligned', () => {
    marked.use(alignedParagraphs());
    expect(marked(trimLines(`:- Hello`))).toMatchSnapshot();
  });

  test('Right Aligned', () => {
    marked.use(alignedParagraphs());
    expect(marked(trimLines(`-: Hello`))).toMatchSnapshot();
  });

  test('Center Aligned', () => {
    marked.use(alignedParagraphs());
    expect(marked(trimLines(`:-: Hello`))).toMatchSnapshot();
  });

  test('Ignored inside a code block', () => {
    marked.use(alignedParagraphs());
    expect(marked(trimLines('```\n\n:- Hello\n\n```\n'))).toMatchSnapshot();
  });
});
