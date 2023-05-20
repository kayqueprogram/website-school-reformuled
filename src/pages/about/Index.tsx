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
      <Column gap='2.6rem'>
          {breakStr(about.content)?.map(cont => <Paragraph>{cont}</Paragraph>)}
      </Column>
     </SectionContainer>
    </>
  )
}

export default Index