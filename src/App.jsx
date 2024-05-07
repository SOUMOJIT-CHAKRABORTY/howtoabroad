import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchCourse from "./components/SearchCourse";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" render={() => <div>Home Page</div>} />
          <Route path="/search" element={<SearchCourse />} />
          <Route exact path="/login" render={() => <div>Login Page</div>} />
          <Route exact path="/portal" render={() => <div>Portal Page</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
