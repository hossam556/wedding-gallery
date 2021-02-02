import './App.css';
import {Route , Switch} from 'react-router-dom';
import Layout from './hoc/Layout';
import WeddingIdeas from './container/WeddingIdeas';
import ImgDetails from './container/ImgDetails';
import Categories from './container/Categories';

const App =()=> {
  return (
    <div className="App">
        <Layout>
          <Switch>
            <Route path='/categories' component={Categories}/>
            <Route path='/photo' component={ImgDetails}/>
            <Route path='/'exact component={WeddingIdeas}/>
          </Switch>
        </Layout>
    </div>
  );
}

export default App;
