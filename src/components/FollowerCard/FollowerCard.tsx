import styles from "./FollowerCard.module.scss";
import { FollowersList } from "../../data/FollowersList";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function FollowerCard() {
  return (
    <>
      <div className={cx("FollowerCard")}>
        <h3 className={cx('title')}>Who is following you</h3>

        {FollowersList.map((follower, id) => {
          return (
            <div className={cx('follower')} key={id}>
              <div>
                <img src={follower.img} alt="" className={cx('followerImage')} />
                <div className={cx('name')}>
                  <span>{follower.name}</span>
                  <span>@{follower.username}</span>
                </div>
              </div>
              <button className={cx("button","fc-button")}>Follow</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default FollowerCard;
