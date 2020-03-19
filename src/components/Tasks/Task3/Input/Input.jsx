import React from "react";
import s from "./Input.module.css"

class Input extends React.Component {
    render() {
        return (
            <div className={s.inp}>
                <input type="text" value={this.props.value} placeholder="Введите Имя..." onChange={event => { this.props.updateAlert(event.target.value)}}/>
            </div>
        )
    }
}
export default Input;