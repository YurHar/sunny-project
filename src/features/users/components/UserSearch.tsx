import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUsersAsync, setSearchQuery } from "../slices/userSlice";
import { Button } from "@/components/ui/button";

const UserSearch = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    dispatch(setSearchQuery(query));
    // @ts-ignore
    dispatch(fetchUsersAsync({ page: 1, searchQuery: query }));
  };

  return (
    <div className="flex min-h-[56px] grow items-center gap-4 rounded-[10px] bg-slate-200 px-4 dark:bg-slate-800">
      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="paragraph-regular placeholder-slate-400 dark:placeholder-slate-500 bg-transparent w-full text-slate-800 dark:text-slate-200 focus:outline-none"
      />
      <Button variant="secondary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default UserSearch;
