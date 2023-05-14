import React from "react";
import cutString from "shared/utils/cutString";
import Span from "../span/Span";
import StylizedButton from "../stylized_button/StylizedButton";
import Column from "../column/Column";
import Image from "../image/Image";
import StylizedLink from "../stylized_link/StylizedLink";
import Row from "../row/Row";
import pageIcons from "shared/utils/pageIcons";
import pageTheme from "shared/styles/pageTheme";

type TCardProps = {
  id:string;
  title: string;
  image: string;
  content: string;
};

const BlogCard = ({id,title, image, content }: TCardProps) => {
  return (
    <>
     <Column>
       <Image src={image} height="36rem"/>
       <Column gap="1.8rem">
         <Span fontSize="2.3rem" fontWeight='700'>
         {cutString(title, 50)}...
         </Span>
         <Span fontSize="1.8rem">
          {cutString(content, 92)}...
         </Span>
         <StylizedLink to={`blog/${id}`}>
            <Span fontSize="2rem" fontWeight='bold' color={pageTheme.colors.details.secondary.dark}>
              <Row alignItems="center">
                 <span>Continue Lendo o Post</span>
                 <pageIcons.ArrowRight/>
              </Row>
            </Span>
          </StylizedLink>
       </Column>
     </Column>
    </>
  );
};

;

export default BlogCard;