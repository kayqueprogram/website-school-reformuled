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
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      <Helmet>
        <title>Blog - E. E. Omar Donato Bassani</title>
        <meta name="description" content="Confira os posts e eventos de nossa escola!"/>.
      </Helmet>
      <Banner
        image='https://cdn.discordapp.com/attachments/1098057370728403115/1108939866957434890/patio.webp'
        title='Confira o nosso blog!'
      />
      <SectionContainer
       title='Não Perca os Eventos da E.E Omar Donato Bassani!'
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
          propsForComponent={{CardComponent:BlogCard, }}
        />
        <Link to="/posts"> Ver todos os posts</Link>
      </SectionContainer>
    </div>
  )
}

export default Index
