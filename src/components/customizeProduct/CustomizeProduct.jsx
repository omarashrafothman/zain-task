import React from 'react'


function CustomizeProduct({ attributes }) {
    if (!attributes) {
        return <div>تحميل...</div>;
    }
    if (attributes.length === 0) {
        return <div>لا يوجد خصائص متاحه</div>;
    }

    return (
        <div className="flex flex-col gap-6">
            {attributes.map((attribute, index) => (
                <div key={index}>
                    {attribute.type === 'color' && (
                        <>
                            <h4 className="font-medium">اختر اللون</h4>
                            <div className="flex items-center gap-3">
                                {(attribute.colors ?? []).map((colorItem, i) => ( // Ensure colors is always an array
                                    <div
                                        key={i}
                                        className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative"
                                        style={{ backgroundColor: colorItem.value }}
                                    >
                                        {!colorItem.available && (
                                            <div className="absolute w-10 h-[2px] rotate-45 bg-red-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {attribute.type === 'size' && (
                        <>
                            <h4 className="font-medium">اختر الحجم</h4>
                            <div className="flex items-center gap-3">
                                {(attribute.sizes ?? []).map((size, i) => ( // Ensure sizes is always an array
                                    <div
                                        key={i}
                                        className={`ring-1 text-sm rounded-md py-1 px-4 cursor-pointer ${size.sizeName === 'medium' ? 'ring-[#8d0300] text-white bg-[#8d0300]' : 'ring-gray-300'
                                            }`}
                                        style={{ cursor: size.sizeName === 'large' ? 'not-allowed' : 'pointer' }}
                                    >
                                        {size.sizeName}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default CustomizeProduct;