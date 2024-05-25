import { lazy } from "react";
import withLayout from "@/hoc/withLayout";


const SignUpAsync = lazy(() => import("./SignUp"));

export default withLayout(SignUpAsync);
