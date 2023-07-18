import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ContentUser from "./components/adminDashboard/ContentUser";
import NavAd from "./components/navBar/NavAd";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <NavAd />
        <Routes>
          <Route path="/" />
          <Route path="/user" element={<ContentUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
