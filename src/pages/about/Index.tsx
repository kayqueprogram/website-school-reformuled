import React, { useState, useEffect } from 'react';
import aboutApi from 'services/about';
import { useParams } from 'react-router-dom';

interface AboutData {
  title: string;
  // adicione outras propriedades do objeto 'about' aqui
}

const About: React.FC = () => {
  const [about, setAbout] = useState<AboutData | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const getAbout = async () => {
      if (id) {
        const data = await aboutApi.getAboutContent(id);
        setAbout(data);
      }
    };

    getAbout();
  }, [id]);

  return (
    <>
      {about?.title && <div>{about.title}</div>}
    </>
  );
};

export default About;
