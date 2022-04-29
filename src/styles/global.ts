import { createGlobalStyle } from "styled-components";
import "react-circular-progressbar/dist/styles.css";
export default createGlobalStyle`

*  {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {
  background:#ffffff;  
}

body, input, textarea, select, button {
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  transition: all 200ms;
}

button {
  cursor:pointer ;
}

button:hover {
  filter: opacity(80%);
}

h1, h2, h3, h4, h5, h6, strong, b {
  display: inline-block;
  font-weight: 600;
}

ul {  
  list-style: none;
}

button {
  cursor: pointer;
  display: flex;
}

a {
  color: inherit;
  text-decoration: none;
  transition: all 200ms;
}

.container {
  margin: 0 auto;
  width: 100%;  
  position: relative;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.align-start {
  align-items: flex-start;
}
.align-stretch {
  align-items: stretch;
  overflow: hidden;
}
.col {
  flex:1;
}

.flex0 {
  flex: 0;
}

`;