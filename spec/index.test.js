import { marked } from 'marked';
import justifiedParagraphs from '../src/index.js';

function trimLines(s) {
  return s.split('\n').map(l => l.trim()).join('\n');
}

describe('Justified Text', () => {
  beforeEach(() => {
    marked.setOptions(marked.getDefaults());
  });

  test('Left Justify', () => {
    marked.use(justifiedParagraphs());
    expect(marked(trimLines(`:- Hello`))).toMatchSnapshot();
  });

  test('Right Justify', () => {
    marked.use(justifiedParagraphs());
    expect(marked(trimLines(`-: Hello`))).toMatchSnapshot();
  });

  test('Center Justify', () => {
    marked.use(justifiedParagraphs());
    expect(marked(trimLines(`:-: Hello`))).toMatchSnapshot();
  });

  test('Ignored inside a code block', () => {
    marked.use(justifiedParagraphs());
    expect(marked(trimLines('```\n\n:- Hello\n\n```\n'))).toMatchSnapshot();
  });
});
