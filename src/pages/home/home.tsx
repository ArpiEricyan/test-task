import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ReducersType} from '../../redux/redux-store';
import {Nullable, CatCategoryArrayType} from '../../types/types';
import { getAllCategory} from '../../redux/categories-reducer';
import './home.scss';
import CatComponent from "../../components/catComponent/catComponent";
import Preloader from '../../components/preloader/preloader'
import SelectForm from "../../components/selectForm/selectForm";


const HomePage: React.FC = () => {
    const disptach = useDispatch();
    const catCategoryState = useSelector<ReducersType, Nullable<CatCategoryArrayType>>((state) => state.catCategory.catCategory)
    const setIsFetching = useSelector<ReducersType, boolean>((state) => state.catCategory.isFetching)
    useEffect(() => {
        disptach(getAllCategory())

    }, [])

    return (
        <div className='home'>
            {
                setIsFetching ? <Preloader/> : ''
            }
            <SelectForm/>
            <div className='items'>
                {
                    catCategoryState && catCategoryState.map(i => <CatComponent key={i.id}  {...i}/>)
                }
            </div>
        </div>
    )
}
export default HomePage;