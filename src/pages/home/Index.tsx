import React from 'react';
import BlogCard from 'shared/components/blog_card/BlogCard';
import SectionContainer from 'shared/components/Section_Container/SectionContainer';
import Banner from 'shared/components/banner/Banner';
import CardsSlide from 'shared/components/cards_slide/CardsSlide';
import pageTheme from 'shared/styles/pageTheme';
import DataFetcher from 'shared/components/data_fetcher/DataFetcher';
import getBlogPosts from 'services/blog/getBlogPosts';


const Index = () => {
  return (
    <div>
        <Banner/>
        <SectionContainer
          title='Confira os Últimos Eventos'
        >
 
       </SectionContainer>
       <SectionContainer
         title='Leia Nossos Posts'
         backgroundColor={pageTheme.colors.details.primary.dark}
         color={pageTheme.colors.text.secondary.light}
        >
          <DataFetcher
           fetchFunc={getBlogPosts}
           Component={CardsSlide}
           propsForComponent={{CardComponent:BlogCard}}
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
