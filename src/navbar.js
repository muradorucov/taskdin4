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
                <ul>
                    {data.map(item =>
                        <li key={item.id}>
                            <i className={item.icon}></i>{item.name}
                        </li>
                    )}
                </ul>
            </aside>
        )
    }
}