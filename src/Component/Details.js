import React from 'react'
import { useParams } from "react-router-dom";

function Details() {
  let { username } = useParams();

  return (
      <>
      
    <div>user name :{console.log(username)}</div>
    <p>{username}</p></>
  )
}

export default Details