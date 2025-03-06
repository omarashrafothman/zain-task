"use client"
import { useEffect, useState } from "react";
import Product from "@/components/product/Product";
import Banner from "../components/banner/Banner";
import NewArrival from "@/components/newArraival/NewArrival";

// export const generateMetadata = () => ({
//   title: "تسوق احدث الاجهزه المنزليه",
//   description: "تابع لتري كل جديد",
// });

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(products)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dashboard.zaindev.com.sa/public/api/v1/stores");
        if (!response.ok) {
          throw new Error("فشل في جلب البيانات");
        }
        const data = await response.json();

        setProducts(data?.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen text-right text-gray-900">
      <Banner />
      <section className="productList my-12">
        <h1 className="mr-[5%] mb-12 font-bold text-4xl">أحدث المنتجات</h1>

        {loading ? (
          <p className="text-center text-xl">جارٍ تحميل المنتجات...</p>
        ) : error ? (
          <p className="text-center text-red-500">حدث خطأ: {error}</p>
        ) : (
          <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
            {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                category={"اجهزه منزليه"}
                desc={product.description}
                oldPrice={50}
                rate={product.rate}
                image={product.infologo}
                reviews={product.review?.length || 0}

              />
            ))}
          </div>
        )}
      </section>

      <div className="w-[90%] mx-auto ">
        <NewArrival />
      </div>
    </div>
  );
}
