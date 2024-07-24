import styled from "styled-components";
import { Button } from "./Button";
import { Menu } from "./Menu";
import { ItemList } from "./ItemList";

const Container = styled.div`
  display: flex;
`;
const SideMenu = styled.div`
  width: 200px;
  height: 100vh;
`;
const Content = styled.div`
  padding-left: 50px;
`;

export function Home() {
  return (
    <>
      <Container>
        <SideMenu>
          <Menu />
        </SideMenu>
        <Content>
          <Button
            bgcolor="dodgerblue"
            title="버튼1"
            func={() => console.log("버튼1이 클릭됨")}
          />
          <Button
            bgcolor="lightgreen"
            title="버튼2"
            func={() => console.log("버튼2가 클릭됨")}
          />
          <Button
            bgcolor="dodgerblue"
            title="버튼3"
            func={() => console.log("버튼3이 클릭됨")}
          />
          <Button />
          <br />
          <br />
          <ItemList />
        </Content>
      </Container>
    </>
  );
}
