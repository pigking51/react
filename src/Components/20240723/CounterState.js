import styled from "styled-components";
import { useState, useEffect } from "react";
// → useEffect는 보통 return 바로 위에 붙임
const Container = styled.div`
  width: 500px;
  text-align: center;
  margin: 0 auto;
  h1 {
    font-size: 4rem;
  }
  button {
    width: 100px;
    font-size: 2rem;
    margin: 10px;
  }
`;

export function CounterState() {
  console.log("CounterStart.");
  //let count = 0;
  const [count, setCount] = useState(0);

  // 특정 이벤트를 등록하는 코드가 여기 있다면
  //   useEffect(() => {
  //     console.log("useEffect", count);
  //   }, [count]); // 매개변수1은 콜백함수, 매개변수2는 상태 의존성 배열(내가 원하는 녀석)
  //   //
  function minus() {
    // count = count - 1;
    setCount(count - 1);
    console.log("minus", count);
  }
  function plus() {
    //count = count + 1;

    setCount(count + 1);
    console.log("plus", count);
  }
  console.log("CounterEnd.", count);

  useEffect(() => {
    console.log("useEffect", count);
  }, [count]); // 매개변수1은 콜백함수, 매개변수2는 상태 의존성 배열(내가 원하는 녀석)
  useEffect(() => {
    // 빈 의존성배열의 의미는 컴포넌트가 처음 로드될때 딱 한번만 호출된다는 의미!
    // 각종 이벤트 콜백함수를 등록하는데 사용됨(간단한것만)
  }, []);
  return (
    <>
      <Container>
        <h1>{count}</h1>
        <button onClick={minus}>-</button>
        <button onClick={plus}>+</button>
      </Container>
    </>
  );
}

// 리액트는 state를 관리하는 것
// → 위의 경우에는 <h1>{count}</h1>가 상태임???
// 쓸데없는 데이터 다운로드를 막음(가상 돔이 돌아가는 방식이 컴포넌트와 관련되있음)
// 페이지를 조각조각내서 필요한 부분을 화면갱신하는 방식
// 완전히 독립적인 컴포넌트인 경우에만(부모자식인경우 다시불림)

// function func1(value) {
//   let number = value;
//   function setNumber(newValue) {}
// }
