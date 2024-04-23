import { Link } from "react-router-dom";
import RenderTag from "./RenderTag";
import { Badge } from "@/components/ui/badge";

type tags = {
  id: string;
  name: string;
  url: string;
};

interface Props {
  id: string;
  name: string;
  nickname: string;
  image: string;
  tags: tags[];
}

const UserCard = ({ id, name, nickname, image, tags }: Props) => {
  return (
    <div
      className="flex w-full flex-col items-center justify-center rounded-xl
    border bg-white p-8 hover:shadow-md max-sm:min-w-full xs:w-[260px] dark:border-transparent
    dark:bg-slate-700 dark:hover:bg-slate-900"
    >
      <Link to={`/profile/${nickname}`}>
        <img src={image} alt={name} className="rounded-full w-28 h-28" />
      </Link>

      <div className="mt-4 text-center">
        <h3
          className="h3-bold line-clamp-1 text-zinc-800 hover:text-red-500
        dark:text-zinc-200 dark:hover:text-red-400"
        >
          <Link to={`/profile/${nickname}`}>{name}</Link>
        </h3>

        <span
          className="body-regular text-zinc-500 mt-2 hover:text-red-400 dark:text-zinc-400
        dark:hover:text-red-300"
        >
          <Link to={`/profile/${nickname}`}>@{nickname}</Link>
        </span>
      </div>

      <div className="mt-5">
        {tags.length > 0 ? (
          <div className="flex items-center gap-2">
            {tags.map((tag) => (
              <RenderTag
                key={tag.id}
                id={tag.id}
                title={tag.name}
                url={tag.url}
              />
            ))}
          </div>
        ) : (
          <Badge className="dark:bg-slate-400">No tags yet</Badge>
        )}
      </div>
    </div>
  );
};

export default UserCard;