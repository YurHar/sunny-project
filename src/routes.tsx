import AboutPageAsync from "@/pages/AboutPage/AboutPage.async";
import MainPageAsync from "@/pages/MainPage/MainPage.async";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import PostPageAsync from "@/pages/PostPage/PostPage.async";
import SignInAsync from "@/pages/SignIn/SignIn.async";
import SignUpAsync from "@/pages/SignUp/SignUp.async";
import UsersAsync from "@/pages/UsersPage/Users.async";

const MainRoutes = () => {
  return (
    <main className="relative">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/posts" element={<PostPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />

          <Route path="/sign-in" element={<SignInAsync />} />
          <Route path="/sign-up" element={<SignUpAsync />} />

          <Route path="/community" element={<UsersAsync />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default MainRoutes;
