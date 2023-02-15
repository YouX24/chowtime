import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
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

// get data from backend
  // const createSurvey = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/info", {
  //       method: "GET",
  //     });
  //     console.log(response)
  //     const data = await response.json()
  //     console.log(data)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // pass data from frontend to backend
  // TODO: pass data to backend and insert data into database
  const createSurvey = async () => {
    const id = uuidv4()
    try {
      const response = await fetch("http://localhost:5000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          items: itemsObj,
          surveyID: id
        })
      });
    } catch (error) {
      console.error(error);
    }
  };
  


  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home itemsObj={itemsObj} addItem={addItem} removeItem={removeItem} createSurvey={createSurvey}/>}/>
        <Route path="/survey/" element={<Survey/>}/>
        /* can use below route for 404 page */
        {/* <Route path="*" element={<NotFound/>} */} 
      </Routes>
    </>
  )
}

export default App
