import Card from './components/card'
import Navbar from './components/Navbar'
const app = () =>{


  let name ='abhay'
  let age = 21
  return (
    <div>
      {/* // component are used  */}
      <Navbar/>
        <Card/>
        <Navbar/>

        <Card/>
        <Navbar/>
        <Card/>

        <Card/>

        <Card/>


    </div>

  )
}

export default app