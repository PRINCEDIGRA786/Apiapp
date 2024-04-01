import Apiform from "./components/Apiform";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Apipage from "./components/Apipage";
import ApiState from './contextapi/ApiState'
import Linkpage from "./components/Linkpage";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from './components/Login';
import About from './components/About';
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <>
      <ApiState>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/apiform" element={<Apiform />} />
            <Route path='/about' element={<About />} />
            <Route path="/apipage" element={<Apipage />} />
            <Route path='/linkpage' element={<Linkpage />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </ApiState>
    </>
  );
}

export default App;
