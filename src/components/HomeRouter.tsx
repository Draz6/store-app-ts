import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import SignUp from "./SignUp";
import Collection from "./Collection";
import LogIn from "./LogIn";

export default function HomeRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Collection />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Collection" element={<Collection />} />
        </Routes>
      </div>
    </Router>
  );
}
