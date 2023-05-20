import React,{useState,useEffect} from 'react';
import aboutApi from '../../services/about/index';
import Banner from '../../shared/components/banner/Banner';
import SectionContainer from 'shared/components/Section_Container/SectionContainer';

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
     {about?.title && (
      <Banner
      title={about?.title}
     />
     )}
     <SectionContainer>
      
     </SectionContainer>
    </>
  )
}

export default Index