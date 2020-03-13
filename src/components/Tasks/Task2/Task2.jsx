import React from "react";
import s from "./Task2.module.css"


/*const qualitysArr = [
    {quality: 'рационалист', style: ''},
    {quality: 'комуннист', style: s.colTaskModule2},
    {quality: 'анимешник', style: ''}
];*/

const qualitysArr = [
    {quality: 'рационалист'},
    {quality: 'комуннист'},
    {quality: 'анимешник'}
];


class Task2 extends React.Component {
    render = () => {
        let qArr = qualitysArr.map((arr, index) =>
            /*<div key={index} className = {arr.style}>
                <span>{arr.quality}</span>
            </div>*/
            <div key={index} className = {index === 1 ? s.colTaskModule2 : ''}>
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