import React from 'react';
import logo from './logo.svg';
import CardBlog from 'shared/components/CardBlog';
import Gallery from './Gallery';


function App() {

  /**  <CardBlog title='Ide estadual aumenta' description='o ide das escolas estaduais de são paulo aumenta significadamente' image='https://cdn.discordapp.com/attachments/1098057370728403115/1101638685579018280/IMG-20230428-WA0001.jpg'/>
  <CardBlog title='Ide estadual aumenta' description='o ide das escolas estaduais de são paulo aumenta significadamente' image='https://cdn.discordapp.com/attachments/1098057370728403115/1101638685579018280/IMG-20230428-WA0001.jpg'/> **/
  return (
    <div className="App">
     <Gallery />
    </div>
  );
}

export default App;
