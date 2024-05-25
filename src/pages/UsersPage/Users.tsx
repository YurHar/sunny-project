import UserList from "@/features/users/components/UserList";
import UserSearch from "@/features/users/components/UserSearch";

const UsersAsync = () => {
  return (
    <div>
      <UserSearch />
      <UserList />
    </div>
  );
};

export default UsersAsync;
