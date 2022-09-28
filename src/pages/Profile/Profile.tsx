import PostSide from "../../components/PostSide/PostSide";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";
import PostShare from "../../components/PostShare/PostShare";

import styles from "./Profile.module.scss";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Profile() {
  return (
    <>
      <div className={cx("Profile")}>
        <ProfileSide />
        <div className={cx("Profile-center")}>
          <ProfileCard />
          <PostShare />
          <PostSide />
        </div>
        <RightSide />
      </div>
    </>
  );
}
export default Profile;
