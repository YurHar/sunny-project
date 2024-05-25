import { lazy } from "react";
import withLayout from "@/hoc/withLayout";
import MainLayout from "@/layouts/MainLayout";

const UsersAsync = lazy(() => import("./Users"));

export default withLayout(UsersAsync, MainLayout);
