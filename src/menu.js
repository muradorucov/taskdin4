import React from "react";

export default class Menu extends React.Component{
    state = {
        data: []
    };
    getData=()=>{
        fetch("https://6278b7bcd00bded55add177e.mockapi.io/api/taskdin/menu")
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
            <div className="header">
                {data.map(item =>
                        <p key={item.id}>
                            {item.name}
                        </p>
                    )}
            </div>
        )
    }
}