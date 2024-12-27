
import React, { useState } from "react";
import './../styles/App.css';


 const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]
const App = () => {
     const [Data, setData]=useState("")

    const handleChande=(e)=>{
      setData(e.target.value)
    }
   const filteredFruits= fruits.filter((item)=>item.toLowerCase().includes(Data.toLowerCase()))
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Search item</h1>
        <input placeholder="search" value={Data} onChange={handleChande}></input>
        {
          filteredFruits.map(item=>{
            return(
              <ul>
                <li>{item}</li>
              </ul>
            )
          })
        }
    </div>
  )
}

export default App
