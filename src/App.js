import './App.css';
import {Route , Switch} from 'react-router-dom';
import Layout from './hoc/Layout';
import WeddingIdeas from './container/WeddingIdeas';
import ImgDetails from './container/ImgDetails';
import Categories from './container/Categories';
import {AnimatedRoutes,RouteTransition} from './RouteTransition';



const App =()=> {
  return (
    <div className="App">
        <Layout>
          <AnimatedRoutes>
            <RouteTransition path='/categories'>
                  <Categories/>
            </RouteTransition>
            <RouteTransition path='/photo' >
               <ImgDetails/>
            </RouteTransition>
            <RouteTransition path='/'exact>
              <WeddingIdeas/>
            </RouteTransition>
          </AnimatedRoutes>
        </Layout>
    </div>
  );
}

export default App;
