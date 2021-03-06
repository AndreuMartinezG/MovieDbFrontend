import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Register from './Containers/Register/Register';
import Profile from './Containers/Profile/Profile';
import Admin from './Containers/Admin/Admin';
import Peliculas from './Containers/Peliculas/Peliculas';
import ShopCart from './Containers/ShopCart/ShopCart';
import Pedidos from './Containers/Pedidos/Pedidos';
import DatosPerfil from './Containers/DatosPerfil/DatosPerfil';
import ModificarPerfil from './Containers/ModificarPerfil/ModificarPerfil';
import DetallesPelicula from './Containers/DetallesPelicula/DetallesPelicula';
import ResultadoBusqueda from './Containers/ResultadoBusqueda/ResultadoBusqueda';
import RegistredUsers from './Containers/RegistredUsers/RegistredUsers';
import RegistredFilms from './Containers/RegistredFilms/RegistredFilms';
import RegistredOrders from './Containers/RegistredOrders/RegistredOrders';
import BorrarUsuarios from './Containers/BorrarUsuarios/BorrarUsuarios';
import BorrarPelicula from './Containers/BorrarPelicula/BorrarPelicula';
import BorrarPedidos from './Containers/BorrarPedidos/BorrarPedidos';
import Series from './Containers/Series/Series';
import DetallesSeries from './Containers/DetallesSeries/DetallesSeries';
import PeliculasTopRated from './Containers/PeliculasTopRated/PeliculasTopRated';
import PeliculasPopulares from './Containers/PeliculasPopulares/PeliculasPopulares';
import PeliculasUltimas from './Containers/PeliculasUltimas/PeliculasUltimas';



function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/peliculas' element={<Peliculas /> } />
          <Route path='/peliculasTopRated' element={<PeliculasTopRated /> } />
          <Route path='/peliculasPopulares' element={<PeliculasPopulares /> } />
          <Route path='/peliculasUltimas' element={<PeliculasUltimas /> } />
          <Route path='/shopcart' element={<ShopCart />} />
          <Route path='/pedidos' element={<Pedidos />} />
          <Route path='/datosPerfil' element={<DatosPerfil />} />
          <Route path='/modificarPerfil' element={<ModificarPerfil />} />
          <Route path='/detallespelicula/:movieId' element={<DetallesPelicula />} />
          <Route path='/resultadobusqueda' element={<ResultadoBusqueda />} />
          <Route path='/registredUsers' element={<RegistredUsers />} />
          <Route path='/registredFilms' element={<RegistredFilms />} />
          <Route path='/registredOrders' element={<RegistredOrders />} />
          <Route path='/borrarUsuarios' element={<BorrarUsuarios />} />
          <Route path='/borrarPelicula' element={<BorrarPelicula />} />
          <Route path='/borrarPedidos' element={<BorrarPedidos />} />
          <Route path='/series' element={<Series />} />
          <Route path='/detallesSeries/:serieId' element={<DetallesSeries />} />
        </Routes>

        <Footer />


      </BrowserRouter>

    </div>
  );
}

export default App;
