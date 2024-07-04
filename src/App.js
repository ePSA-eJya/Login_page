import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    //add Router
    <Router>
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
