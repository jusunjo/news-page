import { createSlice } from "@reduxjs/toolkit";

let id = 0;
export const useSlice = createSlice({
    name: "news",
    initialState: {
        clipList: [],
    },

    reducers: {
        clipNews: (state, action) => {
            return {
                ...state,
                clipList: state.clipList.concat({
                    text: action.payload,
                    id: id++,
                    isClip: false,
                }),
            };
        },
        removeClipNews: (state, action) => {
            return {
                ...state,
                clipList: state.clipList.filter((news) => news.id !== action.payload),
            };
        },
    },
});

export const { clipNews, removeClipNews } = useSlice.actions;

export default useSlice.reducer;
