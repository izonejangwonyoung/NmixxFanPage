import styles from "./Haewon.module.css"
import haewon_img from "../bae.jpg"
import {useRef, useState} from "react";
import {FaHeartBroken, FaRegHeart} from "react-icons/fa";
import data from "./data.json"
import {GiShatteredHeart} from "react-icons/gi";
import {Button, Overlay, OverlayTrigger, Tooltip} from "react-bootstrap";

function Bae() {
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
            <h4 className={styles.nameplace}>Who Is Bae?</h4>
            <div className={styles.wrap}>
                <img className={styles.img_haewon} src={haewon_img} alt=""/>
                <table className={styles.table}>
                    <tr>
                        <td className={styles.td}>이름</td>
                        <td className={styles.td}>배진솔</td>
                    </tr>
                    <tr>
                        <td className={styles.td}>
                            나이
                        </td>
                        <td className={styles.td}>
                            2004.12.28({nowYear - 2004}세)
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
                <p>대한민국의 가수. JYP엔터테인먼트 소속 6인조 걸그룹 NMIXX의 멤버이며 보컬과 개그, 댄스를 맡고 있다.
                </p>
                <h2>데뷔 전</h2>
                <p> 2018년 길거리 캐스팅으로 JYP에 입사했다. 팀에서 유일한 캐스팅 출신이다. 길거리 캐스팅 썰
                    2021년 10월 8일에 퍼포먼스 영상이 공개되었다.
                    <br></br>
                    2021년 10월 15일 오후 8시 유튜브 게릴라 라이브를 진행했다.</p>

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

export default Bae;