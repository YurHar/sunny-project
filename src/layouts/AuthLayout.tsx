interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex min-h-screen justify-center bg-gray-100 text-gray-900">
      <div className="m-0 flex max-w-[900px] flex-1 justify-center bg-white sm:m-10 sm:rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
