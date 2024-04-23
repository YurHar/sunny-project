/* eslint-disable @typescript-eslint/no-explicit-any */

import { cn, formatNumber } from "@/lib/utils";
import { Link } from "react-router-dom";
import RenderTag from "./RenderTag";
import Metric from "./Metric";

interface Props {
  id: string;
  title: string;
  url: string;
  image: string;
  createdAt: string;
  commentsCount: number;
  viewsCount: number;
  author: any;
  tags: any;
  upvotesCount: number;
  classes?: string;
}

const PostCard = ({
  id,
  title,
  url,
  image,
  createdAt,
  commentsCount,
  viewsCount,
  author,
  tags,
  upvotesCount,
  classes,
}: Props) => {
  return (
    <div
      className={cn("bg-zinc-100 dark:bg-zinc-900 rounded-[10px] p-9", classes)}
    >
      <Link to={url}>
        <div className="relative mb-4 h-[200px] w-full overflow-hidden rounded-[10px] sm:h-[250px]">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-all duration-500 hover:scale-105"
          />
        </div>
      </Link>

      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <time
            className="subtle-regular line-clamp-1 text-zinc-400 dark:text-zinc-700 hidden"
            dateTime={createdAt}
          >
            {createdAt}
          </time>

          <Link to={url}>
            <h3 className="sm:h3-semibold line-clamp-2 text-zinc-900 dark:text-zinc-200 base-medium flex-1 transition-colors hover:text-red-500 dark:hover:text-red-500">
              {title}
            </h3>
          </Link>
        </div>
      </div>

      <div className="mt-3.5 flex w-full flex-wrap gap-2">
        {tags.map((tag: any) => (
          <RenderTag key={tag.id} id={tag.id} title={tag.name} url={tag.url} />
        ))}
      </div>

      <div className="mt-6 flex flex-wrap w-full items-center justify-between gap-3">
        <Metric
          imgUrl={author.image}
          value={author.name}
          title={`crated ${createdAt}`}
          isAuthor
          href="/"
          textStyles="body-semibold"
        />

        <Metric
          value={formatNumber(upvotesCount)}
          type="like"
          title=" Votes"
          textStyles="small-medium"
        />

        <Metric
          value={formatNumber(commentsCount)}
          type="comment"
          title=" Comments"
          textStyles="small-medium"
        />

        <Metric
          value={formatNumber(viewsCount)}
          type="view"
          title=" Views"
          textStyles="small-medium"
        />
      </div>
    </div>
  );
};

export default PostCard;