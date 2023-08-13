import React, { useState } from 'react';
import styled from 'styled-components';
import Grid from '../grid/Grid';
import ReactPaginate from 'react-paginate';
import Column from '../column/Column'; // Make sure to import this
import pageIcons from 'shared/utils/pageIcons';


type TProps = {
  CardComponent: React.FC<any>,
  data: Array<any>
}

const CardsGrid = ({ CardComponent, data }: TProps) => {
  const [pageNumber, setPageNumber] = useState(0);

  const dataPerPage = 10;
  const pagesVisited = pageNumber * dataPerPage;
  const pageCount = Math.ceil(data.length / dataPerPage);
  const dataToRender = data.slice(pagesVisited, pagesVisited + dataPerPage);

  const changePage = ({ selected }: { selected: number }): void => {
    setPageNumber(selected);
  };

  return (
    <Container>
      <Column>
        <Grid>
          {
            dataToRender.map((el) => <CardComponent key={el.id} {...el} />) // Added key prop
          }
        </Grid>
        <PaginateField>
          <ReactPaginate
            previousLabel={<pageIcons.ArrowLeft />}
            nextLabel={<pageIcons.ArrowRight />}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination"}
            pageLinkClassName={'btn'}
            disabledClassName={"paginationDisabled"}
            activeClassName={"activeBtn"}
          />
        </PaginateField>
      </Column>
    </Container>
  )
}

const Container = styled.div`
  padding: 3rem 0rem;
`;

const PaginateField = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 4rem 0px;

  .pagination {
    display: flex;
    align-items: center;
    list-style: none;

    .btn, .next, .previous, .activeBtn {
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      justify-content: center;
      align-items: center;
      border: 1px solid gainsboro;
      cursor: pointer;
    }

    .activeBtn {
      background-color: gainsboro;
    }
  }
`;

export default CardsGrid;
