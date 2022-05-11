import React from "react";

import ContentInfo from "./content-info/ContentInfo";
import Content from "./content/Content";


export default class Contents extends React.Component{
    render(){
        return(
            <div className="contents">
                <ContentInfo/>
                <Content/>
            </div>
        )
    }
}