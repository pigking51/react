import styled from "styled-components";

const Li = styled.li`
  color: lightcoral;
  list-style: none;
`;
const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 2rem;
`;
const Photo = styled.img`
  border-radius: 50%;
`;

export function List({ products, user }) {
  // Javascript 코딩 영역

  return (
    <>
      <h1>List Component</h1>
      <p>리액트 연습 코드</p>
      <ul>
        {products.map((p) => (
          <Li>{p.title}</Li>
        ))}
      </ul>
      <Container>
        <Title>{user.name}</Title>
        <Photo src={user.imageUrl}></Photo>
      </Container>
    </>
  );
}

// 컴포넌트가 매개변수를 받을 때 구조분해할당을 이용함!!
// const options = { title: "Menu", width: 100, height: 200 };
// const { title, width, height } = options;
// console.log(title); // Menu;
