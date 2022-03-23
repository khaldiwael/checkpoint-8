import './App.css';
import {moviesData} from './Data'
import { useState } from 'react';
import ListMovies from './Component/listMovies';
import { Link, Route, Routes } from 'react-router-dom';
import Details from './Component/Details';


function App() {

  // const add= (e) => {
  //   e.preventDefault()
  //   setMovies([...movies,{
  //     srcvideo:"https://www.youtube.com/embed/dtxL52SDR3E",title:"one piece"}])
  // }
  return (
    <>
    <div className='BG'>
      <div className='menu'>
        
      <Link className='LMenu' to='/' >list movies</Link>
        <Link className='LMenu' to='/' >acceuil</Link>

      </div>
        <Routes>
        <Route path="/" element={<ListMovies />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
    </>
  );
}
export default App;
