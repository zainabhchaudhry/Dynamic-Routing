"use client"
import React from 'react'

const Home = ({params}:{params:{routing: string}}) => {
    console.log(params);
  return (
    <div>
        <h1>Page Descriptions</h1>
        <h4>Following are the Details of "{params.routing}"</h4>
    </div>
  )
}

export default Home