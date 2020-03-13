import React from "react";
import s from "./Task2.module.css"


const qualitysArr = [
    {quality: 'рационалист', style: ''},
    {quality: 'комуннист', style: 'colTaskModule2'},
    {quality: 'анимешник', style: ''}
];


class Task2 extends React.Component {
    render = () => {
        let qArr = qualitysArr.map((arr, index) =>
            <div key={index} className = {`${arr.style}` === 'colTaskModule2' ? `${s.colTaskModule2}`:''}>
                <span>{arr.quality}</span>
            </div>
        );
        return (
            <div>
                {qArr}
            </div>
        );
    }
}

export default Task2;