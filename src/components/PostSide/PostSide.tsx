import styles from "./PostSide.module.scss"
import Posts from "../Posts/Posts"

import classNames from "classnames/bind"
const cx = classNames.bind(styles)

function PostSide () {
    return(
        <div className={cx('PostSide')}>
            <Posts/>
        </div>
    )
}
export default PostSide