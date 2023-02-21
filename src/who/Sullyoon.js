import styles from "./Haewon.module.css"
import haewon_img from "../Sullyoon.jpg"
import {useRef, useState} from "react";
import {FaHeartBroken, FaRegHeart} from "react-icons/fa";
import data from "./data.json"
import {GiShatteredHeart} from "react-icons/gi";
import {Button, Overlay, OverlayTrigger, Tooltip} from "react-bootstrap";

function Sullyoon() {
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
            <h4 className={styles.nameplace}>Who Is Sullyoon?</h4>
            <div className={styles.wrap}>
                <img className={styles.img_haewon} src={haewon_img} alt=""/>
                <table className={styles.table}>
                    <tr>
                        <td className={styles.td}>이름</td>
                        <td className={styles.td}>설윤아
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.td}>
                            나이
                        </td>
                        <td className={styles.td}>
                            2003.02.25({nowYear - 2003}세)
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
                <p>2017년 열린 'JYP 걸그룹 오디션'에 합격해 입사했다.
                    오디션 곡은 비욘세의 Halo라고 한다.
                    쇼케이스 후기마다 호평이 가득해 JYP 팬들 사이에서 유명했던 연습생이었다.<br/>
                    트와이스 나연도, 연습생 월말 평가를 보러 갔을 때 JYP 직원이 해원을 노래도 굉장히 잘 하고 춤도 잘 추는 친구라며 이야기해주었는데 <br/>그 때 해원이 노래를 불렀던 게 기억에 남는다고 언급하기도 했다.
                    2021년 11월 5일 퍼포먼스 영상이 공개되었고, 11월 12일 유튜브 게릴라 라이브를 진행하였다. 11월 26일 릴리와의 듀엣 영상이 공개되었다. <br/>2022년, 약 5년간의 연습생 생활 끝에 데뷔하게 되었다.</p>

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

export default Sullyoon;