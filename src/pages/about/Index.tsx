import React,{useState,useEffect} from 'react';
import aboutApi from '../../services/about/index';
import Banner from '../../shared/components/banner/Banner';

const Index = () => {
  const [about, setAbout] = React.useState<any>({});

  useEffect(() => {
    const getPost = async () => {
      const data = await aboutApi.getAbout();
      setAbout(data);
    };

    getPost();
  }, []);

  return (
    <>
     <Banner
      title={about?.title}
     />
    </>
  )
}

export default Index