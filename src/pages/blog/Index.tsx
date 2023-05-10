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
        image='https://s2.research.com/wp-content/uploads/2021/07/24113540/im_5_pes-1-1200x600.jpg'
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
      title='Fique Ligado a todos nossos posts'
      >
        <DataFetcher
          fetchFunc={blogApi.getBlogPosts}
          Component={CardsGrid}
          propsForComponent={{CardComponent:BlogCard}}
        />

      </SectionContainer>
    </div>
  )
}

export default Index
