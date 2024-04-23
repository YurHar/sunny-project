import { lazy } from "react";

const PostPageAsync = lazy(() => import("./PostPage"));

export default PostPageAsync;