import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

function ProductSliderHomeComponent(props){

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
                           <div className={`product-slider`}>
                               <Swiper
                                   modules={[Navigation, Pagination, Scrollbar, A11y]}
                                   spaceBetween={50}
                                   slidesPerView={5}
                                   navigation
                                   onSlideChange={() => console.log('slide change')}
                                   onSwiper={(swiper) => console.log(swiper)}
                               >
                                   <SwiperSlide>
                                       <div>
                                           <a href={`#`} className={`mb-3 d-block`}>
                                               <img src="https://www.rosena.ir/public/files/product/pro-brands/comeon/comon-face-wash-dry.jpg"
                                               className={`w-100 d-block m-auto`}
                                               alt="product-50"/>
                                           </a>
                                           <a href={`#`}  className={`text-decoration-none d-block text-right font-12 text-secondary `}>
                                               ژل شستشو صورت ( فیس واش ) کامان مدل Dry مناسب پوست خشک حجم 500 میلی لیتر
                                           </a>
                                       </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                       <div>
                                           <a href={`#`} className={`mb-3 d-block`}>
                                               <img src="https://www.rosena.ir/public/files/product/pro-brands/comeon/comon-face-wash-dry.jpg"
                                                    className={`w-100 d-block m-auto`}
                                                    alt="product-50"/>
                                           </a>
                                           <a href={`#`}  className={`text-decoration-none d-block text-right font-12 text-secondary `}>
                                               ژل شستشو صورت ( فیس واش ) کامان مدل Dry مناسب پوست خشک حجم 500 میلی لیتر
                                           </a>
                                       </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                       <div>
                                           <a href={`#`} className={`mb-3 d-block`}>
                                               <img src="https://www.rosena.ir/public/files/product/pro-brands/comeon/comon-face-wash-dry.jpg"
                                                    className={`w-100 d-block m-auto`}
                                                    alt="product-50"/>
                                           </a>
                                           <a href={`#`}  className={`text-decoration-none d-block text-right font-12 text-secondary `}>
                                               ژل شستشو صورت ( فیس واش ) کامان مدل Dry مناسب پوست خشک حجم 500 میلی لیتر
                                           </a>
                                       </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                       <div>
                                           <a href={`#`} className={`mb-3 d-block`}>
                                               <img src="https://www.rosena.ir/public/files/product/pro-brands/comeon/comon-face-wash-dry.jpg"
                                                    className={`w-100 d-block m-auto`}
                                                    alt="product-50"/>
                                           </a>
                                           <a href={`#`}  className={`text-decoration-none d-block text-right font-12 text-secondary `}>
                                               ژل شستشو صورت ( فیس واش ) کامان مدل Dry مناسب پوست خشک حجم 500 میلی لیتر
                                           </a>
                                       </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                       <div>
                                           <a href={`#`} className={`mb-3 d-block`}>
                                               <img src="https://www.rosena.ir/public/files/product/pro-brands/comeon/comon-face-wash-dry.jpg"
                                                    className={`w-100 d-block m-auto`}
                                                    alt="product-50"/>
                                           </a>
                                           <a href={`#`}  className={`text-decoration-none d-block text-right font-12 text-secondary `}>
                                               ژل شستشو صورت ( فیس واش ) کامان مدل Dry مناسب پوست خشک حجم 500 میلی لیتر
                                           </a>
                                       </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                       <div>
                                           <a href={`#`} className={`mb-3 d-block`}>
                                               <img src="https://www.rosena.ir/public/files/product/pro-brands/comeon/comon-face-wash-dry.jpg"
                                                    className={`w-100 d-block m-auto`}
                                                    alt="product-50"/>
                                           </a>
                                           <a href={`#`}  className={`text-decoration-none d-block text-right font-12 text-secondary `}>
                                               ژل شستشو صورت ( فیس واش ) کامان مدل Dry مناسب پوست خشک حجم 500 میلی لیتر
                                           </a>
                                       </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                       <div>
                                           <a href={`#`} className={`mb-3 d-block`}>
                                               <img src="https://www.rosena.ir/public/files/product/pro-brands/comeon/comon-face-wash-dry.jpg"
                                                    className={`w-100 d-block m-auto`}
                                                    alt="product-50"/>
                                           </a>
                                           <a href={`#`}  className={`text-decoration-none d-block text-right font-12 text-secondary `}>
                                               ژل شستشو صورت ( فیس واش ) کامان مدل Dry مناسب پوست خشک حجم 500 میلی لیتر
                                           </a>
                                       </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                       <div>
                                           <a href={`#`} className={`mb-3 d-block`}>
                                               <img src="https://www.rosena.ir/public/files/product/pro-brands/comeon/comon-face-wash-dry.jpg"
                                                    className={`w-100 d-block m-auto`}
                                                    alt="product-50"/>
                                           </a>
                                           <a href={`#`}  className={`text-decoration-none d-block text-right font-12 text-secondary `}>
                                               ژل شستشو صورت ( فیس واش ) کامان مدل Dry مناسب پوست خشک حجم 500 میلی لیتر
                                           </a>
                                       </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                       <div>
                                           <a href={`#`} className={`mb-3 d-block`}>
                                               <img src="https://www.rosena.ir/public/files/product/pro-brands/comeon/comon-face-wash-dry.jpg"
                                                    className={`w-100 d-block m-auto`}
                                                    alt="product-50"/>
                                           </a>
                                           <a href={`#`}  className={`text-decoration-none d-block text-right font-12 text-secondary `}>
                                               ژل شستشو صورت ( فیس واش ) کامان مدل Dry مناسب پوست خشک حجم 500 میلی لیتر
                                           </a>
                                       </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                       <div>
                                           <a href={`#`} className={`mb-3 d-block`}>
                                               <img src="https://www.rosena.ir/public/files/product/pro-brands/comeon/comon-face-wash-dry.jpg"
                                                    className={`w-100 d-block m-auto`}
                                                    alt="product-50"/>
                                           </a>
                                           <a href={`#`}  className={`text-decoration-none d-block text-right font-12 text-secondary `}>
                                               ژل شستشو صورت ( فیس واش ) کامان مدل Dry مناسب پوست خشک حجم 500 میلی لیتر
                                           </a>
                                       </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                       <div>
                                           <a href={`#`} className={`mb-3 d-block`}>
                                               <img src="https://www.rosena.ir/public/files/product/pro-brands/comeon/comon-face-wash-dry.jpg"
                                                    className={`w-100 d-block m-auto`}
                                                    alt="product-50"/>
                                           </a>
                                           <a href={`#`}  className={`text-decoration-none d-block text-right font-12 text-secondary `}>
                                               ژل شستشو صورت ( فیس واش ) کامان مدل Dry مناسب پوست خشک حجم 500 میلی لیتر
                                           </a>
                                       </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                       <div>
                                           <a href={`#`} className={`mb-3 d-block`}>
                                               <img src="https://www.rosena.ir/public/files/product/pro-brands/comeon/comon-face-wash-dry.jpg"
                                                    className={`w-100 d-block m-auto`}
                                                    alt="product-50"/>
                                           </a>
                                           <a href={`#`}  className={`text-decoration-none d-block text-right font-12 text-secondary `}>
                                               ژل شستشو صورت ( فیس واش ) کامان مدل Dry مناسب پوست خشک حجم 500 میلی لیتر
                                           </a>
                                       </div>
                                   </SwiperSlide>
                                   <SwiperSlide>
                                       <div>
                                           <a href={`#`} className={`mb-3 d-block`}>
                                               <img src="https://www.rosena.ir/public/files/product/pro-brands/comeon/comon-face-wash-dry.jpg"
                                                    className={`w-100 d-block m-auto`}
                                                    alt="product-50"/>
                                           </a>
                                           <a href={`#`}  className={`text-decoration-none d-block text-right font-12 text-secondary `}>
                                               ژل شستشو صورت ( فیس واش ) کامان مدل Dry مناسب پوست خشک حجم 500 میلی لیتر
                                           </a>
                                       </div>
                                   </SwiperSlide>

                               </Swiper>
                           </div>
                       </div>
                    </div>
                </div>
            </div>

    )
}

function ProductSliderHomeComponentItem(props){
    // return div{
    //     for(var i =0; i < 20;i++){
    //
    //     }
    // }
}
export default ProductSliderHomeComponent;