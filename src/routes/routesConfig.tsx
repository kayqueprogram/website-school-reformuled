import PageLayout from 'shared/layout/PageLayout';
import Home from 'pages/home/Index';
import Blog from 'pages/blog/Index';
import Post from 'pages/blog/post/Index';
import About from 'pages/about/Index';
import GalleryPage from 'pages/galeria/Index';
import Gallery from 'pages/galeria/project/Index';
import BlogPostsPage from 'pages/blog/posts/Index';

const routesConfig = [
  {
    path:'/',
    state:'Home',
    Component:<PageLayout><Home/></PageLayout>
  },
  {
    path: '/galeria',
    state: 'Galeria',
    Component:<PageLayout><GalleryPage/></PageLayout>
  },
  {
    path: '/galeria/:galleryId',
    Component:<PageLayout><Gallery/></PageLayout>
  },{
    path:'/blog',
    state:'Blog',
    Component:<PageLayout><Blog/></PageLayout>
  },
  {
    path: '/posts',
    state: 'Posts',
    Component:<PageLayout><BlogPostsPage/></PageLayout>
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