import withLayout from "@/hoc/withLayout";
import { lazy } from "react";
import MainLayout from "@/layouts/MainLayout";

const MainPageAsync = lazy(() => import("./MainPage"));

export default withLayout(MainPageAsync, MainLayout);
