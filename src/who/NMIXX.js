import styles from "./NMIXX.module.css"
import nmixx_mainpage from "../nmixx_mainpage.jpg"
function NMIXX() {

    return (

        <div>
            <h2 className={styles.main_title}>Who Is NMIXX?</h2>
            <div className={styles.description}>
                NMIXX는 now, new, next, 미지수 n을 뜻하는 문자 'N'과 조합,
                다양성을 상징하는 단어 'MIX'의 합성어로서 '새로운 시대를 책임질 최상의 조합'
                이라는 의미를 갖고 있다.
            </div>
            <img className={styles.main_img} src={nmixx_mainpage} alt="sds" />
        </div>
    )
}

export default NMIXX;