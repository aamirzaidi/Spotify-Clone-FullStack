import logo from './logo.svg';
import './App.css';
import Home from "./Home/Home"
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddSongPage from './Home/AddSongPage';

function App() {
  return (

    <div>
      <Router>
      <Header />
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/addSong' element={<AddSongPage/>}/>
      </Routes>
      </Router>
    </div>


  );
}

export default App;
