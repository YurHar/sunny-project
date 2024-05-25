import { lazy } from "react";
import withLayout from "@/hoc/withLayout";
import MainLayout from "@/layouts/MainLayout";

const AboutPageAsync = lazy(() => import("./AboutPage"));

export default withLayout(AboutPageAsync, MainLayout);
