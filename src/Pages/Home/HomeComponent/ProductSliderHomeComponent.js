import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

function ProductSliderHomeComponent(props){

    let productSliderList = [
        {
            id:1,
            title:"ژل شستشو صورت ( فیس واش ) کامان مدل Dry مناسب پوست خشک حجم 500 میلی لیتر",
            image_url: "https://www.rosena.ir/public/files/product/pro-brands/comeon/comon-face-wash-dry.jpg",
            link_to: "#"
        },
        {
            id:2,
            title:"ژل شستشو صورت ( فیس واش ) کامان مدل Dry مناسب پوست خشک حجم 500 میلی لیتر",
            image_url: "https://www.rosena.ir/public/files/product/pro-brands/comeon/comon-face-wash-normal.jpg",
            link_to: "#"
        },
        {
            id:3,
            title:"تونر پاک کننده الارو مدل Fresh Balancing مناسب پوست چرب حجم 200 میلی لیتر",
            image_url: "https://www.rosena.ir/public/files/product/pro-brands/ellaro/e55555_1e1729c2a0909e30f07529c5bc206820.jpg",
            link_to: "#"
        },
        {
            id:6,
            title:"تونر پاک کننده الارو مدل Fresh Balancing مناسب پوست چرب حجم 200 میلی لیتر",
            image_url: "https://www.rosena.ir/public/files/product/pro-brands/ellaro/e55555_1e1729c2a0909e30f07529c5bc206820.jpg",
            link_to: "#"
        },
        {
            id:4,
            title:"کرم پودر مایع گریم گیاهی مروان خیر هلویی روشن شماره 303 حجم 80 میلی لیتر",
            image_url: "https://www.rosena.ir/public/files/product/%DA%A9%D8%B1%D9%85%20%D9%BE%D9%88%D8%AF%D8%B1/marvankhair-cream-gream-80ml-code303.jpg",
            link_to: "#"
        },
        {
            id:5,
            title:"ریمل حجم دهنده و بلند کننده الیزاماتیک مدل Valume & Long Lashes",
            image_url: "https://www.rosena.ir/public/files/product/%D8%A2%D8%B1%D8%A7%DB%8C%D8%B4%20%D8%B5%D9%88%D8%B1%D8%AA/%D8%B1%DB%8C%D9%85%D9%84/4238698.jpg",
            link_to: "#"
        },
        {
            id:7,
            title:"ریمل حجم دهنده و بلند کننده الیزاماتیک ",
            image_url: "https://www.rosena.ir/public/files/product/%D8%A2%D8%B1%D8%A7%DB%8C%D8%B4%20%D8%B5%D9%88%D8%B1%D8%AA/%D8%B1%DB%8C%D9%85%D9%84/4238698.jpg",
            link_to: "#"
        },

    ]
    return (
            <div className='container'>
                <div className={`row`}>
                    <div className={`col-sm-12`}>
                       <div className={``}>
                           <h3 className={`py-2 px-2 m-0 border-bottom border-secondary mb-3`}>
                               <a href={`#`} className={`text-decoration-none font-18 text-secondary`}>
                                   <i className={`ti-alert`}></i>
                                   <span className={`mx-2`}>
                                    لیست محصولات
                                </span>
                               </a>
                           </h3>
                           <div className={`product-slider py-3`}>
                               <Swiper
                                   modules={[Navigation, Pagination, Scrollbar, A11y]}
                                   spaceBetween={50}
                                   slidesPerView={5}
                                   navigation
                                   onSlideChange={() => console.log('slide change')}
                                   onSwiper={(swiper) => console.log(swiper)}
                               >
                                   {
                                       productSliderList.map(
                                           item => <div className={`col-xs-6`}>
                                               <SwiperSlide accessKey={item.id}>
                                                   <div>
                                                       <a href={item.link_to} className={`mb-3 d-block`}>
                                                           <img src={item.image_url}
                                                                className={`w-100 d-block m-auto`}
                                                                alt={item.title}/>
                                                       </a>
                                                       <a href={item.link_to}  className={`text-decoration-none d-block text-right font-12 text-secondary `}>
                                                           {item.title}
                                                       </a>
                                                   </div>
                                               </SwiperSlide>
                                           </div>)

                                   }
                               </Swiper>
                           </div>
                       </div>
                    </div>
                </div>
            </div>

    )
}

export default ProductSliderHomeComponent;