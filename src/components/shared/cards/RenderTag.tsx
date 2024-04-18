import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  url: string;
  totalCount?: number;
  showCount?: boolean;
  className?: string;
}

const RenderTag = ({
  id,
  title,
  url,
  totalCount,
  showCount,
  className,
}: Props) => {
  return (
    <Link to={url} className="flex justify-between gap-2">
      <Badge
        className="subtle-medium rounded-md bg-slate-300 px-4 py-2 uppercase
              text-zinc-500 hover:bg-indigo-400 hover:text-zinc-100 dark:bg-slate-800 dark:text-zinc-100 hover:dark:bg-indigo-400 "
      >
        {title}
      </Badge>

      {showCount && (
        <span className="small-medium text-zinc-700 dark:text-zinc-400">
          {totalCount}
        </span>
      )}
    </Link>
  );
};

export default RenderTag;