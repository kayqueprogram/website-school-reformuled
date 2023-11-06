import React from 'react';
import blogApi from 'services/blog';
import BlogCard from 'shared/components/blog_card/BlogCard';
import SectionContainer from 'shared/components/Section_Container/SectionContainer';
import CardsGrid from 'shared/components/cards_grid/CardsGrid';
import DataFetcher from 'shared/components/data_fetcher/DataFetcher';
import { Link } from 'react-router-dom';


const BlogPostsPage = ({ posts }: any) => {
    return (
        <>
            <SectionContainer>
                <DataFetcher
                    fetchFunc={blogApi.getBlogPosts}
                    Component={SectionContainer}
                    propsForComponent={{ CardComponent: BlogCard, }}
                />
            </SectionContainer>
        </>
    )
}

export default BlogPostsPage