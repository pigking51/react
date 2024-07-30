import { useState } from "react";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import styled from "styled-components";

const Container = styled.div``;
const Menu = styled.div`
  display: flex;
`;
const Body = styled.div``;

export function BasicRouter() {
  const [view, setView] = useState("home");
  console.log("Home, About, Contact");
  function renderView() {
    switch (view) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  }
  return (
    <>
      <Container>
        <Menu>
          <button onClick={() => setView("home")}>HOME</button>
          <button onClick={() => setView("about")}>ABOUT</button>
          <button onClick={() => setView("contact")}>CONTACT</button>
        </Menu>
        <Body>{renderView()}</Body>
      </Container>
    </>
  );
}
