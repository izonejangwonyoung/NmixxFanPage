import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from "./Navbar";
import Mainpage from "./Mainpage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Haewon from "./who/Haewon";
import Lilly from "./who/Lilly";
import NMIXX from "./who/NMIXX";
import Board from "./Board";
import MovieBoard from "./MovieBoard";
import Sullyoon from "./who/Sullyoon";
import Gyujin from "./who/Gyujin";
import Bae from "./who/Bae";
import Jiwoo from "./who/Jiwoo";
function App() {
    return (
        <div>
            <MainNavbar/>
            <Routes>
                <Route exact path="/" element={<Mainpage/>}></Route>
                <Route exact path="who/NMIXX" element={<NMIXX/>}></Route>
                <Route path="who/Haewon" element={<Haewon/>}></Route>
                <Route path="who/Lilly" element={<Lilly/>}></Route>
                <Route path="who/Sullyoon" element={<Sullyoon/>}></Route>
                <Route path="who/Bae" element={<Bae/>}></Route>
                <Route path="who/Jiwoo" element={<Jiwoo/>}></Route>
                <Route path="who/Kyujin" element={<Gyujin/>}></Route>
                <Route path="Board" element={<Board/>}></Route>
                <Route path="MovieBoard" element={<MovieBoard/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
