import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Home from "./components/Home";
import Survey from "./components/Survey";

function App() {

  const [itemsObj, setItemsObj] = useState({})


  // add to items to itemsObj
  const addItem = (itemName) => {
    const id = uuidv4()
    let itemsObjCopy = {[id]:itemName, ...itemsObj}
    setItemsObj(itemsObjCopy)
  }


  // remove items from itemsObj
  const removeItem = (itemID) => {
    let itemsObjCopy = {...itemsObj}
    delete itemsObjCopy[itemID]
    setItemsObj(itemsObjCopy)
  }


  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home itemsObj={itemsObj} addItem={addItem} removeItem={removeItem}/>}/>
        <Route path="/survey/" element={<Survey/>}/>
        /* can use below route for 404 page */
        {/* <Route path="*" element={<NotFound/>} */} 
      </Routes>
    </>
  )
}

export default App
