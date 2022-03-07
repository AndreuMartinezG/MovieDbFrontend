import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Containers/Home/Home';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
        <Header/>

        <Routes>
          <Route path='/' element={<Home />} />

        </Routes>

        <Footer />
      
      
      </BrowserRouter>

    </div>
  );
}

export default App;
