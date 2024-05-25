import { lazy } from "react";
import SignIn from "./SignIn";
import withLayout from "@/hoc/withLayout";

const SignInAsync = lazy(() => import("./SignIn"));

export default withLayout(SignInAsync);
