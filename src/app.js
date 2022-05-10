import React,{Component} from "react";

import Content from "./content";
import ContentInfo from "./contentinfo";
import Menu from "./menu";
import Navbar from "./navbar";
import Search from "./search";
import Tool from "./tool";

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
                        <div className="contents">
                            <ContentInfo/>
                            <Content/>
                        </div>
                    </section>
                    <Navbar/>
                </div>
            </div>
        )
    }
}