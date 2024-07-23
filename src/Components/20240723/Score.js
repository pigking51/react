import styled from "styled-components";

export function Score({ firstName, score, children }) {
  const Title = styled.h1`
    text-align: center;
  `;
  const Container = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
  const Table = styled.table`
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
  `;

  const { math, english, history } = score;
  return (
    <>
      <Container>
        <Title>{firstName}</Title>
        <Table>
          <h3>Math</h3>
          <p>{math}</p>
          <h3>English</h3>
          <p>{english}</p>
          <h3>History</h3>
          <p>{history}</p>
        </Table>
        {children}
      </Container>
    </>
  );
}
