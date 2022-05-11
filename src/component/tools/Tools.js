import React from "react";

import Search from "./search/Search";
import Tool from "./tool/Tool";

export default class Tools extends React.Component{
    render(){
        return(
            <div className="tools">
                <Search/>
                <Tool/>
            </div>
        )
    }
}