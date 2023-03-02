import React from 'react'

import StarsRating from 'stars-rating'
import movies from '../movie.json'
const Mainbar = () => {

 

    return (
        <div className="flex justify-between flex-wrap items-center mt-20 ">
        {
            movies.map((element,index)=>{
                return(
                    <div className="card-all w-[18rem] mt-10 ml-4 mr-4 " key={index}>
                <img  src={element.images} className="card-img-top h-[16rem] w-[12rem]" alt="..." />
                
                <ul className="list-group  list-group-flush ml-3">
                    <li className='reviews flex space-x-[1px] mb-3' ><StarsRating
                    count={5}
                    value={element.rating}
                    size={24}
                    color2={'#ffd700'} /></li>
                    <p className='title text-sm mb-2 text-[15px] font-600 text-qblack leading-[24px] line-clamp-2 hover:text-blue-600'>{element.description}</p>
                   <p className='price'>
                   <span class="main-price text-qgray line-through font-600 text-[18px]">{element.price}</span>
                   <span class="offer-price text-qred font-600 text-[18px] ml-2">${element.discountPercentage}</span>
                   </p>
                </ul>
        </div>
                )
            })
        }
     
     
       
        </div>
    )
}

export default Mainbar
