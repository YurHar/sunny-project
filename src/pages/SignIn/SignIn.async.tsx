import withLayout from "@/hoc/withLayout";
import AuthLayout from "@/layouts/AuthLayout";
import { lazy } from "react";

const SignInAsync = lazy(() => import("./SignIn"));

export default withLayout(SignInAsync, AuthLayout);
