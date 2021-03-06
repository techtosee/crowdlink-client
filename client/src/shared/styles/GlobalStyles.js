import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  font-family: 'Open Sans', sans-serif;
}

body {
  background-color: #23153c;
}

p {
  margin: 0;
  padding: 0;
}
h1 {
  margin: 0;
  padding: 0;
}

button {
  padding: 0;
}


`;

export default GlobalStyles;
