
"use client"
import React, { useState } from "react";
import Image from "next/image";


function ProductImages({ images, infologo }) {
    const [index, setIndex] = useState(0);

    if (!images || images.length === 0) {
        return <p>No images available</p>;
    }

    return (
        <div>
            <div className="h-[500px] relative">
                <Image
                    src={infologo}
                    alt={`Product Image ${index + 1}`}
                    fill
                    sizes="50vw"
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex justify-between gap-4 mt-8">
                {images.map((img, i) => (
                    <div
                        className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
                        key={img.id}
                        onClick={() => setIndex(i)}
                    >
                        <Image
                            src={img.galleryItem}
                            alt={`Thumbnail ${i + 1}`}
                            fill
                            sizes="30vw"
                            className="object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductImages;