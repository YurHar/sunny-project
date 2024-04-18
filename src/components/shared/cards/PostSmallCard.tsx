import { LucideArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  url: string;
  image: string;
}

const PostSmallCard = ({ id, url, title, image }: Props) => {
  return (
    <Link
      to={url}
      className="flex cursor-pointer items-center justify-between gap-2"
    >
      <img
        src={image}
        alt={title}
        className="h-[50px] w-[50px] rounded-[10px] object-cover transition-all duration-500 hover:scale-105"
      />

      <span className="body-medium text-zinc-700 dark:text-zinc-400 hover:text-red-500  dark:hover:text-red-400">
        {title}
      </span>
      <span>
        <LucideArrowRight className="h-4 w-4 text-zinc-700 dark:text-zinc-400" />
      </span>
    </Link>
  );
};

export default PostSmallCard;