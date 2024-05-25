import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp";

const SignIn = () => {
  return (
    <div className="p-6 lg:w-1/2 xl:w-5/12">
      <Link to="/">
        <img src={logo} alt="PlusDev.NET" className="w-14 mx-auto" />
      </Link>
    </div>
  );
};

export default SignIn;
