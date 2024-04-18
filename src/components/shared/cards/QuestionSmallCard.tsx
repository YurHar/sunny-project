import { LucideArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  url: string;
  title: string;
}

const QuestionSmallCard = ({ id, url, title }: Props) => {
  return (
    <Link
      to={url}
      className="flex cursor-pointer items-center justify-between gap-7"
    >
      <span className="body-medium text-zinc-700 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400">
        {title}
      </span>

      <span>
        <LucideArrowRight className="h-4 w-4 text-zinc-700 dark:text-zinc-400" />
      </span>
    </Link>
  );
};

export default QuestionSmallCard;