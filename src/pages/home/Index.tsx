import React from 'react';
import { Link } from 'react-router-dom';
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
import Helmet from 'react-helmet'



const Index = () => {
  return (
    <>
      <Helmet>
        <title>Home - E. E. Omar Donato Bassani</title>
        <meta name="description" content="Escola Estadual, fundada com o auxílio do antigo subprefeito Omar Donato Bassani...."/>
      </Helmet>
      <Banner
         title='Construindo um futuro brilhante através da educação.'
         href='/about'
         btnLabel='Saiba Mais'
         image='https://firebasestorage.googleapis.com/v0/b/images-6adbb.appspot.com/o/bassani%2Fteatro.jpg?alt=media&token=94a9d576-35a9-4e3a-9cc4-b69610979ede'
      />
      <SectionContainer
      >
        <RowToColumn>
          <div>
            <Image src='https://polyuni.com.br/pluginfile.php/173/block_cocoon_about_1/content/shutterstock_366568778.png' maxHeight='70rem'/>
          </div>
          <Column gap='14px'>
              <Title>Você pode mais no Bassani</Title>
              <Paragraph>
             Bem-vindo à Escola Omar Donato Bassani, um lugar onde os alunos prosperam academicamente, pessoalmente e socialmente. Nossa escola se dedica a fornecer um ambiente inclusivo e de apoio que capacita os alunos a perseguir seus projetos e alcançar seus objetivos.
              </Paragraph>
              <StylizedButton><Link to='/about'>Sobre nós</Link></StylizedButton>
              <StylizedButton><Link to='/blog'>Leia Nosso Blog</Link></StylizedButton>
          </Column>
        </RowToColumn>
      </SectionContainer>
      <SectionContainer
        backgroundColor={pageTheme.colors.details.primary.dark}
        color={pageTheme.colors.text.secondary.light}
        title='Leia Nossos Posts'
        subtitle='Preparando os alunos para fazer contribuições significativas para a sociedade, como cidadãos engajados e líderes em um mundo cheio de desafios'
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
              <Title>Extraia o melhor de si</Title>
              <Paragraph>
              Oferecemos um programa acadêmico abrangente e rigoroso que prepara os alunos para o sucesso na faculdade e além. Nosso currículo é projetado para desafiar os alunos, fornecendo-lhes as habilidades e conhecimentos de que precisam para se destacar em um mundo de grandes transformações.
              </Paragraph>
              <StylizedButton><Link to="/about">Sobre Nós</Link></StylizedButton>
              <StylizedButton><Link to='/blog'>Leia Nosso Blog</Link></StylizedButton>
          </Column>
        </RowToColumn>
      </SectionContainer>
    </>
  )
}

export default Index
