import React from 'react'
export default function MovieCard({movie}) {
  return (
    <>
     <h1>{movie.title}</h1>
      <iframe width="300" height="200" src={movie.srcvideo} title="YouTube video player" 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
       allowfullscreen/>
      <p>{}</p>
    </>
  )
}