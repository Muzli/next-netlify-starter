import Navbar from '../navbar/navbar'
import React from 'react'

export default function SimpleLayout(props) {
  return (
    <>
      <Navbar />
      <main role="main">
        <div className="container">
          {props.children}
        </div>
      </main>
    </>
  )
}