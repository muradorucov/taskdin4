import React from "react";

export default class Navbar extends React.Component{
    state = {
        data: [],
        className1:"",
        className2:""
    };
    clickHandler1 = () => {
        this.setState({ className1: "hiy" });
        console.log("hello");
    };
    clickHandler2 = () => {
        this.setState({ className2: "hit" });
        console.log("hello");
    };
    getData=()=>{
        fetch("https://6278b7bcd00bded55add177e.mockapi.io/api/taskdin/navbar")
        .then(res=>res.json())
        .then(data=>{
            this.setState({ data: data })       
        })
    }
    componentDidMount(){
        this.getData();
    }
    render(){
        const { data,className1,className2 } = this.state;
        return(
            <aside className="navbar">
                <div className="navbar-btn1">
                        <span className="navbar-icon" onClick={this.clickHandler1}><i className="bi bi-list"></i></span>
                </div>
                <div className="navbar-btn2">
                        <span className="navbar-icon" onClick={this.clickHandler2}><i className="bi bi-list"></i></span>
                </div>
                <ul className={className1 + className2}>
                    {data.map(item =>
                        <li key={item.id}>
                            <i className={item.icon}></i>
                            <span>{item.name}</span>
                        </li>
                    )}
                </ul>
            </aside>
        )
    }
}