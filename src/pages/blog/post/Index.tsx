import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import blogApi from 'services/blog';
import { useParams } from 'react-router-dom';
import Banner from 'shared/components/banner/Banner';
import SectionContainer from 'shared/components/Section_Container/SectionContainer';
import Column from 'shared/components/column/Column';
import { breakStr } from 'shared/utils/breakStr';
import Paragraph from 'shared/components/paragraph/Paragraph';
import AudioPlayer from 'shared/components/galeria/audio/AudioPlayer';

const Index = () => {
  const [post, setPost] = useState<any>({});
  const { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      if (id) {
        const data = await blogApi.getBlogPost(id);
        setPost(data);
      }
    };

    getPost();
  }, [id]);



  return (
    <>
      <Banner
        title={post?.title}
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
          <Container>
            <Video>
              <video controls src={post.vid1}></video>
            </Video>
          </Container>)
      }
      {
        post?.vid2 && (
          <Container>
            <Video>
              <video controls src={post.vid2}></video>
            </Video>
          </Container>
        )
      }
      {
        post?.vid3 && (
          <Container>
            <Video>
              <video controls src={post.vid3}></video>
            </Video>
          </Container>
        )
      }
      {post?.vid4 && (
        <Container>
          <Video>
            <video controls src={post.vid4}></video>
          </Video>
        </Container>
      )
      }
      {post?.aud1 && (
        <Container>
          <AudioPlayer src={post.aud1} title={post.titleAud1} />
        </Container>
      )
      }
      {post?.aud2 && (
        <Container>
          <AudioPlayer src={post.aud2} title={post.titleAud2} />
        </Container>
      )
      }
      {post?.aud3 && (
        <Container>
          <AudioPlayer src={post.aud3} title={post.titleAud3} />
        </Container>
      )
      }
      {post?.aud4 && (
        <Container>
          <AudioPlayer src={post.aud4} title={post.titleAud4} />
        </Container>
      )
      }
      {post?.postContributions && (
        <SectionContainer title={post.postContributions} isRelative={true}>
          {
            post?.contribution1 && (
              <Column textDecoration='underline'color='#00e0ff'justifyContent='center' alignItems='center'>
                <Paragraph><a href={post.linkCredit1} target="_blank" rel="noopener noreferrer">{post.contribution1}</a></Paragraph>
              </Column>
            )
          }
          {
            post?.contribution2 && (
              <Column justifyContent='center' alignItems='center'>
                <Paragraph>{post.contribution2}</Paragraph>
              </Column>
            )
          }
          {
            post?.contribution3 && (
              <Column justifyContent='center' alignItems='center'>
                <Paragraph>{post.contribution3}</Paragraph>
              </Column>
            )
          }
          {
            post?.contribution4 && (
              <Column justifyContent='center' alignItems='center'>
                <Paragraph>{post.contribution4}</Paragraph>
              </Column>
            )
          }
        </SectionContainer>
      )}
    </>
  )
}

const Video = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 400px;
  width: 100%;
  video {
    border-radius: 20px;
    width: 100%;
    max-width: 100%;
  }
`;

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;

margin: auto;
border-radius: 23px;
color: ${({ theme }) => theme.colors.text.secondary.light};
padding: 20px;
padding-top: 100px;
`

export default Index
