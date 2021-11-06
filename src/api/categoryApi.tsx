import {instance} from "./api";
import {CatCategoryArrayType, AllCategoryArrayType} from "../types/types";

type ResponseType <D> = {
    data:D,
}


export const categoryApi = {
    catCategory(id:number){
        return instance.get<ResponseType<CatCategoryArrayType>, any>(`images/search?limit=10&page=1&category_ids=${id}`)
            .then(response=> response)
    },
    allCategory(){
        return instance.get<ResponseType<AllCategoryArrayType>, any>('categories')
            .then(response => response)
    }
}