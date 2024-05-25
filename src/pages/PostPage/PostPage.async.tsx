import withLayout from "@/hoc/withLayout";
import MainLayout from "@/layouts/MainLayout";
import { lazy } from "react";

const PostPageAsync = lazy(() => import("./PostPage"));

export default withLayout(PostPageAsync, MainLayout);
