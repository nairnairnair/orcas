import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "../Home/Home"
import Form from "../Form/Form"
import Graphs from "../Graphs/Graphs"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="form" element={ <Form/> } />
        <Route path="form/graphs" element={ <Graphs/> } />
      </Routes>
    </div>
  );
}

export default App;
