import { useParams } from 'react-router-dom';
import { posts } from '../data/posts';
const Post = () => {
  const { id } = useParams();
  const post = posts[id];
  console.log(id);
  return (
    <div className="container">
      <div className="flex w-full sm:m-4 mt-4 justify-between  px-24 flex-col sm:flex-row items-center">
        <img
          src={post.img}
          alt={post.desc}
          className="w-full sm:w-[30%] rounded-xl"
        />

        <div className="flex w-full sm:w-[40%] sm:m-5 flex-col justify-center sm:pl-8 items-start gap-4 sm:gap-8">
          <div className="font-bold mx-auto">{post.title}</div>
          <div className="font-semi-bold text-wrap text-sm">{post.desc}</div>
          <div className="font-mono text-wrap text-sm">{post.longDesc}</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
