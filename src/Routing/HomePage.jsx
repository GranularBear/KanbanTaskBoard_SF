import React from "react";

import Header from "../HeaderComp/Header";
import Home from "../HomeComp/Home";
import Footer from "../FooterComp/Footer";

const HomePage = (props) => {
    return (
        <>
            <Header headerTitle='Awesome Kanban Board' />
            <Home data={props.data} setData={props.setData} />
            <Footer data={props.data} setData={props.setData} />
        </>
    )
}


export default HomePage;
