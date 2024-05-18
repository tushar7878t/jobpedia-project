import { BrowserRouter, Routes, Route } from "react-router-dom";
import Candidates from './component/Candidates';
import Home from './component/Home';
import Jobs from './component/Jobs';
import Addjobs from './component/Addjobs';
import Login from './component/Login';
import Signup from "./component/Signup";
import Navbar from './component/Navbar';
import Addcandidates from "./component/Addcandidates";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/add_jobs" element={<Addjobs />} />
          <Route path="/Candidates" element={<Candidates />} />
          <Route path="/add_candidate" element={<Addcandidates />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;