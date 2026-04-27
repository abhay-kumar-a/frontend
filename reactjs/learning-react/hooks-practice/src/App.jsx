import React from 'react'
import Scrolling from './components/Scrolling';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UseStateHook from './components/UseStateHook';
import MethodUsage from './components/MethodUsage';
import UseEffectExp from './components/UseEffectHook';

const App = () => {
  // write your logics
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MethodUsage />} />
          <Route path="/scrolling" element={<Scrolling />} />
          <Route path="/useState" element={<UseStateHook />} />
          <Route path='/useeffect' element={<UseEffectExp />} />

        </Routes>
      </BrowserRouter>

    </div>

  )
}
export default App