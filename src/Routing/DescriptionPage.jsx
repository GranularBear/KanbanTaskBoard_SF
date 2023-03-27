import React from "react";

import Header from '../HeaderComp/Header';
import Description from "../DescriptionComp/Description";
import Footer from "../FooterComp/Footer";

const DescriptionPage = (props) => {
    return (
        <>
            <Header headerTitle='Awesome Kanban Board' />
            <Description data={props.data} setData={props.setData}/>
            <Footer data={props.data} setData={props.setData} />
        </>
    )
}

export default DescriptionPage;