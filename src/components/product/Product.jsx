
import React from 'react'

import air from "../../assets/air.jpg"
import Link from 'next/link'
import Image from 'next/image';
import Rating from '../rating/Rating';
function Product({ name, price, desc, category, oldPrice, rate, reviews, image, id }) {

    const handleRatingChange = (newRating) => {
        setRating(newRating);

    };
    return (
        <div className=" bg-white rounded-lg  mb-4 shadow-xl w-full ">
            <Link href={`/productdetails/${id}`} className="no-underline">

                <div className="relative group">
                    <Image src={image} alt={name} className="rounded-md w-full h-60 object-cover" width={500} height={500} />


                    <div className="absolute bottom-0 left-0 w-full bg-black flex justify-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                        <button
                            className="text-white w-full font-semibold  cursor-pointer"
                            aria-label="add to cart"
                        >
                            أضف الى العربه
                        </button>
                    </div>
                </div>


                <div className="mt-3 px-4 py-2">
                    <h4 className="text-lg font-semibold text-black">{name}</h4>
                    <div className="flex items-center mt-1">
                        <p className="text-primary font-bold text-lg ml-2">${price}</p>
                        <p className="text-gray-500 line-through ml-3">${oldPrice}</p>
                    </div>


                    <div className="flex items-center my-2">
                        <Rating value={rate} />
                        <span className="ml-3 text-gray-500 text-sm mr-2">({reviews})</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Product