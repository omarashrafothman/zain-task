"use client";
import CustomizeProduct from "@/components/customizeProduct/CustomizeProduct";
import Add from "@/components/add/Add";
import ProductImages from "@/components/productImages/ProductImages";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

function Page() {
    const param = useParams();
    const slug = param?.slug ? Number(param.slug) : NaN;

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(product)

    useEffect(() => {
        if (!isNaN(slug)) {
            const fetchProduct = async () => {
                try {
                    const response = await fetch(`https://dashboard.zaindev.com.sa/public/api/v1/stores/${slug}`);
                    if (!response.ok) {
                        throw new Error("فشل في جلب البيانات");
                    }
                    const data = await response.json();
                    setProduct(data?.data || null);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchProduct();
        }
    }, [slug]);

    if (loading) return <p className="text-center text-xl">جارٍ تحميل المنتج...</p>;
    if (error) return <p className="text-center text-red-500">حدث خطأ: {error}</p>;
    if (!product) return <p className="text-center text-gray-500">المنتج غير موجود</p>;

    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 mb-12 mt-5">
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages images={product?.gallery?.filter((item) => item.id !== undefined)} infologo={product.infologo} />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className="text-4xl font-medium">{product?.name}</h1>
                <p className="text-gray-500">{product?.description}</p>
                <div className="h-[2px] bg-gray-100" />
                <div className="flex items-center gap-4">
                    <h3 className="text-xl text-gray-500 line-through">{product.discount}</h3>
                    <h2 className="font-medium text-2xl">{product.price} ر.س</h2>
                </div>
                <div className="h-[2px] bg-gray-100" />
                <CustomizeProduct attributes={product?.attributes || []} />
                <Add stock={product?.quantity || 0} />
                <div className="h-[2px] bg-gray-100" />
                {product?.review && (
                    <div>
                        <h2>المراجعات</h2>
                        {product.review.map((item, index) => (
                            <div className="text-sm" key={index}>
                                <p>{item.message}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Page;
