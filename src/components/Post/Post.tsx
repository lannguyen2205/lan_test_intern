import unlike from "../../assets/images/unlike.png";
import liked from "../../assets/images/liked.png";
import Comment from "../../assets/images/comment.png";
import Share from "../../assets/images/share.png";

import styles from "./Post.module.scss";
import { PostType } from "../../data/PostsList";
import { useState } from "react";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const Post: React.FC<PostType> = (prop) => {

  const [isliked, setIsLiked] = useState<boolean>(prop.liked);
  const [numLike, setNumLike] = useState<number>(prop.likes)
  const onClickLiked = () => {
    setNumLike(isliked ? numLike -1 : numLike+1)
    setIsLiked(!isliked);
  }

  return (
    <>
      <div className={cx("Post")}>
        <img src={prop?.img} alt="" />

        <div className={cx("postReact")}>
          <img
            src={isliked ? liked : unlike}
            alt="like"
            onClick={onClickLiked}
          />
          <img src={Comment} alt="" />
          <img src={Share} alt="" />
        </div>

        <span style={{ color: "var(--gray)", fontSize: "12px" }}>
          {numLike} likes
        </span>

        <div className={cx("detail")}>
          <span>
            <b>{prop.name}</b>
          </span>
          <span>{prop.desc}</span>
        </div>
      </div>
    </>
  );
};
export default Post;
