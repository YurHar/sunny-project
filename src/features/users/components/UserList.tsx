import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsersAsync, setPage } from "../slices/userSlice";
import {
  selectAllUsers,
  selectUserError,
  selectUserPage,
  selectUserSearchQuery,
  selectUserStatus,
} from "../userSelectors";
import UserCard from "./UserCard";
import Loading from "@/components/shared/Loading/Loading";
import { Button } from "@/components/ui/button";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const status = useSelector(selectUserStatus);
  const error = useSelector(selectUserError);
  const page = useSelector(selectUserPage) as number;

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchUsersAsync({ page, searchQuery: "" }));
  }, [dispatch, page]);

  return (
    <div>
      {status === "loading" && <Loading />}
      {status === "failed" && <div>{error}</div>}
      {status === "succeeded" && (
        <div>
          <div className="mt-6 flex flex-wrap justify-around gap-4">
            {users.map((user: any) => (
              <UserCard
                key={user.id}
                id={user.id.value}
                nickname={user.login.username}
                image={user.picture.large}
                name={`${user.name.first} ${user.name.last}`}
              />
            ))}
          </div>
          <Button variant="outline" onClick={() => dispatch(setPage(page + 1))}>
            Next Page
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserList;
