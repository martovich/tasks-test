import React from "react";
import s from "./Span.module.css"

class Span extends React.Component {
    render() {
        return (
            <div className={s.spn}>
                <span>{this.props.value}</span>
            </div>
        )
    }
}

export default Span;