import PageLayout from 'shared/layout/PageLayout';
import Home from 'pages/home/Index';
import Galeria from 'pages/home/galeria/Galeria';
import DiaD from 'pages/home/galeria/DiaD'

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
  {
    path: '/galeria/prjD',
    label:'Projeto dia D',
    Component:<PageLayout><DiaD/></PageLayout>
  },
];

export default routesConfig;