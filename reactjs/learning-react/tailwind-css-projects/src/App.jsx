import React from 'react'
import Section2 from './components/presentation/section2/Section2'
import Section1 from './components/presentation/section1/Section1'
import profiles from "./data/Profile";
const App = () => {
  
  
    
  return (
    <div>
    <Section1 profile = {profiles} />

  </div>
  )
}

export default App