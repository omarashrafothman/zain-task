"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import zainLogo from "@/assets/zain.webp";
import Link from "next/link";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="border border-gray-200  py-3 px-6">
                <div className="flex items-center justify-between">
                    {/* Left Section */}
                    <Link href={"/"} >    <div className="flex items-center">
                        <Image src={zainLogo} width={180} height={180} alt="Logo" />

                    </div></Link>


                    {/* Mobile Menu Button */}
                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-black cursor-pointer font-bold text-2xl" >
                        ☰
                    </button>

                    {/* Search & Categories */}
                    <div className="hidden md:flex flex-1 items-center gap-x-3">

                        <input
                            type="text"
                            className="w-[100%] mx-auto  rounded-md border border-[#DDE2E4] px-3 ml-2 mr-2  py-2 text-sm text-black"
                            placeholder="ابحث عن ما تريد"
                        />
                    </div>

                    {/* Icons (Cart, Orders, Favorites) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="flex items-center gap-x-1 hover:bg-gray-100 p-2 rounded-md text-black relative">
                            <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full absolute left-[-12px] top-[-3px]">3</span>   العربة 🛒
                        </button>
                        <button className="hover:bg-gray-100 p-2 rounded-md text-black"> الطلبات 📦</button>
                        <button className="hover:bg-gray-100 p-2 rounded-md text-black">المفضلة ❤️</button>
                        <button className="border py-2 px-4 rounded-md hover:bg-gray-200 text-black cursor-pointer Font-bold">تسجيل دخول</button>



                    </div>

                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="mt-3 flex flex-col items-start space-y-2 md:hidden">
                        <button className="w-full text-left py-2 px-4 hover:bg-gray-100 text-black">الطلبات 📦</button>
                        <button className="w-full text-left py-2 px-4 hover:bg-gray-100 text-black">المفضلة ❤️</button>
                        <button className="w-full text-left py-2 px-4 hover:bg-gray-100 text-black">العربه 🛒</button>
                        <button className="border py-2 px-4 rounded-md hover:bg-gray-200 text-black cursor-pointer Font-bold">تسجيل دخول</button>
                    </div>
                )}
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex justify-between items-center py-2 px-6">
                <div className="flex gap-x-4">
                    <Link href={"#"} className="hover:bg-gray-100 p-2 rounded-md text-black">الإفضل مبيعا</Link>
                    <Link href={"#"} className="hover:bg-gray-100 p-2 rounded-md text-black">إصدارات جديده</Link>

                    <Link href={"#"} className="hover:bg-gray-100 p-2 rounded-md text-black">احدث المكيفات</Link>

                </div>
                <button className="hover:bg-gray-200 py-2 px-4 rounded-md text-black cursor-pointer Font-bold">أصبح بائعا</button>
            </div>
        </div>
    );
}
