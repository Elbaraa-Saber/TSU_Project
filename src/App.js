import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Page from './components/Page';


function App() {
  return (
    <>
    
      <Navbar/>
      <div className="App">
        <div className='container'>
          <Sidebar/>
          <Page/>
        </div>
      </div>
    </>
  );
}

export default App;
