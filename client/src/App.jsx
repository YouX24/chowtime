import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Home from "./components/Home";
import Survey from "./components/Survey";
import ShareLink from "./components/ShareLink";
import Result from './components/Result';
import NotFound from './components/NotFound';

function App() {

  const [optObj, setOptObj] = useState({})
  const [uniqueObj, setUniqObj] = useState(new Set())
  const [showVerification, setShowVerification] = useState(false)
  const [showDuplication, setShowDuplication] = useState(false)
  const [showOptionCountError, setShowOptionCountError] = useState(false)
  const navigate = useNavigate();


  // handle duplication pop up
  const handleDuplicationPopUp = () => {
    setShowDuplication(true)
    setTimeout(() => {
      setShowDuplication(false)
    }, 3000)
  }


  // handle not enough options
  const handleOptionCountPopUp = () => {
    setShowOptionCountError(true)
    setTimeout(() => {
      setShowOptionCountError(false)
    }, 3000)
  }


  // add to items to itemsObj
  const addItem = (itemName) => {
    if (uniqueObj.has(itemName)) {
      handleDuplicationPopUp()
      return
    }

    let uniqueObjCopy = new Set(uniqueObj).add(itemName)
    setUniqObj(uniqueObjCopy)

    const id = uuidv4()
    let itemsObjCopy = {[id]:itemName, ...optObj}
    setOptObj(itemsObjCopy)
  }


  // remove items from itemsObj
  const removeItem = (itemID) => {
    let itemsObjCopy = {...optObj}
    let uniqueObjCopy = new Set(uniqueObj)
    uniqueObjCopy.delete(itemsObjCopy[itemID])
    delete itemsObjCopy[itemID]
    setOptObj(itemsObjCopy)
    setUniqObj(uniqueObjCopy)
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
    if (uniqueObj.size < 2) {
      handleOptionCountPopUp()
    } else {
      setShowVerification(true)
    }
  }


  // pass data from frontend to backend
  const createSurvey = async () => {
    const id = uuidv4()
    try {
      await fetch("http://localhost:5000/insert", {
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
        <Route exact path="/" element={<Home itemsObj={optObj} addItem={addItem} removeItem={removeItem} verifySurveyCreation={verifySurveyCreation} showVerification={showVerification} handleVerification={handleVerification} showDuplication={showDuplication} showOptionCountError={showOptionCountError}/>}/>
        <Route path="/survey/:surveyID" element={<Survey/>}/>
        <Route path="/sharelink/:surveyID" element={<ShareLink/>}/>
        <Route path="/result/:surveyID" element={<Result/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
