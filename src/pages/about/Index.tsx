import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import aboutApi from '../../services/about/index';
import Banner from '../../shared/components/banner/Banner';
import SectionContainer from 'shared/components/Section_Container/SectionContainer';
import Column from 'shared/components/column/Column';
import Paragraph from 'shared/components/paragraph/Paragraph';
import { breakStr } from 'shared/utils/breakStr';
import Helmet from 'react-helmet'

const Index = () => {
  const [about, setAbout] = useState<any>({});

  useEffect(() => {
    const getPost = async () => {
      //lidar com erro aq
      const data = await aboutApi.getAbout();
      setAbout(data)
    };

    getPost();
  }, []);

  console.log(about)

  const videos = [{ id: 1, title: 'Memorial', src: 'https://youtu.be/kKBZa2EvyUA', }]

  const Video = styled.div`
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 80%;
  video {
    border-radius: 20px;
    width: 100%;
    max-width: 100%;
  }
`;


  const Title = styled.h1`
display: block;
  margin-top: 1rem;
  font-size: 2rem;
`;

  return (
    <>
      <Helmet>
        <title>Sobre - E. E. Omar Donato Bassani</title>
        <meta name="description" content="Saiba mais sobre a história de nossa escola!"/>.
      </Helmet>
      <Banner
        title={about?.title}
        image={about?.imgBanner}
      />
      <br />
      <SectionContainer title={about?.title}>
        {about?.content && (
          <Column gap='2.6rem'>
            {breakStr(about.content)?.map(cont => <Paragraph>{cont}</Paragraph>)}
          </Column>
        )}
        <br />
        {about?.content2 && (
          <Column gap='2.6rem'>
            {breakStr(about.content2)?.map(cont => <Paragraph>{cont}</Paragraph>)}
          </Column>
        )}
        <br />
        {about?.conclusion && (
          <Column gap='2.6rem'>
            {breakStr(about.conclusion)?.map(cont => <Paragraph>{cont}</Paragraph>)}
          </Column>

        )}
        
          <Video>
            <video controls>
              <source src={about.memorial} type="video/mp4" />
            </video>
            <Title>Memorial Bassani</Title>
          </Video>
        
        <br />

      </SectionContainer>
    </>
  )
}

export default Index