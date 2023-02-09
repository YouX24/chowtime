import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState } from "react";
import Home from "./components/Home";
import Survey from "./components/Survey";

function App() {

  const [items, setItems] = useState([])

  const addItem = (itemName) => {
    let itemsCopy = [itemName, ...items]
    setItems(itemsCopy)
  }


  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home items={items} addItem={addItem}/>}/>
        <Route path="/survey/" element={<Survey/>}/>
        /* can use below route for 404 page */
        {/* <Route path="*" element={<NotFound/>} */} 
      </Routes>
    </>
  )
}

export default App
