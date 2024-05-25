import withLayout from "@/hoc/withLayout";
import MainLayout from "@/layouts/MainLayout";
import { lazy } from "react";

const MainPageAsync = lazy(() => import("./MainPage"));

export default withLayout(MainPageAsync, MainLayout);
