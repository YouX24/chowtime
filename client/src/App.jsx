import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Home from "./components/Home";
import Survey from "./components/Survey";
import ShareLink from "./components/ShareLink";

function App() {

  const [optObj, setOptObj] = useState({})
  const [showErrorPopUp, setShowErrorPopUp] = useState(false)
  const [showVerification, setShowVerification] = useState(false)
  const navigate = useNavigate();


  // handle pop up, show popup, make it disappear after 3 seconds
  const handleErrorPopUp = () => {
    setShowErrorPopUp(true)
    setTimeout(() => {
      setShowErrorPopUp(false)
    }, 3000)
  }


  // add to items to itemsObj
  const addItem = (itemName) => {
    const id = uuidv4()
    let itemsObjCopy = {[id]:itemName, ...optObj}
    setOptObj(itemsObjCopy)
  }


  // remove items from itemsObj
  const removeItem = (itemID) => {
    let itemsObjCopy = {...optObj}
    delete itemsObjCopy[itemID]
    setOptObj(itemsObjCopy)
  }


  // insert into database or continue adding more options
  const handleVerification = (e) => {
    const value = e.target.value
    if (value === "Yes") {
      createSurvey()
    }
    setShowVerification(false)
  }


  // show error pop up or show verification pop up
  const verifySurveyCreation = () => {
    if (Object.keys(optObj).length === 0) {
      handleErrorPopUp()
    } else {
      setShowVerification(true)
    }
  }

  // pass data from frontend to backend
  const createSurvey = async () => {
    const id = uuidv4()
    try {
      const response = await fetch("http://localhost:5000/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          options: optObj,
          surveyID: id
        })
      });
      navigate('/sharelink/'+id);
    } catch (error) {
      console.error(error);
    }
  };
  


  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home itemsObj={optObj} addItem={addItem} removeItem={removeItem} verifySurveyCreation={verifySurveyCreation} showErrorPopUp={showErrorPopUp} showVerification={showVerification} handleVerification={handleVerification}/>}/>
        <Route path="/survey/:surveyID" element={<Survey/>}/>
        <Route path="/sharelink/:surveyID" element={<ShareLink/>}/>
        /* can use below route for 404 page */
        {/* <Route path="*" element={<NotFound/>} */} 
      </Routes>
    </>
  )
}

export default App
