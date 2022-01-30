import React from "react";

class Footer extends React.PureComponent {


    render() {
        return (
            <>
                <div className={`container-fluid bg-light mt-2 shadow`}>
                    <div className={`'container`}>
                        <div className={`row`}>
                            <div className={`col-sm-12 m-auto text-center py-4`}>
                                <img src="https://visapickmap.com/assets/site/images/logo-dark.png" alt="PickMap application" width="300px"/>
                                <p className={`d-block p-2`}>
                                    با استفاده از اپلیکیشن پیک مپ و در کنار تیم حرفه ای ویزاپیک، ویزای سرمایه گزاری استرالیا در دستان شماست.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`container-fluid bg-dark`}>
                    <div className={`'container`}>
                        <div className={`row`}>
                            <div className={`col-sm-12 p-2`}>
                                <p className={`m-0 p=3 text-white text-center d-block`}>Copyright {new Date().getFullYear()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Footer;