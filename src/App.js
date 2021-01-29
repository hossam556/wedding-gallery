import './App.css';
import Layout from './hoc/Layout';
import WeddingIdeas from './container/WeddingIdeas';

const App =()=> {
  return (
    <div className="App">
        <Layout>
          <WeddingIdeas/>
        </Layout>
    </div>
  );
}

export default App;
