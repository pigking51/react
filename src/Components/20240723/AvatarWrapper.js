import styled from "styled-components";
import { Avatar } from "./Avatar";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
const persons = [
  { name: "Steve", job: "Programmer", country: "대한민국" },
  { name: "Tom", job: "Student", country: "USA" },
  { name: "Adrian", job: "Engineer", country: "France" },
  { name: "Max", job: "Painter", country: "Germany" },
];

//const {name, job, country} = 객체를 리턴하는 함수();
//const [x0, x1, x2] = 배열을 리턴하는 함수()

const colors = ["lightgreen", "teal", "lightgray", "khaki"];

export function AvatarWrapper() {
  return (
    <>
      <Container>
        {persons.map((p, i) => (
          <Avatar person={p} bgcolor={colors[i]} />
        ))}
      </Container>
    </>
  );
}
