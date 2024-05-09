import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const Card = ({ post }) => {
  return (
    <Link
      to={`posts/${post.id}`}
      className="bg-slate-900 text-slate-100 flex flex-col mt-4 sm:m-5 rounded-xl p-4 gap-3 sm:w-[20%] w-[80%] items-center"
    >
      <div>{post.title}</div>
      <img src={post.img} alt={post.desc} className="w-full rounded-xl" />
      <div className="line-clamp-3 font-mono">{post.desc}</div>
      <div>
        <button className="bg-slate-100 hover:scale-125 text-slate-900 px-3 py-1 rounded-full">
          Read More...
        </button>
        <div className="hidden">{post.longDesc}</div>
      </div>
    </Link>
  );
};

export default Card;
