import styled from "styled-components";

const w = 300;
const h = 200;

const Box = styled.div`
  width: ${w}px;
  height: ${h}px;
  background-color: dodgerblue;
  margin: auto;
`;

export function Test1() {
  return (
    <>
      <Box>Test1</Box>
    </>
  );
}

// export default Test1;
// 아래쪽에 선언한 export는 default export라고 해서 폴더에 단 한개만 있어야함
// default 단점
// 맨 아래에 써야되는 것을 잊어버릴수가 있음
// 여러 개의 export를 사용해야할때 한개의 default를 선언해줘야하기때문에 귀찮음

// styled CSS 넣을때 함수 위에 적어도 되고 함수 안쪽에 넣어도 상관없으나
// 일반적으로 함수 위에 적는다고 함
// const 스타일링태그이름 = styled.원래태그이름``
// 예) const Container = styled.div`
// width: 100px;
// height: 100px;
// `
