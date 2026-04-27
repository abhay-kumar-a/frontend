import React from 'react'
import Card from './components/Card'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LocalStorage from './components/localstorage/LocalStorage'
import User from './components/User'
import APIcall from './components/APICalling/APIcall'
import UseEffectExp from './components/hooks/UseEffectExp'

const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/localstorage" element={<LocalStorage />} />
          <Route path="/apicalling" element={<APIcall />} />
          <Route path='/useeffect' element={<UseEffectExp />} />
          <Route path='/useeffect' element={<UseEffectExp />} />
        </Routes>
      </BrowserRouter>
    </div>



  )
}

export default App