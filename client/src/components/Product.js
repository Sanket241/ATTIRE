import React from 'react'
import FormatPrice from '../helpers/FormatPrice';
import { NavLink } from 'react-router-dom';

const Product = (curElem) => {
    const { id, name, image, price, category } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
        <div className='card'>
            <figure>
                <img src={image} alt={name}/>
                <figcaption className='caption'>{category}</figcaption>
            </figure>
            <div className='card-data'>
                <div className='card-data-flex'>
                    <h3>{name}</h3>
                <div className='card-data--price'>
                    {<FormatPrice price={price}/>}
                </div>
                </div>
            </div>
        </div>
    </NavLink>
  )
}

export default Product