import './App.css';


import {
  BrowserRouter,

  Route,
  
  Routes
} from "react-router-dom";
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { Deposit } from './Components/Deposit';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<TextForm />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path='/deposit' element={<Deposit />} />
      </Routes>

    </BrowserRouter>
  );
}



export default App;

