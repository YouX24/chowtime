import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from "./components/Home";
import Survey from "./components/Survey";

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/survey/:id" element={<Survey/>}/>
        /* can use below route for 404 page */
        {/* <Route path="*" element={<NotFound/>} */} 
      </Routes>
    </>
  )
}

export default App
