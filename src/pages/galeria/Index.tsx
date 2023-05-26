import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Folder from '../../shared/components/galeria/GalleryFolder';
import { Link } from 'react-router-dom';
import SectionContainer from 'shared/components/Section_Container/SectionContainer';
import galleryApi from 'services/gallery';
import pageTheme from 'shared/styles/pageTheme';

const GalleryPageWrapper = styled.div`
  min-height: 60vh;
  gap: 14px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;


const Galeria = () => {
  const [galleries,setGalleries] = useState<any[]>([]);

  useEffect(()=>{
    const getGalleries = async() =>{
       const data = await galleryApi.getGalleryCollections();
       data && setGalleries(data)
    }

    getGalleries()
  },[])

  console.log(galleries)

  return ( 
   <SectionContainer
    backgroundColor={pageTheme.colors.details.primary.dark}
    color={pageTheme.colors.text.secondary.light}
   >
     <GalleryPageWrapper>
      {
        galleries.map(gallery => (
          <Link to={`/galeria/${gallery.id}`}>
            <Folder {...gallery}/>
          </Link>
        ))
      }
     </GalleryPageWrapper>     
   </SectionContainer>
  );
};

export default Galeria;





