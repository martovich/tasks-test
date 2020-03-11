import React from "react";
import s from "./Task1.module.css"

const Msg = (props) => (
    <div className={props.msgPos}>
        <div className={s.message}>
            <p className={s.name}>{props.name}</p>
            {props.msg}
            <span className={s.timestamp}>{props.time}</span>
        </div>
    </div>
);

const Fio = (props) => (
    <div className={s.fio}>
        <h1>Артём Москалёв</h1>
    </div>
);

const Task1 = () => (
    <div className={s.task}>
        <Fio/>
        <Msg name="Артём Москалёв" msg="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis eius illum iste labore
            minus, neque nihil nostrum tenetur?" time="10:20" msgPos={s.usr1}/>
        <Msg name="Дима К"
             msg="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque id libero nam omnis provident ratione repellat saepe ullam voluptatem. Architecto commodi debitis facilis maiores possimus quia reprehenderit totam voluptate?"
             time="10:22" msgPos={s.usr2}/>

    </div>
);

export default Task1;