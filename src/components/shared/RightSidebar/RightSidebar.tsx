import RenderTag from "@/components/shared/cards/RenderTag";
import QuestionSmallCard from "@/components/shared/cards/QuestionSmallCard";
import PostSmallCard from "@/components/shared/cards/PostSmallCard";

const topPosts: any = [
  {
    id: 1,
    title:
      "Mastering Smart Contract Development with Node.js: Tools, Security, and Best Practices",
    image:
      "https://www.plusdev.net/_next/image?url=https%3A%2F%2Fplusdev-net.s3.eu-central-1.amazonaws.com%2Fbd1c1480201129be867adf88effb1458_nodejs-smart-contracts.jpg&w=640&q=60",
    url: "/posts/test",
  },
  {
    id: 2,
    title:
      "Asynchronous Programming in Node.js: Callbacks, Promises, and Async/Await Explained",
    image:
      "https://www.plusdev.net/_next/image?url=https%3A%2F%2Fplusdev-net.s3.eu-central-1.amazonaws.com%2Fbd1c1480201129be867adf88effb1458_nodejs-smart-contracts.jpg&w=640&q=60",
    url: "/posts/test",
  },
  {
    id: 3,
    title:
      "Node.js vs. Golang: An In-Depth Comparison of the Latest Versions in 2024",
    image:
      "https://www.plusdev.net/_next/image?url=https%3A%2F%2Fplusdev-net.s3.eu-central-1.amazonaws.com%2Fbd1c1480201129be867adf88effb1458_nodejs-smart-contracts.jpg&w=640&q=60",
    url: "/posts/test",
  },
  {
    id: 4,
    title:
      "Mastering Concurrency in Go: A Comprehensive Guide to Goroutines and Channels",
    image:
      "https://www.plusdev.net/_next/image?url=https%3A%2F%2Fplusdev-net.s3.eu-central-1.amazonaws.com%2Fbd1c1480201129be867adf88effb1458_nodejs-smart-contracts.jpg&w=640&q=60",
    url: "/posts/test",
  },
];

const hotQuestions: any = [
  {
    id: 1,
    title:
      "Is there a way in Golang to define a generic function type with varargs that can take any function as input?",
    url: "/questions/test",
  },
  {
    id: 2,
    title: "How get access the unmodified body of a Fastify request",
    url: "/questions/test",
  },
  {
    id: 3,
    title: "Unable to download generated file using node js to pc",
    url: "/questions/test",
  },
];

const popularTags: any = [
  {
    id: 1,
    title: "Node.js",
    count: 10,
    url: "/tags/test",
  },
  {
    id: 2,
    title: "Vue.js",
    count: 20,
    url: "/tags/test",
  },
  {
    id: 3,
    title: "Angular",
    count: 1,
    url: "/tags/test",
  },
  {
    id: 4,
    title: "React",
    count: 13,
    url: "/tags/test",
  },
  {
    id: 5,
    title: "Golang",
    count: 8,
    url: "/tags/test",
  },
];

const RightSidebar = () => {
  return (
    <section
      className="custom-scrollbar sticky right-0 top-0 flex
    h-screen w-[350px] flex-col overflow-y-auto border-l
    border-zinc-200 bg-zinc-50 dark:border-zinc-900 dark:bg-zinc-900
    p-6 pt-36 max-xl:hidden"
    >
      <div>
        <h3 className="h3-bold text-zinc-900 dark:text-zinc-200">Top Posts</h3>

        <div className="mt-5 flex w-full flex-col gap-[30px]">
          {topPosts.map((post) => (
            <PostSmallCard
              key={post.id}
              id={post.id}
              title={post.title}
              url={post.url}
              image={post.image}
            />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-zinc-900 dark:text-zinc-200">
          Top Questions
        </h3>

        <div className="mt-5 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <QuestionSmallCard
              key={question.id}
              id={question.id}
              title={question.title}
              url={question.url}
            />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-zinc-900 dark:text-zinc-200">
          Popular Tags
        </h3>

        <div className="mt-3 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              id={tag.id}
              title={tag.title}
              url={tag.url}
              key={tag.id}
              showCount={true}
              totalCount={tag.count}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;