import PageLayout from 'shared/layout/PageLayout';
import Home from 'pages/home/Index';

const routesConfig = [
  {
    path:'/',
    label:'Home',
    Component:<PageLayout><Home/></PageLayout>
  }
];

export default routesConfig;