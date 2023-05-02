import React from "react";
import MainBar from "./components/main_bar/MainBar";
import TopBar from "./components/top_bar/TopBar";
import styled from "styled-components";
import RemoveComponentSmallerScreen from "shared/components/remove_component_smaller_screen/RemoveComponentSmallerScreen";

const Header = () => {
  return (
    <Container>
      <RemoveComponentSmallerScreen>
        <TopBar/>
      </RemoveComponentSmallerScreen>
      <MainBar />
    </Container>
  );
};

const Container = styled.div``;

export default Header;
