import { Link } from "react-router-dom";
import {
  LucideNewspaper,
  LucidePlusSquare,
  LucideShieldQuestion,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.webp";
import GlobalSearch from "@/components/shared/GlobalSearch/GlobalSearch";
import Theme from "@/components/shared/Navbar/Theme";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <nav className="fixed p-5 z-50 flex w-full items-center justify-between gap-3 bg-zinc-50 shadow-sm sm:px-12 dark:bg-zinc-900 dark:shadow-black">
      <Link to="/" className="flex items-center gap-1">
        <img src={logo} alt="PlusDev.NET" className="w-9" />

        <h3 className="h3-bold ml-1 hidden font-space-grotesk-bold text-slate-900 sm:block dark:text-slate-100">
          PlusDev<span className="text-red-500">.NET</span>
        </h3>
      </Link>
      <GlobalSearch />
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="p-1">
            <LucidePlusSquare className="h-6 w-6 text-red-500" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-2 mt-4 bg-zinc-50 dark:bg-slate-800">
            <DropdownMenuItem>
              <Link
                to="/create-post"
                className="flex gap-3 p-4 hover:text-red-500 dark:text-zinc-100 dark:hover:text-red-500"
              >
                <LucideNewspaper className="w-5 h-5" /> Create a Post
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                to="/ask-question"
                className="flex gap-3 p-4 hover:text-red-500 dark:text-zinc-100 dark:hover:text-red-500"
              >
                <LucideShieldQuestion className="w-5 h-5" /> Ask a Question
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Theme type="dropdown" />

        <UserMenu />
      </div>
    </nav>
  );
};

export default Navbar;
