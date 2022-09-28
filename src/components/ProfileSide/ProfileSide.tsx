import FollowerCard from "../FollowerCard/FollowerCard"
import InfoCard from "../InfoCard/InfoCard"
import LogoSearch from "../LogoSearch/LogoSearch"
import styles from "./ProfileSide.module.scss"

import classNames from "classnames/bind"
const cx = classNames.bind(styles)

function ProfileSide() {
    return(
        <>
        <div className={cx('ProfileSide')}>
            <LogoSearch/>
            <InfoCard/>
            <FollowerCard/>
        </div>
        </>
    )
}
export default ProfileSide