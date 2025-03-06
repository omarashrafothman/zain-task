"use client"

import { useState } from "react"


function Add({ stock }) {
    const [quantity, setQuantity] = useState(1)

    const handleQuantity = (type) => {
        if (type === "d" && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
        if (type === "i" && quantity < stock) {
            setQuantity((prev) => prev + 1);
        }
    }

    return (
        <div className='flex flex-col gap-4'>
            <h4 className='font-medium'>اختر الكمية</h4>
            <div className='flex justify-between'>
                <div className="flex items-center gap-4">
                    <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
                        <button className="cursor-pointer text-xl" onClick={() => handleQuantity("d")}>-</button>
                        {quantity}
                        <button className="cursor-pointer text-xl" onClick={() => handleQuantity("i")}>+</button>
                    </div>
                    <div className="text-xs">Only <span className="text-orange-500">{stock} items</span> left! {"Don't"} miss it</div>
                </div>

                <button className='cursor-pointer w-36 text-sm rounded-3xl ring-1 ring-[#8d0300] text-[#8d0300] py-2 px-4 hover:bg-[#8d0300] hover:text-white disabled:cursor-not-allowed disabled:text-white disabled:bg-pink-200 disabled:ring-none' >Add to Cart</button>
            </div>
        </div>
    )
}

export default Add