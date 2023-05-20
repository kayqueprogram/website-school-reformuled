import React,{useState,useEffect} from 'react';
import aboutApi from '../../services/about/index';
import Banner from '../../shared/components/banner/Banner';
import SectionContainer from 'shared/components/Section_Container/SectionContainer';
import Column from 'shared/components/column/Column';
import Paragraph from 'shared/components/paragraph/Paragraph';
import { breakStr } from 'shared/utils/breakStr';

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

  return (
    <>
      <Banner
      title={about?.title}
      image={about?.imgBanner}
     />
  
     <SectionContainer title={about?.title}>
      {about?.content && (
          <Column gap='2.6rem'>
              {breakStr(about.content)?.map(cont => <Paragraph>{cont}</Paragraph>)}
          </Column>
      )}
      {about?.content2 && (
          <Column gap='2.6rem'>
              {breakStr(about.content2)?.map(cont => <Paragraph>{cont}</Paragraph>)}
          </Column>
      )}
      {about?.conclusion && (
          <Column gap='2.6rem'>
              {breakStr(about.conclusion)?.map(cont => <Paragraph>{cont}</Paragraph>)}
          </Column>
      )}
     </SectionContainer>
    </>
  )
}

export default Index