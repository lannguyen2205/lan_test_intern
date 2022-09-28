import Cover from "../../assets/images/cover.jpg";
import Avatar from "../../assets/images/avatar.jpg";

import styles from "./ProfileCard.module.scss";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function ProfileCard() {
  const ProfilePage = true;
  return (
    <>
      <div className={cx("ProfileCard")}>
        <div className={cx("ProfileImages")}>
          <img src={Cover} alt="cover" className={cx("CoverImage")} />
          <img src={Avatar} alt="avatar" className={cx("AvatarImage")} />
        </div>

        <div className={cx("ProfileName")}>
          <span>Lan Nguyen</span>
          <span>Frontend Developer</span>
        </div>

        <div className={cx("followStatus")}>
          <hr />
          <div>
            <div className={cx("follow")}>
              <span>6,890</span>
              <span>Followings</span>
            </div>
            <div className={cx("verticalLine")}></div>
            <div className={cx("follow")}>
              <span>1</span>
              <span>Followers</span>
            </div>

            {ProfilePage && (
              <>
                <div className={cx("verticalLine")}></div>
                <div className={cx("follow")}>
                  <span>3</span>
                  <span>Posts</span>
                </div>
              </>
            )}
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}
export default ProfileCard;
