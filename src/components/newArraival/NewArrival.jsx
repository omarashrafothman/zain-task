import React from 'react'
import women from "../../assets/women.webp";
import perfum from "../../assets/gucci.webp";
import speaker from "../../assets/speaker.webp";
import Link from 'next/link';
import Image from 'next/image';

import playstation from "../../assets/playstation.webp"
function NewArrival() {
    return (
        <section className="mainSection py-2 w-full my-3 overflow-hidden">

            <div className="mainSectionHead my-2">

                <div className="mainSectionTittleContainer flex items-center justify-between">
                    <div className="mainSectionTittle flex items-center">
                        <h4 className="text-2xl mb-5 font-bold">منتجات وصلت مؤخرا</h4>
                    </div>
                </div>
            </div>


            <div className="mainSectionContent flex flex-col lg:flex-row gap-4">

                <div className="left relative w-full lg:w-1/2 mb-4">
                    <div className="bigBanner bg-black h-full flex justify-center">
                        <Image src={playstation} alt="playstation" className="w-full h-auto" />
                    </div>
                    <div className="bigBannerContent absolute top-1/2 left-5 transform -translate-y-1/2 text-white">
                        <h4 className="text-xl font-bold">بلايستيشن 5</h4>
                        <p className="m-0 text-sm font-light">
                            إصدار PS5 باللونين الأبيض والأسود متاح للبيع
                        </p>
                        <Link href="/" className="text-white underline">
                            تسوق الآن
                        </Link>
                    </div>
                </div>


                <div className="right w-full lg:w-1/2">
                    <div className="smallBannerContainer flex flex-col gap-4">

                        <div className="WomensBanner relative w-full">
                            <Image src={women} className="w-full h-auto" alt="women" />
                            <div className="womenBannerContent absolute top-1/4 left-[-200px] transform text-white w-3/4">
                                <h4 className="text-lg font-bold">مجموعات نسائيه</h4>
                                <p className="text-sm font-light">
                                    مجموعات نسائية مميزة تمنحك أجواءً مختلفة.
                                </p>
                                <Link href="/" className="text-white underline">
                                    تسوق الأن
                                </Link>
                            </div>
                        </div>


                        <div className="flex flex-col sm:flex-row justify-between gap-4">

                            <div className="speaker relative w-full sm:w-1/2">
                                <Image src={speaker} alt="speaker" className="w-full h-auto" />
                                <div className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white w-3/4">
                                    <h4 className="text-lg font-bold">ادوات صوتيه</h4>
                                    <p className="text-sm font-light">مكبرات صوت أمازون اللاسلكية</p>
                                    <Link href="/" className="text-white underline">
                                        تسوق الأن
                                    </Link>
                                </div>
                            </div>


                            <div className="perfum relative w-full sm:w-1/2">
                                <Image src={perfum} alt="perfume" className="w-full h-auto" />
                                <div className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white w-3/4">
                                    <h4 className="text-lg font-bold">عطر</h4>
                                    <p className="text-sm font-light">عطر جوتشي انتنس عود</p>
                                    <Link href="/" className="text-white underline">
                                        تسوق الأن
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewArrival