import React, {ChangeEvent, useState} from 'react';
import {getCatCategory} from "../../redux/categories-reducer";
import {useDispatch, useSelector} from "react-redux";
import {ReducersType} from "../../redux/redux-store";
import {AllCategoryArrayType, Nullable} from "../../types/types";

const SelectForm:React.FC = ()=> {
    const disptach = useDispatch();
    const [selectValue, setSelectValue] = useState<string >('');
    const allCategoryState = useSelector<ReducersType, Nullable<AllCategoryArrayType>>((state)=> state.catCategory.allCategory)
    const changeSelectValue = (e:ChangeEvent<HTMLSelectElement>)=> {
        setSelectValue(e.target.value);
    }

    const handleClick = ()=> {
       if(+selectValue > 0){
           disptach(getCatCategory(+selectValue))
       }
    }
    return(
        <form>
            <select onChange={changeSelectValue}>
                <option>Select</option>
                {
                    allCategoryState && allCategoryState.map((i)=> {
                        return(
                            <option key={i.id} value={i.id}>
                                {i.id}
                            </option>
                        )
                    })
                }
            </select>
            <div className='items-button'>
                <button type={"button"} onClick={handleClick}>
                    see more cat
                </button>
            </div>
        </form>
    )
}

export default SelectForm