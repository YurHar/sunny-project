import { cn } from "@/lib/utils";
import {
  LucideClock,
  LucideEye,
  LucideHeart,
  LucideMessageCircle,
} from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";

interface Props {
  value: number | string;
  type?: "like" | "view" | "answer" | "comment" | "asked";
  title: string;
  textStyles?: string;
  href?: string;
  isAuthor?: boolean;
  imgUrl?: string;
}

const iconMapping = {
  like: <LucideHeart className="w-4 h-4" />,
  view: <LucideEye className="w-4 h-4" />,
  answer: <LucideMessageCircle className="w-4 h-4" />,
  asked: <LucideClock className="w-4 h-4" />,
  comment: <LucideMessageCircle className="w-4 h-4" />,
};

const Metric = ({
  value,
  type,
  title,
  textStyles,
  href,
  isAuthor,
  imgUrl,
}: Props) => {
  const iconComponent = useMemo(
    () => (!isAuthor ? iconMapping[type as keyof typeof iconMapping] : null),
    [type, isAuthor]
  );

  if (isAuthor && imgUrl && href) {
    return (
      <div>
        <Link to={href} className="flex items-center justify-center gap-1">
          <img
            src={imgUrl}
            alt={title}
            className="rounded-full object-cover w-5 h-5"
          />

          <span
            className={cn(
              "flex items-center gap-1 text-zinc-800 dark:text-zinc-400 transition-colors hover:text-red-400",
              textStyles
            )}
          >
            {value}
            <span className="small-regular line-clamp-1 max-sm:hidden">
              {title}
            </span>
          </span>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-1">
      <span className={cn("flex items-center gap-1", textStyles)}>
        {iconComponent}
        {value}
        {type !== "asked" && (
          <span className="small-regular line-clamp-1">{title}</span>
        )}
      </span>
    </div>
  );
};

export default Metric;