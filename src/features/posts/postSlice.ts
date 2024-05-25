import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  id: string;
  title: string;
  content: string;
  views: number;
  favorites: string[];
  comments: string[];
  authorId: string;
  likers: string[];
  dislikers: string[];
}

interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<Post>) {
      state.posts.push(action.payload);
    },
    toggleLike(
      state,
      action: PayloadAction<{ postId: string; userId: string }>
    ) {
      const post = state.posts.find(
        (post) => post.id === action.payload.postId
      );

      if (post) {
        if (post.likers.includes(action.payload.userId)) {
          post.likers = post.likers.filter(
            (id) => id !== action.payload.userId
          );
        } else {
          post.likers.push(action.payload.userId);
        }
      }
    },
    toggleDislike(
      state,
      action: PayloadAction<{ postId: string; userId: string }>
    ) {
      const post = state.posts.find(
        (post) => post.id === action.payload.postId
      );

      if (post) {
        if (post.dislikers.includes(action.payload.userId)) {
          post.dislikers = post.dislikers.filter(
            (id) => id !== action.payload.userId
          );
        } else {
          post.dislikers.push(action.payload.userId);
        }
      }
    },
    toggleFavorite(
      state,
      action: PayloadAction<{ postId: string; userId: string }>
    ) {
      const post = state.posts.find(
        (post) => post.id === action.payload.postId
      );

      if (post) {
        if (post.favorites.includes(action.payload.userId)) {
          post.favorites = post.favorites.filter(
            (id) => id !== action.payload.userId
          );
        } else {
          post.favorites.push(action.payload.userId);
        }
      }
    },
    addComment(
      state,
      action: PayloadAction<{ postId: string; commentId: string }>
    ) {
      const post = state.posts.find(
        (post) => post.id === action.payload.postId
      );

      if (post) {
        post.comments.push(action.payload.commentId);
      }
    },
    incrementViews(state, action: PayloadAction<string>) {
      const post = state.posts.find((post) => post.id === action.payload);

      if (post) {
        post.views++;
      }
    },
  },
});