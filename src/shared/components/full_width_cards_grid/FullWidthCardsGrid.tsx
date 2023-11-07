import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

type TProps = {
  CardComponent: React.FC<any>,
  dataFunc: () => Promise<any[]>
}

const FullWidthCardsGrid = ({ CardComponent, dataFunc }: TProps) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dataFunc();
        setData(response);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, [dataFunc]);

  return (
    <Container>
      {data.map((el) => (
        <CardWrapper key={el.id}>
          <CardComponent {...el} />
        </CardWrapper>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr)); 
  gap: 1rem; 
  width: 100%;
`;

const CardWrapper = styled.div`
  margin: 1rem; 
`;

export default FullWidthCardsGrid;
