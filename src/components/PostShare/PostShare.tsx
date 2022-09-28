import Avatar from "../../assets/images/avatar.jpg";
import styles from "./PostShare.module.scss";
import { useEffect, useRef, useState } from "react";
import { PostType } from "../../data/PostsList";
import { useAppDispatch } from "../../app/hook";
import { addPost } from "../../app/postSlice";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function PostShare() {
  const dispatch = useAppDispatch();

  const [image, setImage] = useState<File>();
  const imageRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string>("");
  const [textDecs, setTextDesc] = useState<string>("");

  const onTextInputChange = (event: any) => {
    setTextDesc(event.target.value);
  };

  const onChangeImage = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      if (file) {
        setImage(file);
      } else {
        setImage(undefined);
      }
    }
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview("");
    }
  }, [image]);

  const handleSharePost = () => {
    const PostItem: PostType = {
      name: "Lan Nguyen",
      img: preview,
      desc: textDecs,
      likes: 0,
      liked: false,
    };

    dispatch(addPost(PostItem));

    setTextDesc("");
    setImage(undefined);
  };

  return (
    <>
      <div className={cx("PostShare")}>
        <img src={Avatar} alt="" />
        <div>
          <input
            type="text"
            placeholder="What's happening"
            value={textDecs}
            onChange={onTextInputChange}
            required
          />
          <div className={cx("postOptions")}>
            <div
              className={cx("option")}
              style={{ color: "var(--photo)" }}
              onClick={() => imageRef.current?.click()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a2.81,2.81,0,0,0,.49-.05l.3-.07.07,0h0l.05,0,.37-.14.13-.07c.1-.06.21-.11.31-.18a3.79,3.79,0,0,0,.38-.32l.07-.09a2.69,2.69,0,0,0,.27-.32l.09-.13a2.31,2.31,0,0,0,.18-.35,1,1,0,0,0,.07-.15c.05-.12.08-.25.12-.38l0-.15A2.6,2.6,0,0,0,22,19V5A3,3,0,0,0,19,2ZM5,20a1,1,0,0,1-1-1V14.69l3.29-3.3h0a1,1,0,0,1,1.42,0L17.31,20Zm15-1a1,1,0,0,1-.07.36,1,1,0,0,1-.08.14.94.94,0,0,1-.09.12l-5.35-5.35.88-.88a1,1,0,0,1,1.42,0h0L20,16.69Zm0-5.14L18.12,12a3.08,3.08,0,0,0-4.24,0l-.88.88L10.12,10a3.08,3.08,0,0,0-4.24,0L4,11.86V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1ZM13.5,6A1.5,1.5,0,1,0,15,7.5,1.5,1.5,0,0,0,13.5,6Z"></path>
              </svg>
              Photo
            </div>
            <div className={cx("option")} style={{ color: "var(--video)" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16,10.27,11,7.38A2,2,0,0,0,8,9.11v5.78a2,2,0,0,0,1,1.73,2,2,0,0,0,2,0l5-2.89a2,2,0,0,0,0-3.46ZM15,12l-5,2.89V9.11L15,12ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path>
              </svg>
              Video
            </div>{" "}
            <div className={cx("option")} style={{ color: "var(--location)" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18,4.48a8.45,8.45,0,0,0-12,12l5.27,5.28a1,1,0,0,0,1.42,0L18,16.43A8.45,8.45,0,0,0,18,4.48ZM16.57,15,12,19.59,7.43,15a6.46,6.46,0,1,1,9.14,0ZM9,7.41a4.32,4.32,0,0,0,0,6.1,4.31,4.31,0,0,0,7.36-3,4.24,4.24,0,0,0-1.26-3.05A4.3,4.3,0,0,0,9,7.41Zm4.69,4.68a2.33,2.33,0,1,1,.67-1.63A2.33,2.33,0,0,1,13.64,12.09Z"></path>
              </svg>
              Location
            </div>{" "}
            <div className={cx("option")} style={{ color: "var(--shedule)" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12,14a1,1,0,1,0-1-1A1,1,0,0,0,12,14Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,14Zm-5,4a1,1,0,1,0-1-1A1,1,0,0,0,12,18Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,18ZM7,14a1,1,0,1,0-1-1A1,1,0,0,0,7,14ZM19,4H18V3a1,1,0,0,0-2,0V4H8V3A1,1,0,0,0,6,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V10H20ZM20,8H4V7A1,1,0,0,1,5,6H19a1,1,0,0,1,1,1ZM7,18a1,1,0,1,0-1-1A1,1,0,0,0,7,18Z"></path>
              </svg>
              Shedule
            </div>
            <button
              className={cx("button", "ps-button")}
              onClick={handleSharePost}
            >
              Share
            </button>
            <div style={{ display: "none" }}>
              <input
                type="file"
                name="myImage"
                ref={imageRef}
                onChange={onChangeImage}
              />
            </div>
          </div>
          {image && (
            <div className={cx("previewImage")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                onClick={() => setImage(undefined)}
              >
                <path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
              </svg>

              <img src={preview} alt="preview" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default PostShare;
