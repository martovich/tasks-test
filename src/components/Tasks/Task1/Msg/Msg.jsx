import React from "react";
import s from "./Msg.module.css"

const Msg = (props) => (
    <div className={props.msgPos === 'usr1' ? s.usr1 : s.usr2}>
        <div className={s.message}>
            <p className={s.name}>{props.name}</p>
            {props.msg}
            <span className={s.timestamp}>{props.time}</span>
        </div>
    </div>
);

export default Msg;