export type Nullable<T> = null | T;


export type CatCategoryType = {
    breeds:[],
    categories:Array<CategoryType>,
    id:string,
    url:string,
    width:number,
    height:number
}
export type CategoryType = {
    id:number,
    name:string
}
export type CatCategoryArrayType = Array<CatCategoryType>
export type AllCategoryArrayType = Array<CategoryType>