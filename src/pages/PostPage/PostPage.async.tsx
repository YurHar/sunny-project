import { lazy } from "react";
import withLayout from "@/hoc/withLayout";
import MainLayout from "@/layouts/MainLayout";

const PostPageAsync = lazy(() => import("./PostPage"));

export default withLayout(PostPageAsync, MainLayout);