import styles from "./Haewon.module.css"
import haewon_img from "../jiwoo.jpg"
import {useRef, useState} from "react";
import {FaHeartBroken, FaRegHeart} from "react-icons/fa";
import data from "./data.json"
import {GiShatteredHeart} from "react-icons/gi";
import {Button, Overlay, OverlayTrigger, Tooltip} from "react-bootstrap";

function Jiwoo() {
    let now = new Date();
    let nowYear = now.getFullYear();
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            현재 하트 수: {count}
        </Tooltip>)

    let [count, setCount] = useState(0);
    console.log(data.heartCount[0].count)
    console.log(count)
    return (

        <div>
            <h4 className={styles.nameplace}>Who Is Jiwoo?</h4>
            <div className={styles.wrap}>
                <img className={styles.img_haewon} src={haewon_img} alt=""/>
                <table className={styles.table}>
                    <tr>
                        <td className={styles.td}>이름</td>
                        <td className={styles.td}>김지우</td>
                    </tr>
                    <tr>
                        <td className={styles.td}>
                            나이
                        </td>
                        <td className={styles.td}>
                            2005.04.13({nowYear - 2005}세)
                        </td>
                    </tr>
                </table>
            </div>
            <div style={{textAlign:"center"}}>
                <button className={styles.button}><ShowHeart count={count} /></button>
                <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 100, hide: 200 }}
                    overlay={renderTooltip}
                >
                    <Button className={styles.button} variant="outline-primary" onClick={()=>{setCount(count+1);}}rstyle={{marginLeft:"30px"}}>+1</Button>
                </OverlayTrigger>
                <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 100, hide: 200 }}
                    overlay={renderTooltip}
                >
                    <Button className={styles.button} variant="outline-danger" onClick={()=>setCount(count-1)}>-1</Button>
                </OverlayTrigger>


            </div>
            <div className={styles.main_text}>

                <h2>개요</h2>
                <p>JYP엔터테인먼트 소속 7인조 걸그룹 NMIXX의 멤버이며, 리더와 보컬을 맡고 있다.</p>
                <h2>데뷔 전</h2>
            <p>2018년 만 13세에 JYP 엔터테인먼트에 입사했다.
                댄스 학원 채널에 모모랜드의 뿜뿜 Dance cover 영상이 올라와있다</p>
            </div>
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
        return (<GiShatteredHeart/>)
    }


}

export default Jiwoo;