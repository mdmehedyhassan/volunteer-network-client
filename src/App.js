import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Admin from './components/Login/Admin/Admin';
import PrivetRoute from './components/Login/PrivetRoute/PrivetRoute';
import Register from './components/Login/Register/Register';
import Blog from './components/Main/Blog/Blog';
import Donation from './components/Main/Donation/Donation';
import Home from './components/Main/Home/Home';

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
          <Route path="/" element={<PrivetRoute />} >
            <Route path="/register/:id" element={<Register />} />
            <Route path="/donation/*" element={<Donation />} />
          </Route>
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <div className="mt-5">
          <a className="m-3" href="https://github.com/mdmehedyhassan/volunteer-network-server" target="blank" >
            <button className="btn btn-outline-light">Server site link</button>
          </a>
          <a className="m-3" href="https://github.com/mdmehedyhassan/volunteer-network-client" target="blank" >
            <button className="btn btn-outline-light">clients site link done</button>
          </a>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
