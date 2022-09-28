import postPic1 from "../assets/images/postpic1.jpg";
import postPic2 from "../assets/images/postpic2.jpg";
import postPic3 from "../assets/images/postpic3.jpg";


export interface PostType {
  id?: number;
  img: string;
  name: string,
  desc: string;
  likes: number;
  liked: boolean;
}

export const PostsList: Array<PostType> = [
  {
    id: 1,
    name: 'Tzuyu',
    img: postPic1,
    desc: "Happy New Year all friends! #2023",
    likes: 200,
    liked: true,
  },
  {
    id: 2,
    name: 'Lannn',
    img: postPic2,
    desc: "Party time :)",
    likes: 20,
    liked: false,
  },
  {
    id: 3,
    name: 'Jisoo',
    img: postPic3,
    desc: "At Archery Festival",
    likes: 0,
    liked: false,
  },
];
