import CustomNavbar from '../navbar/customnavbar'
import { React } from 'react'

export default function SimpleLayout(props) {
  return (
    <>
      <CustomNavbar />
      <main>
        <div className="container">
          {props.children}
        </div>
      </main>
    </>
  )
}