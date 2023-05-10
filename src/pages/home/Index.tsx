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
import Grid from 'shared/components/grid/Grid';
import InfoCard from 'shared/components/info_card/InfoCard';
import pageIcons from 'shared/utils/pageIcons';
import RemoveComponentSmallerScreen from 'shared/components/remove_component_smaller_screen/RemoveComponentSmallerScreen';
import Absolute from 'shared/components/absolute/Absolute';
import WideWrapping from 'shared/components/wide_wrapping/WideWrapping';



const Index = () => {
  return (
    <div>
        <Banner
         labelTitle='Invista em educação, invista no seu'
         highlightedWord='Futuro'
         href='/sobre'
         btnLabel='Saiba Mais'
         image='https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
         >
           <RemoveComponentSmallerScreen>
             <Absolute bottom={40}>
              <WideWrapping>
               <Grid>
                <InfoCard
                title='Educação de qualidade para todos'
                src='/about'
                Icon={pageIcons.Star}
               />
               <InfoCard
                 title='Empoderando Mentes, Criando Futuros'
                 src='/about'
                 Icon={pageIcons.Idea}
               />
               <InfoCard
                 title='Explore, aprenda, descubra: visite nossa biblioteca'
                 src='/about'
                 Icon={pageIcons.Book}
                />
              </Grid>
              </WideWrapping>
             </Absolute>
           </RemoveComponentSmallerScreen>
          </Banner>
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
