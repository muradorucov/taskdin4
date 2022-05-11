import React from "react";

export default class ContentInfo extends React.Component{
    state = {
        data: []
    };
    getData=()=>{
        fetch("https://6278b7bcd00bded55add177e.mockapi.io/api/taskdin/content-info")
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
            <div className="content-info">
                <ul>
                    {data.map(item =>
                        <li key={item.id}>
                            <span>{item.until}</span>
                            <p>{item.condition}</p>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}