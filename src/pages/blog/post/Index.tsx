import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import blogApi from 'services/blog';
import { useParams } from 'react-router-dom';
import Banner from 'shared/components/banner/Banner';
import SectionContainer from 'shared/components/Section_Container/SectionContainer';
import Column from 'shared/components/column/Column';
import { breakStr } from 'shared/utils/breakStr';
import Paragraph from 'shared/components/paragraph/Paragraph';

const Index = () => {
  const [post,setPost] = useState<any>({});
  const {id} = useParams();

    useEffect(()=>{
       const getPost = async() =>{
           if(id){
             const data = await blogApi.getBlogPost(id);
             setPost(data);
           }
        };

        getPost();
  },[id]);

  
  
  return (
    <>
      <Banner
        labelTitle={post?.title}
        highlightedWord='Não Deixe de Ler'
        image={post?.image}
      />
      <SectionContainer
       title={post?.title}
      >
      {
        post?.content && (
         <Column gap='2.6rem'>
           {breakStr(post.content)?.map(cont => <Paragraph>{cont}</Paragraph>)}
         </Column>
        )
      } 
      </SectionContainer>
      {
        post?.vid1 && (
                  <Video>
                    <video controls src={post.vid1}></video>
                  </Video>
                )
      }
       {
        post?.vid2 && (
                  <Video>
                    <video controls src={post.vid2}></video>
                  </Video>
                )
      }
       {
        post?.vid3 && (
                  <Video>
                    <video controls src={post.vid3}></video>
                  </Video>
                )
      }
      {     post?.vid4 && (
                  <Video>
                    <video controls src={post.vid4}></video>
                  </Video>
                )
      }
    </>
  )
}

const Video = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 100%;
  video {
    border-radius: 20px;
    width: 100%;
    max-width: 100%;
  }
`;

export default Index
