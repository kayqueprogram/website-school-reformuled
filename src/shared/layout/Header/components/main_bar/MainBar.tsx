import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WideWrapping from "shared/components/wide_wrapping/WideWrapping";
import Row from "shared/components/row/Row";
import Logo from "shared/components/logo/Logo";
import Nav from "./components/Field";

const MainBar = () => {
  const [isMainBarFixed, setIsMainBarFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const shouldMainBarBeFixed = window.scrollY > 20;
      setIsMainBarFixed(shouldMainBarBeFixed);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <Container isFixed={isMainBarFixed}>
      <WideWrapping>
        <Row justifyContent="space-between">
          <Logo />
          <Row gap="2rem" alignItems="center">
            <Nav />
          </Row>
        </Row>
      </WideWrapping>
    </Container>
  );
};

const Container = styled.div<{ isFixed: boolean }>`
  position: fixed;
  width: 100%;
  z-index: 1000;
  padding: 3.4rem 0rem;
  top: ${({ isFixed }) => (isFixed ? 0 : "auto")};
  color: ${({ theme }) => theme.colors.text.secondary.light};
  background-color:${({ theme,isFixed }) =>isFixed?theme.colors.details.primary.dark:'transparent'};
`;

export default MainBar;
