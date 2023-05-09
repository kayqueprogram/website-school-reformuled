import React,{useState} from 'react';
import styled from 'styled-components';
import Grid from '../grid/Grid';
import ReactPaginate from 'react-paginate';
import Column from '../column/Column';
import pageIcons from 'shared/utils/pageIcons';

type TProps = {
    CardComponent:React.FC<any>,
    data:Array<any>
}

const CardsGrid = ({CardComponent,data}:TProps) => {
  const [pageNumber, setPageNumber] = useState(0);

  const dataPerPage = 10;
  const pagesVisited = pageNumber * dataPerPage;
  const pageCount = Math.ceil(data.length / dataPerPage);
  const dataToRend = data.slice(pagesVisited, pagesVisited + dataPerPage);

  const changePage = ({ selected }:{selected:number}):void => {
    setPageNumber(selected);
  };

  return (
    <Container>
      <Column>
      <Grid>
        {
          dataToRend.map((el)=><CardComponent {...el}/>)
        }
      </Grid>
      <PaginateField>
        <ReactPaginate 
          previousLabel={'previos'}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"} 
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
 padding: 4rem 0px;

 .paginationBttns{
  display: flex;
  list-style: none;
 }

`;

export default CardsGrid;
