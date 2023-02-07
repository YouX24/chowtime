import { useState } from 'react';
import Home from "./components/Home.jsx";

function App() {

  const [listItem, setListItem] = useState([])

  return (
    <div className="min-h-screen bg-gray-500">
      <Home/>
    </div>
  )
}

export default App
