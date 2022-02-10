import React from "react";
import SliderHomeComponent from "./HomeComponent/SliderHomeComponent";
import CategoryHomeComponent from "./HomeComponent/CategoryHomeComponent";
import ProductSliderHomeComponent from "./HomeComponent/ProductSliderHomeComponent";

class Home extends React.Component {

    render() {
        return (
            <>
                <SliderHomeComponent />

                <CategoryHomeComponent />

                {/*<ProductSliderHomeComponent />*/}
                <div className={`container-fluid`}>
                    <div className={`row`}>
                        <div className={`col-sm-6 m-auto`}>
                            <div className={`card`}>
                                <div className={`card-body`}>
                                    <p>
                                        shop
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;