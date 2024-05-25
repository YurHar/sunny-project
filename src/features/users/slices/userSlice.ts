import { fetchUsers } from "./../../../api/userApi";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  users: [];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  page: number;
  searchQuery: string;
}

const initialState: UserState = {
  users: [],
  status: "idle",
  error: null,
  page: 1,
  searchQuery: "",
};

export const fetchUsersAsync = createAsyncThunk(
  "users/fetchUsers",
  async ({ page, searchQuery }: { page: number; searchQuery: string }) => {
    const response = await fetchUsers(page, 10, searchQuery);
    return response.data.results;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Error fetching users";
      });
  },
});

export const { setPage, setSearchQuery } = userSlice.actions;

export default userSlice.reducer;
