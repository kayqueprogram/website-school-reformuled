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
import RowToColumn from 'shared/components/row_to_column/RowToColumn';
import Column from 'shared/components/column/Column';
import Title from 'shared/components/title/Title';
import Paragraph from 'shared/components/paragraph/Paragraph';
import StylizedButton from 'shared/components/stylized_button/StylizedButton';
import Image from 'shared/components/image/Image';

const Index = () => {
  return (
    <>
      <Banner
         title='Construindo um futuro brilhante através da educação.'
         href='/'
         btnLabel='Saiba Mais'
         image='https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      />
      <SectionContainer
      >
        <RowToColumn>
          <div>
            <Image src='https://polyuni.com.br/pluginfile.php/173/block_cocoon_about_1/content/shutterstock_366568778.png' maxHeight='70rem'/>
          </div>
          <Column gap='14px'>
              <Title>You Can Do More at Nebraska</Title>
              <Paragraph>
              You have the power to shape your future and impact the world. At Nebraska, the people behind our Big Ten academic programs are with you every step of the way. Let’s build on your strengths toward a career, connect you with a community of Huskers and do big things.
              </Paragraph>
              <StylizedButton>Sobre Nós</StylizedButton>
              <StylizedButton>Leia Nosso Blog</StylizedButton>
          </Column>
        </RowToColumn>
      </SectionContainer>
      <SectionContainer
        backgroundColor={pageTheme.colors.details.primary.dark}
        color={pageTheme.colors.text.secondary.light}
        title='Leia Nossos Posts'
        subtitle='Preparing students to make meaningful contributions to society as engaged citizens and leaders in a complex world'
      >
          <DataFetcher
           fetchFunc={blogApi.getBlogPosts}
           Component={CardsSlide}
           propsForComponent={{CardComponent:BlogCard}}
          />
       </SectionContainer>
       <SectionContainer
         title='Confira os Últimos Eventos'
        >
          <DataFetcher
           fetchFunc={eventsApi.getEventsPosts}
           Component={CardsSlide}
           propsForComponent={{CardComponent:EventCard}}
          />
        </SectionContainer>
        <SectionContainer
                backgroundColor={pageTheme.colors.details.primary.dark}
                color={pageTheme.colors.text.secondary.light}
      >
        <RowToColumn>
          <div>
            <Image src='https://polyuni.com.br/pluginfile.php/171/block_cocoon_about_1/content/shutterstock_1145576060.png'/>
          </div>
          <Column gap='14px'>
              <Title>You Can Do More at Nebraska</Title>
              <Paragraph>
              You have the power to shape your future and impact the world. At Nebraska, the people behind our Big Ten academic programs are with you every step of the way. Let’s build on your strengths toward a career, connect you with a community of Huskers and do big things.
              </Paragraph>
              <StylizedButton>Sobre Nós</StylizedButton>
              <StylizedButton>Leia Nosso Blog</StylizedButton>
          </Column>
        </RowToColumn>
      </SectionContainer>
    </>
  )
}

export default Index
