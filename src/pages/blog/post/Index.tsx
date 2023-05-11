import React,{useState,useEffect} from 'react';
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
      } {
        post?.vid1 && (
                  <Column gap='2.6rem'>
                    <video controls src={post.vid1}></video>
                  </Column>
                )
      }
       {
        post?.vid2 && (
                  <Column gap='2.6rem'>
                    <video controls src={post.vid2}></video>
                  </Column>
                )
      }
       {
        post?.vid3 && (
                  <Column gap='2.6rem'>
                    <video controls src={post.vid3}></video>
                  </Column>
                )
      }
      </SectionContainer>
    </>
  )
}

export default Index
