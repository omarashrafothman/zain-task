
import Product from "@/components/product/Product";
import Head from "next/head";
import products from "../locals/products.json"
import Banner from "../components/banner/Banner";
export const generateMetadata = () => ({
  title: "تسوق احدث الاجهزه المنزليه",
  description: "تابع لتري كل جديد",
});
export default function Home() {

  return (
    <div className="bg-gray-100 min-h-screen text-right text-gray-900">

      <Banner />
      <section className="productList my-12">
        <h1 className="mr-[5%] mb-12 font-bold text-4xl">أحدث المنتجات</h1>
        <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  mx-auto">

          {products.map((product) => (<Product key={product.id} id={product.id} name={product.name} price={product.price} category={"اجهزه منزليه"} desc={product.description} oldPrice={50} rate={product.rate} reviews={product.review.length} image={product.gallery[0].galleryItem} />))}



        </div>
      </section>
    </div>
  );
}
