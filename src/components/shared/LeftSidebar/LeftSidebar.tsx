import { Button } from "@/components/ui/button";
import { LucideHome, LucideNewspaper, LucideTags, LucideUser2 } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const LeftSidebar = () => {
    const location = useLocation();

    const isActive = (route: string): boolean => {
        return (
            location.pathname === route
        )
    }


    return (
        <section className="w-[100px] custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto 
        border-r border-zinc-200 bg-zinc-50 p-6 pt-36 max-sm:hidden lg:w-[266px] dark:border-zinc-900 dark:bg-zinc-900">
            <div className="flex flex-1 flex-col gap-6">

                <Link to="/" className={
                    `
                    flex items-center justify-start gap-4 p-4 bolder-l rounded-lg text-zinc-50
                    ${isActive('/') ? "primary-gradient base-bold text-zinc-50" : "base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800"
                    }
                    `
                }>
                    <LucideHome className="w-5 h-5" />
                    <span className="max-lg:hidden">Home</span>
                </Link>

                <Link to="/posts"
                    className={
                        `
                    flex items-center justify-start gap-4 p-4 bolder-l rounded-lg text-zinc-50
                    ${isActive('/posts') ? "primary-gradient base-bold text-zinc-50" : "base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800"
                        }
                    `
                    }
                >
                    <LucideNewspaper className="w-5 h-5" />
                    <span className="max-lg:hidden">Post</span>
                </Link>

                <Link to="/community"
                    className={
                        `
                flex items-center justify-start gap-4 p-4 bolder-l rounded-lg text-zinc-50
                ${isActive('/community') ? "primary-gradient base-bold text-zinc-50" : "base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800"
                        }
                `
                    }
                >
                    <LucideUser2 className="w-5 h-5" />
                    <span className="max-lg:hidden">Community</span>
                </Link>

                <Link to="/tags"
                    className={
                        `
                flex items-center justify-start gap-4 p-4 bolder-l rounded-lg text-zinc-50
                ${isActive('/tags') ? "primary-gradient base-bold text-zinc-50" : "base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800"
                        }
                `
                    }
                >
                    <LucideTags className="w-5 h-5" />
                    <span className="max-lg:hidden">Tags</span>
                </Link>

            </div>

            <div className="mt-5 flex flex-col gap-5">
                <Button className="btn-secondary text-zinc-50">
                    <Link to={"/"}>
                        Log In
                    </Link>
                </Button>
                <Button className="btn-tertiary text-zinc-50">
                    <Link to={"/"}>
                        Sign Up
                    </Link>
                </Button>
            </div>
        </section>
    )
}

export default LeftSidebar