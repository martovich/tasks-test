import React from "react";
import s from "./Task3.module.css"
import Span from "./Span/Span";
import Input from "./Input/Input";
import Button from "./Button/Button";
import Names from "./Names/Names";

class Task3 extends React.Component {
    state = {
        names: [],
        spanVal: 0,
        msg: ''
    };

    updateData = (value) => {
        if(this.state.msg.length > 0)
            alert("Привет " + this.state.msg);
        this.setState({ spanVal: value, msg:''})
        this.addName(this.state.msg);
    }

    updateAlert = (value) => {
        this.setState({ msg: value})
    }

    addName = (value) => {
        let newName = {
            name: value
        };
        let newNames = [...this.state.names, newName];
        this.setState({
            names: newNames
        })
    }


    render() {
        return (
            <div className={s.task}>
                <Span value = {this.state.spanVal}/>
                <Button value = {this.state.spanVal} updateData={this.updateData} />
                <Input value = {this.state.msg} updateAlert={this.updateAlert}/>
                <Names names = {this.state.names}/>
            </div>
        )
    }
}

export default Task3;