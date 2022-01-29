import React from "react";

class Home extends React.Component {

    render() {
        return (
            <>
                <div className={`container-fluid`}>
                    <div className={`row`}>
                        <div className={`col-sm-6 m-auto`}>
                            <div className={`card`}>
                                <div className={`card-body`}>
                                    <p>
                                        Home
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