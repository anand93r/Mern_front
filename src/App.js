import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './components/Aboutus';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">

      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/aboutus' element={<Aboutus/>}></Route>
      </Routes>
  
    </div>
  );
}

export default App;
