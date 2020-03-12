import React from "react";

const qualitysArr = [
    {quality: 'рационалист', style : ''},
    {quality: 'комуннист', style:'col'},
    {quality: 'анимешник', style: ''}
];

class Task2 extends React.Component {
    render = () => {
        let qArr = qualitysArr.map((arr, index) => <div key={index} className={arr.style}><span>{arr.quality}</span></div>);
        return (
            <div>
                {qArr}
            </div>
        );
    }
}
export default Task2;