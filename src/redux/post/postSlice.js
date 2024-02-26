import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
    posts:[],
    popularPosts: [],
    loading: false
}
export const createPost = createAsyncThunk('posts/createPost',async (param) => {
    try {
        const {data} = await axios.post('/posts',param)
        return data
    }catch (e){
        console.log(e)
    }
})

export const getAllPosts = createAsyncThunk('posts/getAllPosts',async () => {
    try {
        const {data} = await axios.get('/posts')
        return data
    }catch (e){
        console.log(e)
    }
})

export const removePost = createAsyncThunk('posts/removePost',async (id) => {
    try {
        const {data} = await  axios.delete(`posts/${id}`,id)
        return data
    }catch (e) {
        console.log(e)
    }
})
export const updatePost = createAsyncThunk('posts/updatePost',async (updatePost) => {
    try {
        const {data} = await  axios.put(`posts/${updatePost.id}`,updatePost)
        return data
    }catch (e) {
        console.log(e)
    }
})

export const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{},
    extraReducers:{
        [createPost.pending]: (state) => {
            state.loading = true
        },
        [createPost.fulfilled]: (state,action) => {
            state.loading = false
            state.posts.push(action.payload)
        },
        [createPost.rejected]: (state) => {
            state.loading = true
        },
        // getPost
        [getAllPosts.pending]: (state) => {
            state.loading = true
        },
        [getAllPosts.fulfilled]: (state,action) => {
            state.loading = false
            state.posts = action.payload.posts
            state.popularPosts = action.payload.popularPosts
        },
        [getAllPosts.rejected]: (state) => {
            state.loading = false
        },
        //removePost
        [removePost.pending]: (state) => {
            state.loading = true
        },
        [removePost.fulfilled]: (state,action) => {
            state.loading = false
            state.posts = state.posts.filter(post => post._id !== action.payload._id)
        },
        [removePost.rejected]: (state) => {
            state.loading = false
        },
        //updatePost
        [removePost.pending]: (state) => {
            state.loading = true
        },
        [removePost.fulfilled]: (state,action) => {
            state.loading = false
            const index = state.posts.findIndex(post => post._id === action.payload._id)
            state.posts[index] = action.payload
        },
        [removePost.rejected]: (state) => {
            state.loading = false
        }
    }
})
