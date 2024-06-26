import { MenuIcon } from "lucide-react"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react";
import { LucideHome, LucideNewspaper, LucideTags, LucideUser2, LucideUserCircle, LucideUserX2 } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button";

const SidebarMobile = ({
    mobileDashboardHeader: MobileDashboardHeader
}: {
    children: React.ReactNode
    sidebarContent: () => JSX.Element
    mobileDashboardHeader?: () => JSX.Element
}) => {

    const location = useLocation();

    const isActive = (route: string): boolean => {
        return (
            location.pathname === route
        )
    }

    return (
        <>
            <Sheet>
                <div className="mt-5 flex md:hidden">
                    <div className="flex flex-1">
                        {MobileDashboardHeader && <MobileDashboardHeader />}
                    </div>
                    <SheetTrigger>
                        <MenuIcon size={24} />
                    </SheetTrigger>
                </div>
                <SheetContent side="left" className="p-0">
                    <section className="w-full custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto 
        border-r border-zinc-200 bg-zinc-50 p-6 pt-36 lg:w-[266px] dark:border-zinc-900 dark:bg-zinc-900">
                        <div className="flex flex-1 flex-col gap-6">

                            <Link to="/" className={
                                `
                    flex items-center justify-start gap-4 p-4 bolder-l rounded-lg text-zinc-50
                    ${isActive('/') ? "primary-gradient base-bold text-zinc-50" : "base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800"
                                }
                    `
                            }>
                                <LucideHome className="w-5 h-5" />
                                <span>Home</span>
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
                                <span>Post</span>
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
                                <span>Community</span>
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
                                <span>Tags</span>
                            </Link>

                        </div>

                        <div className="mt-5 flex flex-col gap-5">
                            <Link to={"/"}>
                                <Button className="body-semibold btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 text-zinc-50">
                                    <LucideUserCircle className="h-5 w-5" />
                                    <span>Sign In</span>
                                </Button>
                            </Link>
                            <Link to={"/"}>
                                <Button className="body-semibold btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 text-zinc-50">
                                    <LucideUserX2 className="h-5 w-5" />
                                    <span>Sign Up</span>
                                </Button>
                            </Link>
                        </div>
                    </section>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default SidebarMobile;