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
import StylizedLink from 'shared/components/stylized_link/StylizedLink';
import Span from 'shared/components/span/Span';
import Row from 'shared/components/row/Row';
import pageIcons from "shared/utils/pageIcons";
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      <Helmet>
        <title>Blog - E. E. Omar Donato Bassani</title>
        <meta name="description" content="Confira os posts e eventos de nossa escola!"/>.
      </Helmet>
      <Banner
        image='https://firebasestorage.googleapis.com/v0/b/images-6adbb.appspot.com/o/bassani%2Fpatio.webp?alt=media&token=9c124e5d-6f49-42da-9008-09a00fa7a0ec'
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
        <StylizedLink to={`${'/posts'}`}>
            <Span fontSize="2rem" fontWeight='bold' color={pageTheme.colors.details.secondary.dark}>
              <Row alignItems="center">
                 <span>Todos os posts</span>
                 <pageIcons.ArrowRight/>
              </Row>
            </Span>
          </StylizedLink>
      </SectionContainer>
    </div>
  )
}

export default Index
