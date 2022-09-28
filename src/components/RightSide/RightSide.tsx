import Home from "../../assets/images/home.png";
import Notificaton from "../../assets/images/notification.png";
import Comment from "../../assets/images/comment.png";

import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
import styles from "./RightSide.module.scss";

import { useState } from "react";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function RightSide() {
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  return (
    <>
      <div className={cx("RightSide")}>
        <div className={cx("navIcons")}>
          <img src={Home} alt="home" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19.9,12.66a1,1,0,0,1,0-1.32L21.18,9.9a1,1,0,0,0,.12-1.17l-2-3.46a1,1,0,0,0-1.07-.48l-1.88.38a1,1,0,0,1-1.15-.66l-.61-1.83A1,1,0,0,0,13.64,2h-4a1,1,0,0,0-1,.68L8.08,4.51a1,1,0,0,1-1.15.66L5,4.79A1,1,0,0,0,4,5.27L2,8.73A1,1,0,0,0,2.1,9.9l1.27,1.44a1,1,0,0,1,0,1.32L2.1,14.1A1,1,0,0,0,2,15.27l2,3.46a1,1,0,0,0,1.07.48l1.88-.38a1,1,0,0,1,1.15.66l.61,1.83a1,1,0,0,0,1,.68h4a1,1,0,0,0,.95-.68l.61-1.83a1,1,0,0,1,1.15-.66l1.88.38a1,1,0,0,0,1.07-.48l2-3.46a1,1,0,0,0-.12-1.17ZM18.41,14l.8.9-1.28,2.22-1.18-.24a3,3,0,0,0-3.45,2L12.92,20H10.36L10,18.86a3,3,0,0,0-3.45-2l-1.18.24L4.07,14.89l.8-.9a3,3,0,0,0,0-4l-.8-.9L5.35,6.89l1.18.24a3,3,0,0,0,3.45-2L10.36,4h2.56l.38,1.14a3,3,0,0,0,3.45,2l1.18-.24,1.28,2.22-.8.9A3,3,0,0,0,18.41,14ZM11.64,8a4,4,0,1,0,4,4A4,4,0,0,0,11.64,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,11.64,14Z"></path>
          </svg>
          <img src={Notificaton} alt="notification" />
          <img src={Comment} alt="comment" />
        </div>
        <TrendCard />
        <button
          className={cx("button", "share-button")}
          onClick={() => setModalOpened(true)}
        >
          Share
        </button>
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
      </div>
    </>
  );
}
export default RightSide;
