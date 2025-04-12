import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Profilecard from './Profilecard';
import GridView from './GridView';
import Todo from './Todo';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from './store';
import {Provider} from "react-redux";
import Home from './home';

const profilelist = {
  name: "pavithra",
  department: "AIDS",
  year: 2,
  mobile: 9025458770,
  profileImage: reactLogo,
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/todo" element={<Todo />} /> */}
        <Route path="/profilecard" element={<Profilecard profile={profilelist}/>
} />
        <Route path="/gridview" element={<GridView />} />

        <Route path="/todo" element={ <Provider store={store}> <Todo/></Provider> }/>

       
      </Routes>
    </BrowserRouter>
  );
}

export default App