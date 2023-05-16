import React, { useState } from "react";
import styled from "styled-components";
import IconBtn from "shared/components/icon_btn/IconBtn";
import pageIcons from "shared/utils/pageIcons";
import Column from "shared/components/column/Column";
import Nav from "./Nav";

const MobileMenu = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <>
      <IconBtn onClick={() => setNavIsOpen(true)}>
        <pageIcons.Menu />
      </IconBtn>
      {navIsOpen && (
        <NavField>
          <Column gap="16px" alignItems="flex-end" width='100%'>
            <IconBtn onClick={() => setNavIsOpen(false)}>
              <pageIcons.Close />
            </IconBtn>
            <Nav isRow={false} />
          </Column>
        </NavField>
      )}
    </>
  );
};

const NavField = styled.div`
  position: fixed;
  width: 100%;
  
  left: 0;
  top: 0;
  height: 100vh;
  padding: 78px 30px 0px 30px;
  text-align: right;
  background-color: ${({ theme }) => theme.colors.details.primary.dark};
  color: ${({ theme }) => theme.colors.text.secondary.light};
  font-size: 1rem;
`;

export default MobileMenu;
