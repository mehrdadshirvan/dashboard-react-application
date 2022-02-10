import React , { useState } from "react";
import Connection from './../../../Api/Connection';


function CategoryHomeComponent(props){

    // const [ categoryList , setCategoryList ] = useState(false);

    let categoryList = [
        {id:1,image_url:"https://www.rosena.ir/public/files/home-page-cat/shampoo-cat-1.jpg",link_to:"https://www.rosena.ir/category/hair-shampoo",title:"شامپو"},
        {id:2,image_url:"https://www.rosena.ir/public/files/home-page-image/mascara.jpg",link_to:"https://www.rosena.ir/category/Eyebrow-Makeup",title:"ریمل و خط چشم"},
        {id:3,image_url:"https://www.rosena.ir/public/files/home-page-cat/suncream-cat-2.jpg",link_to:"https://www.rosena.ir/category/sunscreen-cream",title:"کرم ضدآفتاب"},
        {id:4,image_url:"https://www.rosena.ir/public/files/home-page-cat/hair-pro-cat-1.jpg",link_to:"https://www.rosena.ir/category/Mask-and-hair-care",title:"مراقبت مو"},
        {id:5,image_url:"https://www.rosena.ir/public/files/home-page-cat/skin-care-cat-1.jpg",link_to:"https://www.rosena.ir/category/Skin-Care",title:"مراقبت پوست"},
        {id:6,image_url:"https://www.rosena.ir/public/files/home-page-cat/cat-nail.jpg",link_to:"https://www.rosena.ir/category/Nail-Polish",title:"لوازم آرایشی"},
    ]




    return(
        <div className={`container py-5`}>
            {/*{ getCategoryList() }*/}
            <div className={`row mb-3`}>
                <div className={`col-sm-6 m-auto`}>
                    <p className={`d-block text-center font-25`}>
                        دنبال چی هستی؟
                    </p>
                </div>
            </div>
            <div className={`row`}>
                {
                    categoryList.map(item => <CategoryHomeComponentItem key={item.id} linkTo={item.link_to} imageUrl={item.image_url} title={item.title} />)
                }
            </div>
        </div>
    )
}


function getCategoryList() {
    // ajax
    Connection.get(`/app/category`)
        .then(response => {
            console.log(response)
            // setCategoryList(response)
        })
        .catch(err => {
            console.log(err);
        })
}

function CategoryHomeComponentItem(props){
    return (
        <div className={`col-sm-2 col-xs-6`} key={props.id}>
            <div className={`m-1`}>
                <a href={props.linkTo} className={`text-decoration-none`}>
                    <img src={props.imageUrl} className={`rounded-circle m-auto d-block shadow-sm h-shadow cursor-pointer`} alt={props.title}/>
                </a>
                <a href={props.linkTo} className={`text-decoration-none text-center d-block m-0 py-2 text-secondary`}>
                    {props.title}
                </a>
            </div>
        </div>
    );
}

export default CategoryHomeComponent;