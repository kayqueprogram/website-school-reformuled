import React from 'react';
import blogApi from 'services/blog';
import SectionContainer from 'shared/components/Section_Container/SectionContainer';
import Banner from 'shared/components/banner/Banner';
import Helmet from 'react-helmet'
import FullWidthCardsGrid from 'shared/components/full_width_cards_grid/FullWidthCardsGrid';
import BlogCard from 'shared/components/blog_card/BlogCard';
import { Link } from 'react-router-dom';

const Index = () => {

  return (
    <div>
      <Helmet>
        <title>Posts(Blog) - E. E. Omar Donato Bassani</title>
        <meta name="description" content="Posts do blog da Escola Estadual Omar Donato Bassani..." />.
      </Helmet>
      <Banner
        image='https://firebasestorage.googleapis.com/v0/b/omardonatobassani-c3633.appspot.com/o/Festa%20a%20Fantasia%2Fft1.jpeg?alt=media&token=24142515-4864-41fb-a988-3a2e9174a096'

        title='Todos os nossos posts!'

      />
      <SectionContainer
        
      >
        <FullWidthCardsGrid CardComponent={BlogCard} dataFunc={blogApi.getBlogPosts} />
      </SectionContainer>
    </div>
  )
}

export default Index;
