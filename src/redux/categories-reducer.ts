import {InferActionsType, BaseThunkType} from "./redux-store";
import {Nullable, CatCategoryArrayType, AllCategoryArrayType} from "../types/types";
import {categoryApi} from "../api/categoryApi";


const initialState = {
    allCategory:[] as Nullable<AllCategoryArrayType>,
    catCategory: [] as Nullable<CatCategoryArrayType>,
    isFetching: false as boolean,

}

type InitialStateType = typeof initialState;


const CategoryReducer = (state = initialState, action: CategoryActionsType): InitialStateType => {
    switch (action.type) {
        case 'GET_CATS_CATEGORY':
            return {
                ...state,
                catCategory: action.payload
            }
        case 'SET_IS_FETCHING':
            return {
                ...state,
                isFetching: action.payload
            }
        case 'GET_ALL_CATEGORY':
            return {
                ...state,
                allCategory:action.payload

            }
        default:
            return state

    }
}

export default CategoryReducer;
type CategoryActionsType = InferActionsType<typeof actions>

const actions = {
    getCatCategoryAC: (payload: CatCategoryArrayType) => ({type: 'GET_CATS_CATEGORY', payload} as const),
    setIsFetchingAC: (payload: boolean) => ({type: 'SET_IS_FETCHING', payload} as const),
    getAllCategoryAC: (payload: AllCategoryArrayType) => ({type: 'GET_ALL_CATEGORY', payload} as const),

}
export const getAllCategory = ():BaseThunkType<CategoryActionsType> => {
    return async (dispatch)=> {
        dispatch(actions.setIsFetchingAC(true))
        const response = await  categoryApi.allCategory();
        dispatch(actions.getAllCategoryAC(response.data));
        dispatch(actions.setIsFetchingAC(false))

    }
}

export const getCatCategory = (id:number): BaseThunkType<CategoryActionsType> => {
    return async (dispatch) => {
        dispatch(actions.setIsFetchingAC(true))
        const response = await categoryApi.catCategory(id);
        dispatch(actions.getCatCategoryAC(response.data))
        dispatch(actions.setIsFetchingAC(false))
    }
}


