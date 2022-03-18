import './App.css';
import {moviesData} from './Data'
import { useState } from 'react';
import ListMovies from './Component/listMovies';
import { Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import Details from './Component/Details';


function App() {
  const [movies, setMovies] = useState(moviesData);
  const add= (e) => {
    e.preventDefault()
    setMovies([...movies,{
      srcvideo:"https://www.youtube.com/embed/dtxL52SDR3E",title:"one piece"}])
  }
  return (
    <>
      <h1>liste des video</h1>
      <Routes>
       <Route path="/" element={<ListMovies  movies={movies}/>} />
       <Route path="/details/:username" element={<Details />} />
       <Route path="/login" element={<Login />} />
     </Routes>
    </>
  );
}
export default App;
