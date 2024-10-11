import Link from 'next/link';

interface Post {
  id: string;
  caption: string;
  profiles: {
    display_name: string;
    profile_img: string;
    username: string;
  };
}

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  const user = post.profiles;

  return (
    <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow">
      <div className="flex items-center">
        <img
          src={user.profile_img}
          alt={`${user.display_name}'s profile`}
          className="h-10 w-10 rounded-full"
        />
        <Link href={`post/${post.id}`}>
          <div className="ml-3 flex flex-col">
            <p className="font-semibold">{post.caption}</p>
            <p className="text-gray-500">@{user.username}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
