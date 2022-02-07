import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Admin from './components/Login/Admin/Admin';
import PrivetRoute from './components/Login/PrivetRoute/PrivetRoute';
import Register from './components/Login/Register/Register';

export const UserContext = createContext()

function App() {
  const [loginUser, setLoginUser] = useState({})
  return (
    <UserContext.Provider value={[loginUser, setLoginUser]}>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<PrivetRoute />} >
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
