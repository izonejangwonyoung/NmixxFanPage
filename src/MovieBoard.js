import {useEffect, useState} from "react";
import {Container, Row, Col, Spinner} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import Movie from "./Movie";
import {  BiSearchAlt2 } from "react-icons/bi";

function MovieBoard() {
    const [movie, setMovie] = useState([]);
    const [item, setItem] = useState("");
    const key = process.env.REACT_APP_API_KEY;
    const query = encodeURIComponent(item);
    const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&movieNm=${query}`;

    const searchItem = event => {
        setItem(event.target.value);
        console.log(item);
    };
    console.log(url);

    const fetchMovie = async () => {
        console.log("클릭");
        try {
            const response = await axios.get(url);
            //console.log(response);
            //console.log(response.data.movieListResult.movieList);
            const newMovieList = response.data.movieListResult.movieList;


            console.log(newMovieList);
            setMovie(newMovieList);
            console.log(movie);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h2 style={{position:"relative",top:"-15rem"}}>영화 검색</h2>
                  <SearchBar onClick={fetchMovie} onChange={searchItem} ></SearchBar>
<Result movie={movie}></Result>
            </header>
        </div>
    );
}
function SearchBar({ onClick, onChange }) {
    const handleKeyPress = e => {
        if(e.key === 'Enter') {
            onClick();
        }
    }

    return (
        <>
            <div className="input-group" style={{width: "20rem", marginBottom: "20px"}}>
                <input
                    style={{width:"100px"}}
                    type="search"
                    className="form-control rounded"
                    placeholder="영화 이름 입력"
                    onChange={onChange} onKeyDown={handleKeyPress}
                />
                <button type="button" id="search_btn" onClick={onClick} style={{borderRadius: "10px", marginLeft: "3px"}}>
                    <BiSearchAlt2 className="search_icon"></BiSearchAlt2>
                </button>
            </div>
        </>
    );
}
function Result({ movie }) {
    var lis = [];
    for (var i = 0; i < movie.length; i++) {
        var item = movie[i];
        lis.push(
            <ol key={item.movieCd}>
                영화 제목 :{item.movieNm}
                <br />
                개봉일 : {item.openDt == "" ? "미정" : item.openDt}
            </ol>
        );
    }

    return (
        <>
            <div className="result">
                <div id="result_text">{lis}</div>
                <br />
            </div>
        </>
    );
}

export default MovieBoard;



