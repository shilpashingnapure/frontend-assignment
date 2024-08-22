import { createSlice } from "@reduxjs/toolkit";
import data from "../categories.json";

const categoriesSlice = createSlice({
    name : 'categories' , 
    initialState : {
        data : data.categories , 
        activeCategoryTab : ''
    },
    reducers : {
        updateCategories : (state , { payload }) => {
            state.data = [...payload];
        },
        setActiveCategoryTab : (state , { payload}) => {
            state.activeCategoryTab = payload;
        }
    }
});

export const { updateCategories , setActiveCategoryTab} = categoriesSlice.actions;
export default categoriesSlice.reducer;