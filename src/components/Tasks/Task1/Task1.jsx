import React from "react";
import s from "./Task1.module.css"
import Msg from "./Msg/Msg";
import Fio from "./Fio/Fio";

const Task1 = () => (
    <div className={s.task}>
        <Fio/>
        <Msg name="Артём Москалёв"
             msg="qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"
             time="10:20" msgPos="usr1"/>
        <Msg name="Дима К"
             msg="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque id libero nam omnis provident ratione repellat saepe ullam voluptatem. Architecto commodi debitis facilis maiores possimus quia reprehenderit totam voluptate?"
             time="10:22" msgPos="usr2"/>

    </div>
);

export default Task1;