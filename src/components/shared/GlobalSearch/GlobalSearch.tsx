import { Input } from "@/components/ui/input";
import { LucideHelpCircle, LucideSearch } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import PostSmallCard from "../cards/PostSmallCard";
import { useState } from "react";

const popularTags: any = [
    {
        id: 1,
        title: "Post",
        url: "post",
    },
    {
        id: 2,
        title: "Question",
        url: "question",
    },
    {
        id: 3,
        title: "User",
        url: "user",
    },
    {
        id: 4,
        title: "Tag",
        url: "tag",
    },
];

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
        text:
            "Is there a way in Golang to define a generic function type with varargs that can take any function as input?",
        title: "Questions",
    },
    {
        id: 2,
        text: "How get access the unmodified body of a Fastify request",
        title: "Questions",
    },
    {
        id: 3,
        text: "Unable to download generated file using node js to pc",
        title: "Questions",
    },
];

const users: any = [
    {
        id: 1,
        name: "John Doe",
        type: "User",
        image: "https://media.istockphoto.com/id/1979360498/photo/african-american-female-tourist-walking-at-a-historical-city-street.webp?b=1&s=170667a&w=0&k=20&c=e8AeZiFv-0GT3VZewTH3fyaaryDop_eNE-GEYx_PwZk=",
    },
    {
        id: 2,
        name: "Alex",
        type: "User",
        image: "https://buffer.com/library/content/images/2023/10/free-images.jpg",
    },
    {
        id: 3,
        name: "Lidia",
        type: "User",
        image: "https://buffer.com/library/content/images/2023/10/free-images.jpg",
    },
];

const GlobalSearch = () => {
    const [show, setShow] = useState()


    const handleTagClick = (url) => {
        setShow(url)
    }

    return (
        <>
            <div className="relative w-full max-w-[600px] max-lg:ml-4 max-md:hidden">
                <div className="relative flex min-h-[46px] items-center gap-1 rounded-xl bg-slate-200 dark:bg-slate-800 px-4">
                    <LucideSearch className="h-6 w-6 cursor-pointer text-slate-400" />
                    <Input
                        type="text"
                        placeholder="Search Globally"
                        className="paragraph-regular placeholder:text-gray-400 outline-none bg-slate-200 dark:bg-slate-800 no-focus"
                    />
                </div>

                <div className="absolute top-full z-10 mt-3 w-full rounded-xl bg-slate-200 py-5 dark:bg-slate-800">
                    <div className="flex items-center gap-3 px-5">
                        <p>Types:</p>
                        {popularTags.map((tag) => (
                            <Badge
                                key={tag.id}
                                onClick={() => handleTagClick(tag.url)}
                                className="subtle-medium rounded-md bg-slate-300 px-4 py-2 uppercase
                                  text-zinc-500 hover:bg-indigo-400 hover:text-zinc-100 dark:bg-slate-800 dark:text-zinc-100 hover:dark:bg-indigo-400 cursor-pointer"
                            >
                                {tag.title}
                            </Badge>
                        ))}
                    </div>
                    <div className="my-5 h-[1px] bg-slate-400/50 dark:bg-slate-500/50"></div>
                    <h3 className="h3-bold text-zinc-900 dark:text-zinc-200 px-5">
                        Top Matches
                    </h3>
                    <div className="mt-5 flex w-full flex-col gap-[30px] px-5">
                        {show === "post" ? topPosts.map((post) => (
                            <PostSmallCard
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                url={post.url}
                                image={post.image}
                            />
                        )) : show === "question" ?
                            hotQuestions.map((question) => (
                                <div className="flex w-full cursor-pointer items-start gap-3 px-5 py-2.5 hover:bg-slate-100 dark:hover:bg-slate-700">
                                    <LucideHelpCircle className="mt-2 text-zinc-800 dark:text-zinc-200" />
                                    <span className="flex flex-col" key={question.id}>
                                        <span className="body-medium text-zinc-700 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400">
                                            {question.text}
                                        </span>
                                        <span className="small-medium mt-1 font-bold capitalize text-zinc-500 dark:text-zinc-400">
                                            {question.title}
                                        </span>
                                    </span>
                                </div>
                            )) : show === "user" ?
                                users.map((user) => (
                                    <div className="flex w-full cursor-pointer items-start gap-3 px-5 py-2.5 hover:bg-slate-100 dark:hover:bg-slate-700" key={user.id}>
                                        <img src={user.image} alt={user.name} className="h-10 w-12 rounded-md object-cover" />
                                        <span className="flex flex-col">
                                            <span className="body-medium line-clamp-1 text-zinc-800 dark:text-zinc-200">
                                                {user.name}
                                            </span>
                                            <span className="small-medium mt-1 font-bold capitalize text-zinc-500 dark:text-zinc-400">
                                                {user.type}
                                            </span>
                                        </span>
                                    </div>
                                )) : null
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default GlobalSearch;