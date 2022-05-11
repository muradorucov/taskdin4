import React,{Component} from "react";

import Contents from "./component/contents/Contents";
import Menu from "./component/menu/Menu";
import Navbar from "./component/navbar/Navbar";
import Search from "./component/search/Search";
import Tool from "./component/tool/Tool";

export default class App extends Component{
    render(){
        return(
            <div className="container">
                <Menu/>
                <div className="row">
                    <section>
                        <div className="tools">
                            <Search/>
                            <Tool/>
                        </div>
                        <Contents/>
                    </section>
                    <Navbar/>
                </div>
            </div>
        )
    }
}