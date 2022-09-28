import styles from "./Posts.module.scss";
import Post from "../Post/Post";
import { PostType } from "../../data/PostsList";

import { useAppSelector } from "../../app/hook";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Posts() {
  let postList = useAppSelector((state) => state.posts);
  localStorage.setItem("postList", JSON.stringify(postList));

  const posts = [...postList];

  return (
    <>
      <div className={cx("Posts")}>
        {posts &&
          posts.reverse().map((post: PostType, id) => (
            <Post
              key={id}
              id={post.id}
              name={post.name}
              img={post.img}
              desc={post.desc}
              likes={post.likes}
              liked={post.liked}
            />
          ))}
      </div>
    </>
  );
}
export default Posts;
