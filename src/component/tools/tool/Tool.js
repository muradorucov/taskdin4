import React from "react";

export default class Tool extends React.Component{
    state = {
        data: []
    };
    getData=()=>{
        fetch("https://6278b7bcd00bded55add177e.mockapi.io/api/taskdin/tool")
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
            <div className="tool">
                {data.map(item =>
                        <button key={item.id} className={item.className}><i className={item.icon}></i>{item.desc}</button>
                    )}
            </div>
        )
    }
}