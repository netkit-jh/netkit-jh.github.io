import ReactHtmlParser from 'react-html-parser';

const raw = `
.so man5/lab.conf.5
`

const html = ReactHtmlParser(raw);
export default html;
