import PageLayout from 'shared/layout/PageLayout';
import Home from 'pages/home/Index';
import Galeria from 'pages/galeria/Index';
import DiaD from 'pages/galeria/DiaD';
import Blog from 'pages/blog/Index';
import Post from 'pages/blog/post/Index';

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
  {
    path:'/blog',
    label:'Blog',
    Component:<PageLayout><Blog/></PageLayout>
  },{
    path:'/blog/:id',
    label:'Blog Post',
    Component:<PageLayout><Post/></PageLayout>
  }
];

export default routesConfig;