import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { device } from "shared/styles/breakPoints";
import extractNumberFromString from "shared/utils/extractNumbersFromString";
import MenuMobile from "./MobileMenu";

const Field = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      const number = extractNumberFromString(device.md);
      if (number) {
        window.innerWidth < number ? setIsMobile(true) : setIsMobile(false);
      }
    };

    handleResize()
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile && <MenuMobile />}
      {!isMobile && <Nav isRow={true} />}
    </>
  );
};

export default Field;
