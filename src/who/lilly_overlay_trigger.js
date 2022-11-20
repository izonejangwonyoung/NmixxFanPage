import styles from "./Liily.module.css"
import {Button, Overlay, OverlayTrigger, Tooltip} from "react-bootstrap";


function LillyOverlayTrigger(props) {
    return (
        <OverlayTrigger
            placement="bottom"
            delay={{show: props.show, hide: props.hide}}
            overlay={props.overlay}
        >
            <Button className={styles.button} variant="outline-primary" onClick={props.click}
                    style={{marginLeft: "30px"}}>+1</Button>
        </OverlayTrigger>
    )
}

export default LillyOverlayTrigger;