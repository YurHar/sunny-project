import { RootState } from "@/app/store";

export const selectAllUsers = (state: RootState) => state.users.users;
export const selectUserStatus = (state: RootState) => state.users.status;
export const selectUserError = (state: RootState) => state.users.error;
export const selectUserPage = (state: RootState) => state.users.page;
export const selectUserSearchQuery = (state: RootState) => state.users.searchQuery;