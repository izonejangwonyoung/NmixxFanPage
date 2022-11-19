import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from "./Navbar";
import Mainpage from "./Mainpage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Haewon from "./who/Haewon";

function App() {
    return (
        <div>
            <MainNavbar/>

            <Routes>
                <Route path="/" element={<Mainpage/>}></Route>
                <Route path="who/Haewon" element={<Haewon/>}></Route>
            </Routes>

        </div>
    );
}

export default App;
