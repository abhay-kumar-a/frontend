import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>

    <Card user ='Abhay Kumar' age = {29} image ='https://images.unsplash.com/photo-1771957585146-e76c62faf663?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
     <Card user ='Rahul Kumar' age = {25} image ='https://images.unsplash.com/photo-1771957585146-e76c62faf663?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user ='Suman Kumar' age = {22} image ='https://images.unsplash.com/photo-1771957585146-e76c62faf663?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
       <Card user ='Priya Kumari' age = {23} image ='https://images.unsplash.com/photo-1771957585146-e76c62faf663?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <Card user ='Riya Kumari' age = {24} image ='https://images.unsplash.com/photo-1771957585146-e76c62faf663?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
         <Card user ='Anjali Kumari' age = {26} image ='https://images.unsplash.com/photo-1771957585146-e76c62faf663?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
  </div>
  )
}

export default App