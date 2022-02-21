import React from 'react';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./components/Data"
import "./App.css"


export default function App() {

  const cards = data.map(item=>{
    return (<Card
    key={item.id}
    {...item}  //spreadproperty

           />)
  })
  return (
    <div>
     
         <Navbar />
         <Hero/>
         <section className="card-list">
         {cards}
         </section>
        

    </div>
  )
}
