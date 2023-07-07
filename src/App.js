import './App.css';
import Banner from './components/banner';
import Rocket from './components/rocket';
import Card from './components/card';
import Navbar from './components/Navbar';
import Scroll from './components/scroll';
function App() {
  return (
    <>
    <div className='App'>
      <Navbar />
      <Banner />
      <Scroll />
      <Rocket />
      <Card />
    </div>
    </>
  );
}

export default App;
