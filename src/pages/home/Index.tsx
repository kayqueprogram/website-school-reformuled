import React from 'react';
import BlogCard from 'shared/components/blog_card/BlogCard';
import SectionContainer from 'shared/components/Section_Container/SectionContainer';
import Banner from 'shared/components/banner/Banner';
import CardsSlide from 'shared/components/cards_slide/CardsSlide';
import pageTheme from 'shared/styles/pageTheme';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div>
        <Banner/>
        <SectionContainer
          title='Confira os Últimos Eventos'
        >
        <CardsSlide
         CardComponent={BlogCard}
        />
       </SectionContainer>
       <SectionContainer
         title='Leia Nossos Posts'
         backgroundColor={pageTheme.colors.details.primary.dark}
         color={pageTheme.colors.text.secondary.light}
        >
          <CardsSlide
           CardComponent={BlogCard}
          />
        </SectionContainer>
        <SectionContainer
         title='O que as Pessoas Têm a Dizer'
        >
        </SectionContainer>
    </div>
  )
}

export default Index
