import React from "react";

export default class Navbar extends React.Component{
    state = {
        data: [],
        responsiveNav:"",
        navNone:"",
        classBtn1:"navbar-btn1",
        classBtn2:"navbar-btn2"
    };
    clickHandler1 = () => {
        this.setState({ responsiveNav: "responsive-nav",classBtn1:"navbar-btn1 navbar-btn-d-none", classBtn2:"navbar-btn2 navbar-btn"});
    };
    clickHandler2 = () => {
        this.setState({ navNone: "nav-d-none", classBtn1:"navbar-btn1 navbar-btn", classBtn2:"navbar-btn2 navbar-btn-d-none"});
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
        const { data,responsiveNav,navNone,classBtn2,classBtn1 } = this.state;
        return(
            <aside className="navbar">
                <div className={classBtn1}>
                        <span className="navbar-icon" onClick={this.clickHandler1}><i className="bi bi-list"></i></span>
                </div>
                <div className={classBtn2}>
                        <span className="navbar-icon" onClick={this.clickHandler2}><i className="bi bi-list"></i></span>
                </div>
                <ul className={responsiveNav + navNone}>
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