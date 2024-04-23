import { Button } from "@/components/ui/button";
import { LucideArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PostCard from "@/components/shared/cards/PostCard";
import UserCard from "@/components/shared/cards/UserCard";

const posts = [
  {
    id: "1",
    title: "The best way to learn new technologies",
    url: "/posts/1",
    image: "https://picsum.photos/200/300",
    createdAt: "1 minute ago",
    commentsCount: 0,
    viewsCount: 0,
    author: {
      id: "1",
      name: "John Doe",
      image: "https://picsum.photos/200/300",
    },
    tags: [
      {
        id: "1",
        name: "Vue.js",
        url: "/tags/1",
      },
      {
        id: "2",
        name: "Javascript",
        url: "/tags/2",
      },
    ],
    upvotesCount: 0,
  },
  {
    id: "2",
    title: "New features in Vue 3.0",
    url: "/posts/1",
    image: "https://picsum.photos/200/300",
    createdAt: "2 days ago",
    commentsCount: 3,
    viewsCount: 100,
    author: {
      id: "1",
      name: "John Doe",
      image: "https://picsum.photos/200/300",
    },
    tags: [
      {
        id: "1",
        name: "Vue.js",
        url: "/tags/1",
      },
      {
        id: "2",
        name: "Javascript",
        url: "/tags/2",
      },
    ],
    upvotesCount: 1,
  },
];

const users = [
  {
    id: "1",
    name: "John Doe",
    nickname: "John001",
    img: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
    tags: [
      {
        id: "1",
        name: "Node.js",
        url: "/tags/test",
      },
    ],
  },
  {
    id: "2",
    name: "Alex",
    nickname: "Alex001",
    img: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
    tags: [
      {
        id: "1",
        name: "Node.js",
        url: "/tags/test",
      },
      {
        id: "2",
        name: "Javascript",
        url: "/tags/2",
      },
    ],
  },
  {
    id: "3",
    name: "Sam",
    nickname: "Sam001",
    img: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
    tags: [],
  },
]

const MainPage = () => {
  return (
    <>
      <div className="mt-4 flex flex-col-reverse w-full justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-zinc-900 dark:text-zinc-100">
          <span className="md:h1-bold sm:h2-bold xs:h2-bold">
            Welcome to
            <span className="text-red-500"> PlusDev</span>
            <span className="text-zinc-600">.NET</span>
          </span>

          <span className="flex fobt-space-grotesk-normal text-base font-normal uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
            The best place to learn and share
          </span>
        </h1>

        <div className="flex gap-4">
          <Link to="/create-post" className="flex justify-end">
            <Button className="btn-secondary min-h-[46px] px-4 py-3 text-zinc-50 max-sm:min-w-[150px]">
              Create a Post
            </Button>
          </Link>

          <Link to="/ask-question" className="flex justify-end">
            <Button className="btn-tertiary min-h-[46px] px-4 py-3 text-zinc-50 max-sm:min-w-[150px]">
              Ask a Question
            </Button>
          </Link>
        </div>
      </div>

      <div className="col-span-2 mt-12">
        <Link to="/posts" className="flex justify-end gap-3 text-sm font-bold uppercase text-red-500 hover:text-red-400">
          View all posts <LucideArrowRight className="w-5 h-5" />
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        {posts.map((item) => (
          <PostCard
            key={item.id}
            id={item.id}
            title={item.title}
            url={item.url}
            image={item.image}
            createdAt={item.createdAt}
            commentsCount={item.commentsCount}
            viewsCount={item.viewsCount}
            author={item.author}
            tags={item.tags}
            upvotesCount={item.upvotesCount}
          />
        ))}
      </div>

      <section className="mt-20">
        <div className="col-span-2">
          <Link to={"/users"} className="flex justify-end gap-3 text-sm font-bold uppercase text-red-500 hover:text-red-400">
            View all Author <LucideArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap justify-around gap-4">
          {users.map((user) => (
          <UserCard 
            key={user.id}
            id={user.id}
            name={user.name}
            nickname={user.nickname}
            image={user.img}
            tags={user.tags}
          />
        ))}
        </div>
      </section>
    </>
  );
};

export default MainPage;
