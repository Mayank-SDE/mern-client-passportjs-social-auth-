import Card from '../components/Card';
import { posts } from '../data/posts';
const Home = () => {
  return (
    <div className="container flex justify-center items-center sm:flex-row flex-col flex-wrap">
      {posts.map((post) => {
        return <Card key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Home;
