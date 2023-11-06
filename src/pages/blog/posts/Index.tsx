import React, { useState, useEffect } from 'react';
import blogApi from 'services/blog';
import BlogCard from 'shared/components/blog_card/BlogCard';
import RowToColumn from 'shared/components/row_to_column/RowToColumn';
import Banner from 'shared/components/banner/Banner';
import SectionContainer from 'shared/components/Section_Container/SectionContainer';
import CardsGrid from 'shared/components/cards_grid/CardsGrid';
import DataFetcher from 'shared/components/data_fetcher/DataFetcher';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { useParams } from 'react-router-dom';


const Index = () => {


        return (
            <>
                <Banner
                    image='https://cdn.discordapp.com/attachments/1098057370728403115/1108939866957434890/patio.webp'
                    title='Todos os posts'
                />
                <SectionContainer>
                    <DataFetcher
                        fetchFunc={blogApi.getBlogPosts}
                        Component={RowToColumn}
                        propsForComponent={{ CardComponent: BlogCard, }}
                    />
                </SectionContainer>
            </>
        )
    }


export default Index