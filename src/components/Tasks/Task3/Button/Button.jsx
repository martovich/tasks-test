import React from "react";
import s from "./Button.module.css"


class Button extends React.Component {
    render() {
        let val = this.props.value+1;
        return (
            <div className={s.btn}>
                <button onClick={() => { this.props.updateData(val)}}>Click me!</button>
            </div>
        )
    }
}

export default Button;