import PageLayout from 'shared/layout/PageLayout';
import Home from 'pages/home/Index';
import Galeria from 'pages/Galeria';

const routesConfig = [
  {
    path:'/',
    label:'Home',
    Component:<PageLayout><Home/></PageLayout>
  },
  {
    path: '/galeria',
    label: 'Galeria',
    Component:<PageLayout><Galeria/></PageLayout>
  },
];

export default routesConfig;