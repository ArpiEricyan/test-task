import React from 'react';
import {CatCategoryType} from '../../types/types';
import './catComponent.scss';

const CatComponent:React.FC<CatCategoryType> = (props)=> {
    const {url,  } = props
    return(
        <div className='cat-item'>
          <span>
                <img  src={url}/>
          </span>
        </div>
    )
}

export default CatComponent;