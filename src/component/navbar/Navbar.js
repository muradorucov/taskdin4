import React from "react";

export default class Navbar extends React.Component{
    state = {
        data: []
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
        const { data } = this.state;
        return(
            <aside className="navbar">
                <div className="navbar-btn">
                        <span className="navbar-icon" ><i className="bi bi-list"></i></span>
                </div>
                <ul>
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