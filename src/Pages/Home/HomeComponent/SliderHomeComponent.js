import React, {Fragment} from "react";
import {Carousel} from "react-bootstrap";


class SliderHomeComponent extends React.PureComponent{
    state = {
        sliderList: [
            {id: 1, image_url: 'https://www.rosena.ir/public/files/slider/139812042334.jpeg', title: 'کرم پودر کالیستا'},
            {id: 2, image_url: 'https://www.rosena.ir/public/files/slider/schone-slider-cream.jpg', title: 'محصولات شون'},
        ]
    }

    render() {
        return (
            <>
                {
                    this.state.sliderList.length > 0
                        ? <div className={`container py-3`}>
                            <div className={`row`}>
                                <div className={`col-sm-12 m-auto p-0`}>
                                    <Carousel>
                                        {
                                            this.state.sliderList.map(item => <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={item.image_url}
                                                    alt={item.title}
                                                />
                                                <Carousel.Caption>
                                                    <h3>{item.title}</h3>
                                                </Carousel.Caption>
                                            </Carousel.Item>)
                                        }
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                        : <></>
                }
            </>
        )
    }
}

export default SliderHomeComponent;