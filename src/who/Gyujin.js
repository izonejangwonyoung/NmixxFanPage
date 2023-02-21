import styles from "./Haewon.module.css"
import haewon_img from "../gyujin.jpg"
import {useRef, useState} from "react";
import {FaHeartBroken, FaRegHeart} from "react-icons/fa";
import data from "./data.json"
import {GiShatteredHeart} from "react-icons/gi";
import {Button, Overlay, OverlayTrigger, Tooltip} from "react-bootstrap";

function Gyujin() {
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
            <h4 className={styles.nameplace}>Who Is Gyujin?</h4>
            <div className={styles.wrap}>
                <img className={styles.img_haewon} src={haewon_img} alt=""/>
                <table className={styles.table}>
                    <tr>
                        <td className={styles.td}>이름</td>
                        <td className={styles.td}>장규진</td>
                    </tr>
                    <tr>
                        <td className={styles.td}>
                            나이
                        </td>
                        <td className={styles.td}>
                            2006.05.26({nowYear - 2006}세)
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
                <p>대한민국의 가수. JYP엔터테인먼트 소속 6인조 걸그룹 NMIXX의 막내이며 보컬, 랩, 댄스와 안무 단장을 맡고 있다.
                </p>
                <h2>데뷔 전</h2>
                <p>NMIXX는 공식적인 포지션은 없지만 보컬, 비주얼, 랩, 댄스 등 여러 면에서 능력치가 뛰어나다.

                    갓 18살이 된 막내임에도 불구하고 흠잡을 곳 없는 NMIXX의 대표적인 올라운더 멤버이다. 특히 DICE에선 도입부부터 임팩트 있는 파트를 맡아 사실상 센터라는 의견이 많다.

                    또한 댄스라인이고 막내임에도 안무단장까지 담당하는 것을 보면 사실상 메인댄서라고도 볼 수 있다.
                </p>

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

export default Gyujin;