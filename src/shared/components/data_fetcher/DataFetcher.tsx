import React,{useEffect,useState} from 'react';

type TProps = {
    fetchFunc:Function,
    Component:React.FC<any>
    propsForComponent?:any
}

const DataFetcher = ({Component,propsForComponent,fetchFunc}:TProps) => {
  const [data,setData] = useState([])

  useEffect(()=>{
     const fetchData = async() =>{
     const data = await fetchFunc();
     setData(data);
    }

    fetchData()

  },[fetchFunc])

  return <Component data={data} {...propsForComponent}/>;
}

export default DataFetcher;
