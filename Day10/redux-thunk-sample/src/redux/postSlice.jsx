import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchPosts = createAsyncThunk('gets/fetchPosts', async () => {
    return axios.get("localhost:81/posts").then(res => {
        return res.data
    })
})

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        loading: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.loading = false;
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.loading = true;
            });
    }
})

export const getPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.loading;

export default postSlice.reducer