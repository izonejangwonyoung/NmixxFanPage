import styles from "./Haewon.module.css"
import haewon_img from "../haewon.jpg"
import {useState} from "react";
import {FaHeartBroken, FaRegHeart, FaRegKissWinkHeart} from "react-icons/fa";
import data from "./data.json"

function Haewon() {
    let now = new Date();
    let nowYear = now.getFullYear();
    let [count, setCount] = useState(0);
    console.log(data.heartCount[0].count)
    console.log(count)
    return (

        <div>
            <h4>Who is Haewon?</h4>
            <img className="img_haewon" src={haewon_img} alt=""/>
            <table>
                <tr>
                    <td>이름</td>
                    <td>오해원</td>
                </tr>
                <tr>
                    <td>
                        나이
                    </td>
                    <td>
                        2003.02.25({nowYear - 2003}세)
                    </td>
                </tr>
            </table>
            <button><ShowHeart count={count}/></button>
            <button onClick={()=>setCount(count+1)} style={{marginLeft:"30px"}}>+1</button>
            <button onClick={()=>setCount(count-1)}>-1</button>
            <h4>{count}</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet culpa cupiditate, debitis dolor dolores,
                doloribus earum eius est exercitationem facilis impedit iste laboriosam laborum maiores molestiae
                perspiciatis repellendus velit voluptas.</p>
        </div>

    )

}

function ShowHeart(props) {
    let count = props.count;
    if (count > 0) {
        return (
            <FaRegHeart/>
        )
    }
    if (count === 0) {
        return (<FaHeartBroken/>

        )
    }

    if (count < 0) {
        return (<FaRegKissWinkHeart/>)
    }


}

export default Haewon;