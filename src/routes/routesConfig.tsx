import PageLayout from 'shared/layout/PageLayout';
import Home from 'pages/home/Index';
import Galeria from 'pages/galeria/Index';
import DiaD from 'pages/galeria/DiaD';
import Blog from 'pages/blog/Index';
import Post from 'pages/blog/post/Index';
import About from 'pages/about/Index';
import Barcadoinferno from 'pages/galeria/BarcadoInferno';
import Pinacoteca from 'pages/galeria/Pinacoteca';

const routesConfig = [
  {
    path:'/',
    state:'Home',
    Component:<PageLayout><Home/></PageLayout>
  },
  {
    path: '/galeria',
    state: 'Galeria',
    Component:<PageLayout><Galeria/></PageLayout>
  },
  {
    path: '/galeria/prjD',
    Component:<PageLayout><DiaD/></PageLayout>
  },
  {
    path: '/galeria/barcaDoInferno',
    Component:<PageLayout><Barcadoinferno/></PageLayout>
  },
  {
    path: '/galeria/pinacoteca',
    Component:<PageLayout><Pinacoteca/></PageLayout>
  },
  {
    path:'/blog',
    state:'Blog',
    Component:<PageLayout><Blog/></PageLayout>
  },
  {
    path:'/blog/:id',
    Component:<PageLayout><Post/></PageLayout>
  },
  {
    path: '/about',
    state:'Sobre',
    Component:<PageLayout><About/></PageLayout>
  }
];

export default routesConfig;