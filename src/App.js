
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import { useState } from 'react';
import Calculator from './Calculator';

function App() {
  const [user, setUser] = useState("Guest");
  const [user2, setUser2] = useState("Guest");
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/about" element={<Home user1 = {true}/>}>
        </Route>
        <Route exact path="/calculator" element={<Calculator user1 = {user2}/>}>
        </Route>
        <Route exact path="/" element={<Home user1 = {user} setUser1 = {setUser} setUser3 = {setUser2}/>}>
        </Route>
      </Routes>
  </Router>
  </div>
  );
}

export default App;
