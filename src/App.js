//import { Avatar } from "./Components/20240723/Avatar";
// import { AvatarWrapper } from "./Components/20240723/AvatarWrapper";
// import { Test1 } from "./Components/20240722/Test1";
// import { Test2 } from "./Components/20240722/Test2";

import { createGlobalStyle } from "styled-components";
import { OpenWeather } from "./Components/20240724/OpenWeather";

// import { Gallery } from "./Components/20240723/Gallery";
// import { Home } from "./Components/20240724/Home";

//import { CounterState } from "./Components/20240723/CounterState";
//import { ScoreWrapper } from "./Components/20240723/ScoreWrapper";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: GmarketSansMedium;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <OpenWeather />
      {/* <Home /> */}
    </>
  );
}

export default App;
