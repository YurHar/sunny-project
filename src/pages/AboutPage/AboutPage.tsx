import { useEffect, useState } from "react";

function fetchUserData(userId: string | number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        userId,
        username: "User" + userId,
        email: "user" + userId + "@example.com",
      });
    }, 1000);
  });
}

function withUser(Component) {
  return function WrappedComponent(props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
      fetchUserData(props.userId).then((data) => setUser(data));
    }, [props.userId]);

    return <Component {...props} user={user} />;
  };
}

function UserProfile({ user }) {
  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="h1-bold">User Profile</h1>
      <h3 className="h1-bold">{user.username}</h3>
      <h3 className="h1-bold">{user.email}</h3>
    </div>
  );
}

const UserWithInfo = withUser(UserProfile);

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>
        This is the about page. You can put some information about your
        application here.
      </p>

      <UserWithInfo userId={1} />
      <UserWithInfo userId={200} />
    </div>
  );
};

export default AboutPage;
