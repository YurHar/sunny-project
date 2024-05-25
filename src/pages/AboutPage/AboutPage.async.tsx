import withLayout from "@/hoc/withLayout";
import MainLayout from "@/layouts/MainLayout";
import { lazy } from "react";

const AboutPageAsync = lazy(() => import("./AboutPage"));

export default withLayout(AboutPageAsync, MainLayout);
