import { css, Global } from '@emotion/react';

const reset = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }
  :root {
    overflow-wrap: break-word;
    word-break: break-word;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  button {
    background: none;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  ol,
  ul,
  li {
    list-style: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const GlobalStyle = () => {
  return <Global styles={reset} />;
};

export default GlobalStyle;
