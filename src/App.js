// // 라우터 import
// import { BasicRouter } from "./Components/BasicRouter/BasicRouter";
// // import { ReactRouter } from "./Components/BasicRouter/ReactRouter";
// // 리액트 처음 연습했던 import
// //import { Avatar } from "./Components/20240723/Avatar";
// // import { AvatarWrapper } from "./Components/20240723/AvatarWrapper";
// // import { Test1 } from "./Components/20240722/Test1";
// // import { Test2 } from "./Components/20240722/Test2";

// // 기본스타일 적용 import
// import { createGlobalStyle } from "styled-components";

// // 날씨정보 import
// // import { OpenWeather } from "./Components/20240724/OpenWeather";

// // MovieShop import
// // import { MovieShop } from "./Components/MovieShop/MovieShop";

// // 과제 import
// // import { Gallery } from "./Components/20240723/Gallery";
// // import { Home } from "./Components/20240724/Home";

// //import { CounterState } from "./Components/20240723/CounterState";
// //import { ScoreWrapper } from "./Components/20240723/ScoreWrapper";

// // import { ResponsivePage } from "./Components/Utils/ResponsivePage";
// // import { ReactRef } from "./Components/Utils/ReactRef";

// // 리액트로 유니티 연동
// // import { TopDownAction } from "./Components/Unity/TopDownAction";

// const GlobalStyle = createGlobalStyle`
// @font-face {
//     font-family: 'GmarketSansMedium';
//     src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
//     font-weight: normal;
//     font-style: normal;
// }
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: GmarketSansMedium;
//   }
// `;

// function App() {
//   return (
//     <>
//       <GlobalStyle />
//       {/* <OpenWeather /> */}
//       {/* <MovieShop /> */}
//       {/* <ResponsivePage /> */}
//       {/* <ReactRef /> */}
//       {/* <TopDownAction /> */}
//       <BasicRouter />
//       {/* <ReactRouter /> */}
//     </>
//   );
// }

// export default App;

import { createGlobalStyle } from "styled-components";
import { BasicRouter } from "./Components/BasicRouter/BasicRouter";
// import { ReactRouter } from "./Components/BasicRouter/ReactRouter";

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
      <BasicRouter />
      {/* <ReactRouter /> */}
    </>
  );
}

export default App;
