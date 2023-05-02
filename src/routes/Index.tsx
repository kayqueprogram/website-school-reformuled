import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routesConfig from './routesConfig';
//add config react-router-dom

const Index = () => {
  return (
    <Routes>
      {
        routesConfig.map(route => <Route path={route.path} element={route.Component}/>)
      }
    </Routes>
  )
}

export default Index
