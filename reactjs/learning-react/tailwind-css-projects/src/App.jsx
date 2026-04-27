import React from 'react'
import Section2 from './components/presentation/section2/Section2'
import Section1 from './components/presentation/section1/Section1'
import profiles from "./data/Profile";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Notes from './components/notes-app/Notes';
import Gallery from './components/gallery-app/Gallery';
const App = () => {



  return (


    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Section1 profile={profiles} />} />
          <Route path="/notesapp" element={<Notes />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App