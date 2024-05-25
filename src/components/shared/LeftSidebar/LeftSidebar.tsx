import { Button } from "@/components/ui/button";
import {
  LucideFileQuestion,
  LucideHome,
  LucideNewspaper,
  LucideTags,
  LucideUserCircle,
  LucideUserX2,
  LucideUsers2,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const LeftSidebar = () => {
  const location = useLocation();

  const isActive = (route: string): boolean => {
    return location.pathname === route;
  };

  return (
    <section
      className="w-[100px] custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between
    overflow-y-auto border-r border-zinc-200 bg-zinc-50 p-6 pt-36 max-sm:hidden
    lg:w-[266px] dark:border-zinc-900 dark:bg-zinc-900"
    >
      <div className="flex flex-1 flex-col gap-6">
        <Link
          to="/"
          className={`flex items-center justify-start gap-4 p-4 rounded-lg ${
            isActive("/")
              ? "primary-gradient base-bold text-zinc-50"
              : "base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800"
          }`}
        >
          <LucideHome className="h-5 w-5" />
          <span className="max-lg:hidden">Home</span>
        </Link>

        <Link
          to="/posts"
          className={`flex items-center justify-start gap-4 p-4 rounded-lg ${
            isActive("/posts")
              ? "primary-gradient base-bold text-zinc-50"
              : "base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800"
          }`}
        >
          <LucideNewspaper className="h-5 w-5" />
          <span className="max-lg:hidden">Posts</span>
        </Link>

        <Link
          to="/questions"
          className={`flex items-center justify-start gap-4 p-4 rounded-lg ${
            isActive("/questions")
              ? "primary-gradient base-bold text-zinc-50"
              : "base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800"
          }`}
        >
          <LucideFileQuestion className="h-5 w-5" />
          <span className="max-lg:hidden">Questions</span>
        </Link>

        <Link
          to="/community"
          className={`flex items-center justify-start gap-4 p-4 rounded-lg ${
            isActive("/community")
              ? "primary-gradient base-bold text-zinc-50"
              : "base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800"
          }`}
        >
          <LucideUsers2 className="h-5 w-5" />
          <span className="max-lg:hidden">Community</span>
        </Link>

        <Link
          to="/tags"
          className={`flex items-center justify-start gap-4 p-4 rounded-lg ${
            isActive("/tags")
              ? "primary-gradient base-bold text-zinc-50"
              : "base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800"
          }`}
        >
          <LucideTags className="h-5 w-5" />
          <span className="max-lg:hidden">Tags</span>
        </Link>
      </div>

      <div className="mt-5 flex flex-col gap-5">
        <Link to="/sign-in">
          <Button className="body-semibold btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 text-zinc-50">
            <LucideUserCircle className="h-5 w-5 lg:hidden" />
            <span className="max-lg:hidden">Sign In</span>
          </Button>
        </Link>

        <Link to="/sign-up">
          <Button className="body-semibold btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 text-zinc-50">
            <LucideUserX2 className="h-5 w-5 lg:hidden" />
            <span className="max-lg:hidden">Sign Up</span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default LeftSidebar;
