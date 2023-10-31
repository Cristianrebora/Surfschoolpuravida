import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './component/NavBar/NavBar'
import { ItemListContainer } from './component/ItemListContainer/ItemListConTainer'

function App() {
  

  return (
    <>
      <div>
       <NavBar />
       <ItemListContainer />

       </div>
       </>
  )
}

export default App
