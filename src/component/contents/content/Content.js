import React from "react";

export default class Content extends React.Component{
    state = {
        data: []
    };
    getData=()=>{
        fetch("https://6278b7bcd00bded55add177e.mockapi.io/api/taskdin/content")
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
            <div className="content">
                {data.map(item =>
                    <div className="content-item" key={item.id}>
                        <div className={item.colorClass}></div>
                        <div className="desc">
                            <p>Getting Started</p>
                            {item.isDoneProgress ? <div className="btn"><span>COMPLETED</span></div> :<div className="btn in-progres"><span>0%</span></div>}
                        </div>
                    </div>
                )}
            </div>   
        )
    }
}