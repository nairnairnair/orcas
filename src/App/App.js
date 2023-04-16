import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Form from "../Form/Form";
import Graphs from "../Graphs/Graphs";
import AdminHomepage from "../AdminHomepage/AdminHomepage";
import ReportEditor from "../ReportEditor/ReportEditor";
import Header from "../Header/Header.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/graphs" element={<Graphs />} />
        <Route path="/adminhomepage" element={<AdminHomepage />} />
        <Route path="/reporteditor" element={<ReportEditor />} />
      </Routes>
    </div>
  );
}

export default App;
