import React from 'react';
import BlogCard from 'shared/components/blog_card/BlogCard';
import EventCard from 'shared/components/event_card/EventCard';
import SectionContainer from 'shared/components/Section_Container/SectionContainer';
import Banner from 'shared/components/banner/Banner';
import CardsSlide from 'shared/components/cards_slide/CardsSlide';
import pageTheme from 'shared/styles/pageTheme';
import DataFetcher from 'shared/components/data_fetcher/DataFetcher';
import blogApi from 'services/blog';
import eventsApi from 'services/events';




const Index = () => {
  return (
    <div>
        <Banner
         labelTitle='Invista em educação, invista no seu'
         highlightedWord='Futuro'
         href='/sobre'
         btnLabel='Saiba Mais'
         
        />
        <SectionContainer
          title='Leia Nossos Posts'
        >
          <DataFetcher
           fetchFunc={blogApi.getBlogPosts}
           Component={CardsSlide}
           propsForComponent={{CardComponent:BlogCard}}
          />
       </SectionContainer>
       <SectionContainer
         title='Confira os Últimos Eventos'
         backgroundColor={pageTheme.colors.details.primary.dark}
         color={pageTheme.colors.text.secondary.light}
        >
          <DataFetcher
           fetchFunc={eventsApi.getEventsPosts}
           Component={CardsSlide}
           propsForComponent={{CardComponent:EventCard}}
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
