
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componet/HomePage/Home';
import Navbar from './Componet/HomePage/NavbarPage/Navbar';
import Cities from './Componet/CitiiesPage/Cities';

function App() {


  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/cities' element={<Cities/>}></Route>
</Routes>

</BrowserRouter>

      </>
  )
}

export default App
