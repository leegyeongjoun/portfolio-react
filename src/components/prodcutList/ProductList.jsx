import React from 'react'
import './productlist.css'
import Product from '../product/Product'
import { products } from '../../data'
const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">Create & inspire. It's LGJ</h1>
            <p className="pl-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil itaque illo quae perspiciatis fuga eveniet quidem minima expedita doloribus aliquam cupiditate, sapiente sunt, atque sit omnis optio mollitia in consequuntur.
            </p>
        </div>
        <div className="pl-list">
            {products.map((item)=>(
              <Product key={item.id} img={item.img} link={item.link}/>
            ))}
        </div>
    </div>
  )
}

export default ProductList
