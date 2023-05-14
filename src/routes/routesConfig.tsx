import PageLayout from 'shared/layout/PageLayout';
import Home from 'pages/home/Index';
import Galeria from 'pages/galeria/Index';
import DiaD from 'pages/galeria/DiaD';
import Blog from 'pages/blog/Index';
import Post from 'pages/blog/post/Index';

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
    path:'/blog',
    state:'Blog',
    Component:<PageLayout><Blog/></PageLayout>
  },{
    path:'/blog/:id',
    Component:<PageLayout><Post/></PageLayout>
  }
];

export default routesConfig;