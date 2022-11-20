import styles from "./Board.module.css"
import {useState} from "react";
import Table from 'react-bootstrap/Table';

function Board() {

    const [comment, setComment] = useState(["hello", "hi"]);
    const [inputValue, setInputValue] = useState('');


    function displayText(e) {
        setInputValue(e.target.value)
    }

    function addComment() {
        let copy = [...comment];
        copy.unshift(inputValue)
        setComment(copy)
    }



    return (
        <div style={{backgroundColor: "#E5E5E5"}}>
            <h2>한 줄 소감</h2>

            <input type="text" onChange={displayText} style={{backgroundColor: "white"}}/>
            <button type={"submit"} onClick={addComment}>완료</button>
            <h4>{inputValue}</h4>

            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>delete</th>
                </tr>
                </thead>
                <tbody>
                {comment.map(function (a, i) {

                    return (
                        <tr>
                            <td>{comment[i]}</td>
                            <td onClick={ ()=>{
                                let copy=[...comment];
                                copy.splice(i,1);
                                setComment(copy)
                                }}
                            > row 삭제하기
                            </td>
                        </tr>

                    )
                })}
                </tbody>
            </Table>

        </div>
    );
}

export default Board;