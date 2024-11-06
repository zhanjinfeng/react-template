import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type PostState = {
    posts: {
        id: number;
        title: string;
        body: string;
    }[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
};

const initialState: PostState = {
    posts: [],
    status: 'idle',
};

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(listPostsThunk.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(listPostsThunk.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.status = 'succeeded';
        });
        builder.addCase(listPostsThunk.rejected, (state) => {
            state.status = 'failed';
        });
    },
});

export const listPostsThunk = createAsyncThunk('post/listPosts', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await response.json();

    return data;
});

export const { setPosts } = postSlice.actions;

export default postSlice.reducer;
