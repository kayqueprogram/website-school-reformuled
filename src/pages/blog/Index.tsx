import React from 'react';
import blogApi from 'services/blog';
import SectionContainer from 'shared/components/Section_Container/SectionContainer';
import Banner from 'shared/components/banner/Banner';
import CardsGrid from 'shared/components/cards_grid/CardsGrid';
import DataFetcher from 'shared/components/data_fetcher/DataFetcher';
import BlogCard from 'shared/components/blog_card/BlogCard';
import EventCard from 'shared/components/event_card/EventCard';
import CardsSlide from 'shared/components/cards_slide/CardsSlide';
import eventsApi from 'services/events';
import pageTheme from 'shared/styles/pageTheme';

const Index = () => {
  return (
    <div>
      <Banner
        image='https://cdn.discordapp.com/attachments/1098057370728403115/1108939866957434890/patio.webp'
      />
      <SectionContainer
       title='Não Perca Nossos Eventos'
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
      title='Fique Ligado a todos os nossos posts'
      >
        <DataFetcher
          fetchFunc={blogApi.getBlogPosts}
          Component={CardsGrid}
          propsForComponent={{CardComponent:BlogCard, cardPath:'/'}}
        />

      </SectionContainer>
    </div>
  )
}

export default Index
