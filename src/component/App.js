import React,{Component} from "react";

import Contents from "./contents/Contents";
import Menu from "./menu/Menu";
import Navbar from "./navbar/Navbar";
import Tools from "./tools/Tools";


export default class App extends Component{
    render(){
        return(
            <div className="container">
                <Menu/>
                <div className="row">
                    <section>
                        <Tools/>
                        <Contents/>
                    </section>
                    <Navbar/>
                </div>
            </div>
        )
    }
}