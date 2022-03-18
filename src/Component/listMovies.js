import React from 'react'
import MovieCard from './movieCard';
function ListMovies({movies}) {
  return (
    <div>
        {movies.map((movie ,key)=><MovieCard movie={movie} key={key}/>)}
    </div>
  )
}
export default ListMovies;